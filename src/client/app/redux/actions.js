export const ADD_EFFECT = 'ADD_EFFECT';
export const CHANGE_SYNTH = 'CHANGE_SYNTH';


export function changeSynth(synthName) {
  return {
    type: CHANGE_SYNTH,
    synthName
  }
}
export function addEffect(effectName) {
  return {
    type: ADD_EFFECT,
    effectName
  }
}