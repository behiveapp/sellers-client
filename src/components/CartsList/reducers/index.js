import { CARTS_FETCHED } from '../constants';

export default function(state = [], action) {
  switch (action.type) {
    case CARTS_FETCHED:
      return [ ...action.payload ];
  }

  return state;
}