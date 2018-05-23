import { call, take, put } from 'redux-saga/effects';
import { FETCH_PRODUCTS } from '../constants';
import { productsFetched } from '../actions';
import ProductsService from '../../../services/bifrost/ProductsService';

export function* fetchProducts(){
  yield take(FETCH_PRODUCTS);
  const productsService = new ProductsService();
  const data = yield call([productsService, 'getProducts']);

  yield put(productsFetched(data));
}