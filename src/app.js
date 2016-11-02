import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

import store from './store';

import Container from './components/Container';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';
import './styles/styles.sass';


const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

render(<App />, document.querySelector('#maincontainer'));
