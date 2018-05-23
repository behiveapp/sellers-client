import { FETCH_CARTS, CARTS_FETCHED } from '../constants';

export function fetchCarts(sellerId, navigation) {
  console.log('------')
  return {
    type: FETCH_CARTS,
    payload: { sellerId },
    navigation
  }
}

export function cartsFetched(payload) {
  return {
    type: CARTS_FETCHED,
    payload,
  }
}