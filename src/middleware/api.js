import {START, SUCCESS, FAIL} from '../constants';
import Promise from 'es6-promise/auto'; /*eslint no-unused-vars:0*/

import axios from 'axios';

export default () => next => action => {

  const { api, type, ...rest } = action;

  if ( !api ) next(action);

  next({type: type + START, rest});

  axios
    .get(api)
    .then(res => {
      next({type: type + SUCCESS, res});
    })
    .catch(err => {
      next({type: type + FAIL, err});
    });
};
