import { FETCH_PRODUCTS, PRODUCTS_FETCHED } from '../constants';

export function fetchProducts() {
  return {
    type: FETCH_PRODUCTS
  }
}

export function productsFetched(payload) {
  return {
    type: PRODUCTS_FETCHED,
    payload
  }
}