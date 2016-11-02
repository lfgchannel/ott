import { OrderedMap, Set } from 'immutable';

export function arrayToMap(array, RecordModel) {
    return array.reduce((acc, item) => {
        return acc.set(item.id, new RecordModel(item));
    }, new OrderedMap({}));
}

export function defineFilterOptions(entities) {
  return new Set(entities.map(e => e.carrier));
}
