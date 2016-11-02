import { FLIGHTS, GET } from '../constants';

export function getFlights() {
  return {
    type: FLIGHTS + GET,
    api : '/api/flights'
  };
}
