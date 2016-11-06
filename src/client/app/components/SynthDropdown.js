import React from 'react';
import { Component } from 'react';

class SynthDropdown extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Synth'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  render() {
    return (
      <select value={this.props.value} onChange={this.props.handleChange}>
        <option value="Synth">Synth</option>
        <option value="AMSynth">AMSynth</option>
        <option value="DuoSynth">DuoSynth</option>
        <option value="FMSynth">FMSynth</option>
      </select>
    )
  }
}

export default SynthDropdown;