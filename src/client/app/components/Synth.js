import React from 'react';
import { Component } from 'react';
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
      synthString: '',
      keymap
    }
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
  buildSynth() {
    const effectArray = this.state.stack.map(eff => {
      return new Tone[eff.name](...eff.args)
    })
    let synthNode = effectArray.splice(0, 1)[0];
    syn = synthNode.chain(...effectArray, Tone.Master);
    
  }

  playSound(e) {
    let key = e.key;
    if (keymap[key]) syn.triggerAttackRelease(`${keymap[key]}${keymap.oct}`, '8n')
  }

  render() {
    return (
      <div>Press asdf!</div>
    )
  }
}

export default Synth;