import { call, take, put } from 'redux-saga/effects';
import { FETCH_CARTS } from '../constants';
import { cartsFetched } from '../actions';
import CartsService from '../../../services/bifrost/CartsService';

export function* fetchCarts(){
  while (true) {
    const action = yield take(FETCH_CARTS);
    const { sellerId } = action.payload;
    const cartsService = new CartsService();
    
    const data = yield call([cartsService, 'getCarts'], sellerId);

    yield put(cartsFetched(data));
    if(action.navigation) action.navigation.navigate('Pedidos')
  }
}