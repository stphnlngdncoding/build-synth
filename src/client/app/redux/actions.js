export const ADD_EFFECT = 'ADD_EFFECT';
export const CHANGE_SYNTH_DROPDOWN = 'CHANGE_SYNTH_DROPDOWN';
export const CHANGE_SYNTH = 'CHANGE_SYNTH';
export const HANDLE_SLIDER = 'HANDLE_SLIDER';
export const TOGGLE_EFFECT = 'TOGGLE_EFFECT';
export const ADD_DISTORTION_EFFECT = 'ADD_DISTORTION_EFFECT';
export const HANDLE_TEXT_INPUT = 'HANDLE_TEXT_INPUT'


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

export function toggleEffect(index) {
  return {
    type: TOGGLE_EFFECT,
    index
  }
}

export function addDistortionEffect(index) {
  return {
    type: ADD_DISTORTION_EFFECT,
    index
  }
}

export function handleTextInput(e, effectName, propertyName) {
  return {
    type: HANDLE_TEXT_INPUT,
    e,
    effectName,
    propertyName
  }
}