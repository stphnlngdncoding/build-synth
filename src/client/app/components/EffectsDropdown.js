import React from 'react';
import { Component } from 'react';
import { Effects } from '../effects/effects';

class EffectsDropdown extends Component {
  render() {
    const effectsOptions = Object.keys(Effects).map(effectName => {
      return <option value={effectName}>{effectName}</option>
    })
    return (
      <select onChange={(e) => this.props.addEffect(e, e.target.value)}>
        {effectsOptions}
      </select>
      )
  }
}

export default EffectsDropdown