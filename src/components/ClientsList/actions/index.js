import { FETCH_CLIENTS, CLIENTS_FETCHED, OPEN_CART, CART_OPENED } from '../constants';

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

export function openCart(buyer, seller, product, navigation) {
  return {
    type: OPEN_CART,
    buyer,
    seller,
    product,
    navigation
  }
}

export function cartOpened(payload, callback) {
  return {
    type: CART_OPENED,
    payload
  }
}