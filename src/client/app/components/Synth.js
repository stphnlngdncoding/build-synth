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
    
    effects.forEach((eff) => {
      // let evalStr = `const ${eff.name} = ${eff.fn};`
      // console.log(evalStr);
      // eval(evalStr)
      // let ef0 = new Tone[eff.fn].apply(this, eff.)
    })
    // console.log(new Tone[effect1.name].apply)
    
    // console.log("this should be distortion", effects[1])
    // const evalStr = `var ${effects[1].name} = ${effects[1].fn}`
    // console.log("eval string", evalStr)
    // eval(evalStr)
    // console.log(eval('var test = "test"'))
    // console.log(test)

    //WORKS!!!! 
    // const ef0 = new Tone['Distortion'];
    let synObj = this.state.stack[0];
    syn = new Tone[synObj.name]();
    let effect1 = this.state.stack[1];    
    // eval('var ef' + 1 + ' = ')
    let efArray = [];

    let effect2 = this.state.stack[2];
    efArray[0] = new Tone[effect1.name](...effect1.args);
    efArray[1] = new Tone[effect2.name](...effect2.args);
    // console.log(ef0);
    // console.log(syn);
    // syn.toMaster();
    syn.chain(efArray[0], efArray[1], Tone.Master);
    
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
    if (keymap[key]) syn.triggerAttackRelease(`${keymap[key]}${keymap.oct}`, '8n')
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