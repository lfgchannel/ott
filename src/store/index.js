import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducer';
import {defaultState} from '../reducer';
import api from '../middleware/api';

const store = createStore(reducer, defaultState, applyMiddleware(api));

window.store = store;

export default store;
