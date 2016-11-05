import React from 'react';
import { Component } from 'react';
import keymap from '../misc/keymap';

let syn;

class Synth extends Component {
  constructor() {
    super();
    this.state = {
      stack: [
        "Synth"
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
    // const dist = new Tone.Distortion(0.8).toMaster();
    // const ping = new Tone.PingPongDelay('4n', .2).toMaster();
    // syn = new Tone.Synth().connect(dist);
    // syn.triggerAttackRelease('D5', '8n');
    // console.log(syn);
    
  }
  playSound(e) {
    //try passing the synth down as a prop
    // let key = e.key;
    // console.log(keymap[key]);
    // const ping = new Tone.PingPongDelay('4n', .2).toMaster();
    // let synth = new Tone.Synth().connect(ping);
    // console.log(`${keymap[key]}${keymap.oct}`)
    // synth.triggerAttackRelease(`${keymap[key]}${keymap.oct}`, '8n')
  }
  onClick() {
    
  }
  render() {
    return (
      <div>synth component</div>
    )
  }
}

export default Synth;