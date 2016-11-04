import React from 'react';
import { render } from 'react-dom';
import Synth from './components/Synth' 

class App extends React.Component {
  render() {
    return (
      <Synth />
    )
  }
}

render(<App />, document.getElementById('app'))