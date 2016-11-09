import { 
  ADD_EFFECT, 
  CHANGE_SYNTH_DROPDOWN, 
  CHANGE_SYNTH,
  HANDLE_SLIDER,
  TOGGLE_EFFECT,
  ADD_DISTORTION_EFFECT
 } from './actions';

import {
  distortionObj
} from '../effects/effects'

const initialState = {
  synthDropdown: "Synth",
  stack: [
        {
          name: "Synth",
         args: [],
         enabled: true
        },
        {
          name:"PingPongDelay",
          args: [{delayTime:'4n'}, {normalRange: 0.9}],
          enabled: false
        },
        {
          name: "Distortion",
          args: [{normalRange: 0.8}],
          enabled:true
        }
      ]
}

function buildSynthApp(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SYNTH_DROPDOWN:
      return Object.assign({}, state, {
        synthDropdown: action.synthName
      })
    case CHANGE_SYNTH:
      let stateClone = Object.assign({}, state);
      stateClone.stack[0] = {
        name: action.synthName,
        args: [],
        enabled: true
      }
      return stateClone;
    case HANDLE_SLIDER:
      stateClone = Object.assign({}, state);
      let stack = stateClone.stack;
      let range = action.e.target.value / 100;
      stack.map(ef => {
        if (ef.name === action.effectName) {
          ef.args.forEach(efProp => {
            if (efProp.hasOwnProperty('normalRange')) {
              efProp.normalRange = range;
            }
          })
          return ef;
        }
        return ef;
      })
      return stateClone;
    case TOGGLE_EFFECT:
      stateClone = Object.assign({}, state)
      stateClone.stack[action.index + 1].enabled = !stateClone.stack[action.index + 1].enabled
      return stateClone
    case ADD_DISTORTION_EFFECT:
      stateClone = Object.assign({}, state)
      console.log(action.index)
      stateClone.stack.push(Object.assign({}, distortionObj));
      return stateClone;
//   
    default: 
      return state;
  }
}

export default buildSynthApp