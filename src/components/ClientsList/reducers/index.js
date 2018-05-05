import { CLIENTS_FETCHED } from '../constants';

export default function(state = [], action) {
  switch (action.type) {
    case CLIENTS_FETCHED:
      return [ ...action.payload ];
  }

  return state;
}