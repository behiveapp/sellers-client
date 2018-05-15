import { CARTS_FETCHED } from '../constants';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case CARTS_FETCHED:
      return _.mapKeys(action.payload, 'id');
  }

  return state;
}