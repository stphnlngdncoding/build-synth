import {
  ADD_DISTORTION_EFFECT
} from '../actions';

export default function effects(state=[], action) {
  switch(action.type) {
    case ADD_DISTORTION_EFFECT:
      let sClone = [...state];
      if (!action.index) {
        sClone.push(action.)
      }
    default: 
      return state;
  }
}