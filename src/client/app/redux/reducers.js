import { 
  ADD_EFFECT, 
  CHANGE_SYNTH_DROPDOWN, 
  CHANGE_SYNTH,
  HANDLE_SLIDER,
  TOGGLE_EFFECT,
  ADD_DISTORTION_EFFECT,
  HANDLE_TEXT_INPUT,
  DELETE_EFFECT
 } from './actions';

import {
  distortionObj,
  Effects
} from '../misc/effects'

import Immutable from 'immutable';

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
          enabled: true
        },
        {
          name: "Distortion",
          args: [{normalRange: 0.8}],
          enabled:true
        }
      ]
}

function buildSynthApp(state = initialState, action) {
  let newStack, 
      stateClone, 
      stackClone;
  switch (action.type) {
    case CHANGE_SYNTH_DROPDOWN:
      return Immutable
        .fromJS(state)
        .set('synthDropdown', action.synthName)
        .toJS()
      // return Object.assign({}, state, {
      //   synthDropdown: action.synthName
      // })
    case CHANGE_SYNTH:
      stateClone = Immutable.fromJS(state);
      newStack = stateClone.get('stack').set(0, {name: action.synthName, args: [], enabled: true});
      return stateClone.set('stack', newStack).toJS();
    // case HANDLE_SLIDER:
    //   stateClone = Object.assign({}, state);
    //   let stack = stateClone.stack;
    //   let range = action.e.target.value / 100;
    //   stack.map(ef => {
    //     if (ef.name === action.effectName) {
    //       ef.args.forEach(efProp => {
    //         if (efProp.hasOwnProperty('normalRange')) {
    //           efProp.normalRange = range;
    //         }
    //       })
    //       return ef;
    //     }
    //     return ef;
    //   })
    //   return stateClone;
    case TOGGLE_EFFECT:
      stateClone = Immutable.fromJS(state);
      const toggledEnable = !state.stack[action.index + 1].enabled;
      const newEffect = stateClone.get('stack').get(action.index+1).set('enabled', toggledEnable);
      newStack = stateClone.get('stack').set(action.index + 1, newEffect);
      return stateClone.set('stack', newStack).toJS();
    // case ADD_DISTORTION_EFFECT:
    //   stateClone = Object.assign({}, state)
    //   stateClone.stack.push(Object.assign({}, distortionObj));
    //   return stateClone;
    case HANDLE_TEXT_INPUT:
      // stateClone = Immutable.fromJS(state);
      // stackClone = stateClone.get('stack');
      // let val = Number(action.e.target.value);
      // //dont forget to reassign stackClone!!1
      // console.log(action);
      // // console.log(stackClone)
      // stackClone = stackClone.map(ef => {
      //   if (ef.get('name') === action.effectName) {
      //     console.log(ef.toJS())
      //   }
      // })
      // return stateClone.set('stack', stackClone).toJS();
      stateClone = Object.assign({}, state) 
      console.log(stateClone);
      let stack = stateClone.stack;
      let val = Number(action.e.target.value);
      stack.map(ef => {
        if (ef.name === action.effectName) {
          ef.args.forEach(efProp => {
            if (efProp.hasOwnProperty(action.propertyName)) {
              efProp[action.propertyName] = val;
            }
          })
          return ef;
        }
        return ef;
      })
      return Immutable.fromJS(stateClone).toJS();
    case ADD_EFFECT:
      const effect = Effects[action.effectName];
      const iState = Immutable.fromJS(state);
      newStack = iState.get("stack").push(effect)
      const newState = iState.set('stack', newStack);
      return newState.toJS();
      
    case DELETE_EFFECT:
      stateClone = Immutable.fromJS(state);
      newStack = stateClone.get('stack').delete(action.index + 1);
      return stateClone.set('stack', newStack).toJS();
//   
    default: 
      return state;
  }
}

export default buildSynthApp