import { FETCH_CARTS, CARTS_FETCHED, CLOSE_CART, CART_CLOSED } from '../constants';

export function fetchCarts(sellerId, navigation) {
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

export function closeCart(cartId, navigation) {
  return {
    type: CLOSE_CART,
    payload: { cartId },
    navigation
  }
}

export function cartClosed() {
  return {
    type: CART_CLOSED,
  }
}