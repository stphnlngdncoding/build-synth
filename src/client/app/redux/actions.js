export const ADD_EFFECT = 'ADD_EFFECT';
export const CHANGE_SYNTH_DROPDOWN = 'CHANGE_SYNTH_DROPDOWN';
export const CHANGE_SYNTH = 'CHANGE_SYNTH'


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