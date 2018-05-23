import { take, put, call, fork, select } from 'redux-saga/effects';
import { fetchProducts } from './components/ProductsList/sagas';
import { fetchClientsSaga, openCartAndAddProductSaga } from './components/ClientsList/sagas';
import { fetchCarts } from './components/CartsList/sagas';

export default function* root() {
  yield fork(fetchProducts);
  yield fork(fetchClientsSaga);
  yield fork(openCartAndAddProductSaga);
  yield fork(fetchCarts);
}