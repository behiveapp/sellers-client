import { FETCH_CARTS, CARTS_FETCHED } from '../constants';

export function fetchCarts(sellerId) {
  return {
    type: FETCH_CARTS,
    payload: { sellerId }
  }
}

export function cartsFetched(payload) {
  return {
    type: CARTS_FETCHED,
    payload,
  }
}