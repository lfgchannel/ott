import { FLIGHTS, FILTER, GET, START, SUCCESS } from '../constants';
import { Map, OrderedMap, Record, Set } from 'immutable';
import { arrayToMap, defineFilterOptions } from '../utilities';

export const defaultState = new Map({
  entities        : new OrderedMap({}),
  filterEntities  : new Set([]),
  filterOn        : '',
  loading         : false
});

const FlightCardModel = new Record({
  id       : null,
  direction: {},
  departure: '',
  arrival  : '',
  carrier  : ''
});

export default (state, action) => {

  const { type, res, payload } = action;

  switch(type) {
    case FLIGHTS + GET + START:
      return state.set('loading', true);
    case FLIGHTS + GET + SUCCESS:
      return state
        .set('filterEntities', defineFilterOptions(res.data.flights))
        .update('entities', e => e.merge(arrayToMap(res.data.flights, FlightCardModel)))
        .set('loading', false);
    case FLIGHTS + FILTER:
      return state.set('filterOn', payload.filter);
  }

  return state;

};
