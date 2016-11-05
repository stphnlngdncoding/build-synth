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
    //how to chain stuff;
    //create variables 
    //attach chain to synth and pass variables in

    // const dist = new Tone.Distortion(0.8);
    // const ping = new Tone.PingPongDelay('4n', .2);
    // syn = new Tone.Synth().chain(dist, ping, Tone.Master);
    // syn.triggerAttackRelease('D5', '8n');
    // console.log(syn);
    this.buildSynth();
    
    
  }
  buildSynth() {
    let effects = this.mapEffects();
    console.log(effects);
    
    // effects.forEach((eff) => {
    //   let evalStr = `const ${eff.name} = ${eff.fn};`
    //   console.log(evalStr);
    //   eval(evalStr)
    // })
    console.log("this should be distortion", effects[1])
    const evalStr = `var ${effects[1].name} = ${effects[1].fn}`
    // console.log("eval string", evalStr)
    eval(evalStr)
    console.log(eval('var test = "test"'))
    // console.log(test)
  }
  mapEffects() {
    return this.state.stack  
      .slice(1)
      .map((compObj, i, a) => {
        let args = compObj.args.length ? compObj.args.join(',') : '';
        let name = `ef${i}`;
        let effectObj = {};
        effectObj.name = name;
        effectObj.fn = `new Tone.${compObj.name}(${args})`
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