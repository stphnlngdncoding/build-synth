import React from 'react';
import { Component } from 'react';
import { Effects } from '../misc/effects';

class EffectsDropdown extends Component {
  render() {
    const effectsOptions = Object.keys(Effects).map(effectName => {
      return <option value={effectName}>{effectName}</option>
    })
    return (
      <select 
        ref={(select) => this.select = select}
        onChange={(e) => {
          this.props.addEffect(e, e.target.value);
          this.select.blur();  
        }}>
            {effectsOptions}
      </select>
      )
  }
}

export default EffectsDropdown