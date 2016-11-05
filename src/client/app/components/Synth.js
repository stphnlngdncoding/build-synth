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
    // let buildStr = 'new ';
    
    // let stackStr = this.state.stack
    //   .map((compObj, i, a) => {
    //     console.log()
    //     let args = compObj.args.length ? compObj.args.join(',') : '';
    //     if (a.length - 1 !== i) {
    //       return `Tone.${compObj.name}(${args}).`
    //     }
    //     return `Tone.${compObj.name}(${args})`
    //   }).join("");
    let effectsArr = this.mapEffects();
    console.log(effectsArr);
    //how to chain stuff;
    // const dist = new Tone.Distortion(0.8);
    // const ping = new Tone.PingPongDelay('4n', .2);
    // syn = new Tone.Synth().chain(dist, ping, Tone.Master);
    // syn.triggerAttackRelease('D5', '8n');
    // console.log(syn);
    
  }
  mapEffects() {
    return this.state.stack  
      .map((compObj, i, a) => {
        let args = compObj.args.length ? compObj.args.join(',') : '';
        let name = `ef${i}`;
        let effectObj = {};
        effectObj[name] = `Tone.${compObj.name}(${args})`
        return effectObj;
      });
  }
  playSound(e) {
    //try passing the synth down as a prop
    let key = e.key;
    // console.log(keymap[key]);
    // const ping = new Tone.PingPongDelay('4n', .2).toMaster();
    // let synth = new Tone.Synth().connect(ping);
    // console.log(`${keymap[key]}${keymap.oct}`)
    // syn.triggerAttackRelease(`${keymap[key]}${keymap.oct}`, '8n')
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