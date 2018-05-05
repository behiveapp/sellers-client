import { FETCH_CLIENTS, CLIENTS_FETCHED } from '../constants';

export function fetchClients() {
  return {
    type: FETCH_CLIENTS
  }
}

export function clientsFetched(payload) {
  return {
    type: CLIENTS_FETCHED,
    payload
  }
}