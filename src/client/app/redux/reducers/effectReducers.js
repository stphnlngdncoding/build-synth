// import {
//    ADD_DISTORTION_EFFECT
//   } from '../actions';

//  import { 
//    distortionObj 
//   } from '../effects/effects';


// export default function effects(state=[], action) {
//   switch(action.type) {
//     case ADD_DISTORTION_EFFECT:
//       let sClone = [...state];
//       if (!action.index) {
//         console.log("pushing distortion object");
//         sClone.push(distortionObj)
//       }
//       return sClone;
//     default: 
//       return state;
//   }
// }