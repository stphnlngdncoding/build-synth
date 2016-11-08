import React from 'react';
import { render } from 'react-dom';
import Synth from './components/Synth';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import buildSynthApp from './redux/reducers';

let store = createStore(buildSynthApp);

class App extends React.Component {
  render() {
    return (
      <Synth />
    )
  }
}

render(<Provider store={store}>
          <App />
       </Provider>, document.getElementById('app'))