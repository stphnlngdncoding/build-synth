export const ADD_EFFECT = 'ADD_EFFECT';
export const CHANGE_SYNTH_DROPDOWN = 'CHANGE_SYNTH_DROPDOWN';
export const CHANGE_SYNTH = 'CHANGE_SYNTH';
export const HANDLE_SLIDER = 'HANDLE_SLIDER';


export function changeSynthDropdown(synthName) {
  return {
    type: CHANGE_SYNTH_DROPDOWN,
    synthName
  }
}

export function addEffect(effectName) {
  return {
    type: ADD_EFFECT,
    effectName
  }
}

export function changeSynth(synthName) {
  return {
    type: CHANGE_SYNTH,
    synthName
  }  
}

export function handleSlider(e, effectName, propertyName) {
  return {
    type: HANDLE_SLIDER,
    e,
    effectName,
    propertyName
  }
}