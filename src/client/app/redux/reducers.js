import { ADD_EFFECT, CHANGE_SYNTH } from './actions';

const initialState = {
  synthDropdown: "Synth",
  stack: [
        {
          name: "Synth",
         args: []
        },
        {
        name:"PingPongDelay",
         args: [{delayTime:'4n'}, {normalRange: 0.9}]
        },
        {
          name: "Distortion",
          args: [{normalRange: 0.8}]
        }
      ]
}

function buildSynthApp(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SYNTH:
      return Object.assign({}, state, {
        synthDropdown: action.synthName
      })
    default: 
      return state;
  }
}

export default buildSynthApp