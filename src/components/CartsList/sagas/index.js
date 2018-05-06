import { call, take, put } from 'redux-saga/effects';
import { FETCH_CARTS } from '../constants';
import { cartsFetched } from '../actions';
import CartsService from '../../../services/bifrost/CartsService';

export function* fetchCarts(){
  const action = yield take(FETCH_CARTS);
  const { sellerId } = action.payload;
  console.log('>>>>>>>>>>>>>>>>>>>>>');
  console.log(sellerId);
  const cartsService = new CartsService();
  const data = yield call([cartsService, 'getCarts'], sellerId);
  console.log(data);

  yield put(cartsFetched(data));
}