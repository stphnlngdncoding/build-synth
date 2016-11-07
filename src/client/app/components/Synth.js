import React from 'react';
import { Component } from 'react';
import SynthDropdown from './SynthDropdown'
import Effect from './Effect'
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
         args: [{delayTime:'4n'}, {normalRange: 0.9}]
        },
        {
          name: "Distortion",
          args: [{normalRange: 0.8}]
        }
      ],
      synthDropdown: "Synth",
      keymap
    }
    this.handleSynthDropdownChange = this.handleSynthDropdownChange.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
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
      // console.log(eff);
      let effargs = eff.args.map(e => {
        return Object.values(e)[0];
      })
      // console.log(eff.name, effargs)
      return new Tone[eff.name](...effargs)
    })

    let synthNode = effectArray.splice(0, 1)[0];
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
  handleSlider(e, effectName, propertyName) {
    // console.log(propertyName)
    let range = e.target.value / 100;

    let stackCopy = this.state.stack.slice().map(ef => {
      if (ef.name === effectName) {
        ef.args.forEach(efProp => {
          if (efProp.hasOwnProperty("normalRange")) {
            efProp.normalRange = range;
          }
        })
        return ef
      } 
      return ef
    })
    // console.log(stackCopy);
    this.setState({stack: stackCopy})
    // this.buildSynth();
    // console.log("arguments", arguements);
    // console.log(effectName)
  }
  render() {
    return (
      <div>
        <SynthDropdown
          handleChange={this.handleSynthDropdownChange}
          value={this.state.synthDropdown}
        />
        {this.state.stack.slice(1).map((ef,i) => {
          return (<Effect 
                    key={i}
                    name={ef.name}
                    args={ef.args}
                    handleSlider={this.handleSlider} />)
        })}
      </div>
      
    )
  }
}

export default Synth;