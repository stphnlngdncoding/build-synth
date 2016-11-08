import React from 'react';
import { Component } from 'react';
import _ from 'lodash';
import SynthDropdown from './SynthDropdown';
import Effect from './Effect';
import keymap from '../misc/keymap';
import { connect } from 'react-redux';
import { changeSynthDropdown,
         changeSynth,
        handleSlider } from '../redux/actions';

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
    this.handleSlider = _.debounce(this.handleSlider.bind(this), 250);
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
    const effectArray = this.props.stack.map(eff => {
      // console.log(eff);
      let effargs = eff.args.map(e => {
        return Object.values(e)[0];
      })
      // console.log(eff.name, effargs)
      return new Tone[eff.name](...effargs)
    })

    let synthNode = effectArray.splice(0, 1)[0];
    console.log("synthNode in build", synthNode)
    syn = synthNode.chain(...effectArray, Tone.Master);
    
  }
  playSound(e) {
    let key = e.key;
    if (keymap[key]) syn.triggerAttackRelease(`${keymap[key]}${keymap.oct}`, '8n')
  }
  handleSynthDropdownChange(e) {
    // const stackClone = this.state.stack.slice();
    // stackClone[0] = {
    //   name: e.target.value,
    //   args: []
    // }
    // this.setState({
    //   stack: stackClone,
    //   synthDropdown: e.target.value
    // })
    this.props.changeSynth(e.target.value);
    this.props.changeSynthDropdown(e.target.value);
    // this.props.test();
  }
  handleSlider(e, effectName, propertyName) {
    // console.log(e);
    // console.log("i was called");
    // let range = e.target.value / 100;

    // let stackCopy = this.state.stack.slice().map(ef => {
    //   if (ef.name === effectName) {
    //     ef.args.forEach(efProp => {
    //       if (efProp.hasOwnProperty("normalRange")) {
    //         efProp.normalRange = range;
    //       }
    //     })
    //     return ef
    //   } 
    //   return ef
    // })
    // this.setState({stack: stackCopy})
    this.props.handleSlider(e, effectName, propertyName);
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <SynthDropdown
          handleChange={this.handleSynthDropdownChange}
          value={this.props.synthDropdown}
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

const mapStateToProps = (state) => {
  return {
    stack: state.stack,
    synthDropdown: state.synthDropdown
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeSynthDropdown: (synthName) => {
      dispatch(changeSynthDropdown(synthName));
    },
    changeSynth: (synthName) => {
      dispatch(changeSynth(synthName));
    },
    handleSlider: (e, effectName, propertyName) => {
      dispatch(handleSlider(e, effectName, propertyName))
    }
  }
}


;
export default connect(mapStateToProps, mapDispatchToProps)(Synth);