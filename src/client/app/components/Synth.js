import React from 'react';
import { Component } from 'react';
import _ from 'lodash';
import SynthDropdown from './SynthDropdown';
import EffectsDropdown from './EffectsDropdown';
import Effect from './Effect';
import keymap from '../misc/keymap';
import { connect } from 'react-redux';
import { changeSynthDropdown,
         changeSynth,
         handleSlider,
         toggleEffect,
         addDistortionEffect,
         handleTextInput,
         addEffect,
         deleteEffect } from '../redux/actions';


let syn;

class Synth extends Component {
  constructor() {
    super();
    this.handleSynthDropdownChange = this.handleSynthDropdownChange.bind(this);
    this.handleSlider = _.debounce(this.handleSlider.bind(this), 250);
    this.toggleEffect = this.toggleEffect.bind(this);
    this.addDistortionEffect = this.addDistortionEffect.bind(this);
    this.handleTextBoxChange = _.debounce(this.handleTextBoxChange.bind(this), 250);
    this.addEffect = this.addEffect.bind(this);
    this.deleteEffect = this.deleteEffect.bind(this);
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
    const effectArray = this.props.stack
      .map(eff => {
          // console.log(eff);
        let effargs = eff.args.map(e => {
          return Object.values(e)[0];
        })
          // console.log(eff.name, effargs)
          return (eff.enabled) ? new Tone[eff.name](...effargs) : 'disabled';
        })

      .filter(e => e !== "disabled");
      // console.log(effectArray)

    let synthNode = effectArray.splice(0, 1)[0];
    // console.log("synthNode in build", synthNode)
    // console.log(effectArray);
    syn = synthNode.chain(...effectArray, Tone.Master);
    
  }
  playSound(e) {
    let key = e.key;
    if (keymap[key]) syn.triggerAttackRelease(`${keymap[key]}${keymap.oct}`, '8n')
  }
  handleSynthDropdownChange(e) {
    this.props.changeSynth(e.target.value);
    this.props.changeSynthDropdown(e.target.value);
  }
  handleSlider(e, effectName, propertyName) {
    this.props.handleSlider(e, effectName, propertyName);
    this.forceUpdate();
  }
  toggleEffect(index) {
    console.log("toggleEffect hit at ", index)
    this.props.toggleEffect(index);
    this.forceUpdate();
  }
  addDistortionEffect(index) {
    this.props.addDistortionEffect(index);
    this.forceUpdate();
  }
  handleTextBoxChange(e, effectName, propertyName) {
    this.props.handleTextInput(e, effectName, propertyName)
    this.forceUpdate();
  }
  addEffect(e, effectName, index) {
    console.log(e);
    this.props.addEffect(e, effectName);
    this.forceUpdate();
  }
  deleteEffect(e, index) {
    this.props.deleteEffect(e, index);
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <SynthDropdown
          handleChange={this.handleSynthDropdownChange}
          value={this.props.synthDropdown}
        />
        {this.props.stack.slice(1).map((ef,i) => {
          return (<Effect 
                    key={i}
                    index={i}
                    name={ef.name}
                    args={ef.args}
                    enabled={ef.enabled}
                    handleSlider={this.handleSlider}
                    handleTextInput={this.handleTextBoxChange}
                    toggleEffect={this.toggleEffect}
                    deleteEffect={this.deleteEffect}
                     />)
        })}
      <EffectsDropdown addEffect={this.addEffect} />
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
    },
    toggleEffect: (index) => {
      dispatch(toggleEffect(index));
    },
    handleTextInput: (e, effectName, propertyName) => {
      dispatch(handleTextInput(e, effectName, propertyName))
    },
    addDistortionEffect: (index) => {
      dispatch(addDistortionEffect(index));
    },
    addEffect : (e, effectName, index) => {
      dispatch(addEffect(effectName, index))
    },
    deleteEffect: (e, index) => {
      dispatch(deleteEffect(e, index))
    }
  }
}


;
export default connect(mapStateToProps, mapDispatchToProps)(Synth);