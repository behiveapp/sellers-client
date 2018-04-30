import { PRODUCTS_FETCHED } from '../constants';

export default function(state = [], action) {
  switch (action.type) {
    case PRODUCTS_FETCHED:
      return [ ...action.payload ];
  }

  return state;
}