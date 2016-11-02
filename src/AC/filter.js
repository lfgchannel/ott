import {FLIGHTS, FILTER} from '../constants';

export function filterFlights(filter) {
  return {
    type   : FLIGHTS + FILTER,
    payload: { filter }
  };
}
