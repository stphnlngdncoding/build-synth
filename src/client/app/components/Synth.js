import React from 'react';
import { Component } from 'react';
import SynthDropdown from './SynthDropdown'
import keymap from '../misc/keymap';

let syn;

class Synth extends Component {
  constructor() {
    super();
    this.state = {
      stack: [
        {
          name: "Synth",
         args: []
        },
        {
        name:"PingPongDelay",
         args: ['4n', 0.9]
        },
        {
          name: "Distortion",
          args: [0.8]
        }
      ],
      synthDropdown: "Synth",
      keymap
    }
    this.handleSynthDropdownChange = this.handleSynthDropdownChange.bind(this);
  }
  componentWillMount() {
    window.addEventListener('keypress', this.playSound);
  }
  componentWillUnmount() {
    window.removeEventListener('keypress', this.playSound);
  }
  componentDidMount() {
    this.buildSynth();
  }
  componentDidUpdate() {
    this.buildSynth();
  }
  buildSynth() {
    const effectArray = this.state.stack.map(eff => {
      return new Tone[eff.name](...eff.args)
    })
    let synthNode = effectArray.splice(0, 1)[0];
    console.log(synthNode)
    syn = synthNode.chain(...effectArray, Tone.Master);
    
  }
  playSound(e) {
    let key = e.key;
    if (keymap[key]) syn.triggerAttackRelease(`${keymap[key]}${keymap.oct}`, '8n')
  }
  handleSynthDropdownChange(e) {
    console.log(e.target.value);
    const stackClone = this.state.stack.slice();
    stackClone[0] = {
      name: e.target.value,
      args: []
    }
    this.setState({
      stack: stackClone,
      synthDropdown: e.target.value
    })
  }
  render() {
    return (
      <div>
        <SynthDropdown
          handleChange={this.handleSynthDropdownChange}
          value={this.state.synthDropdown}
        />
      </div>
      
    )
  }
}

export default Synth;