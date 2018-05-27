import { call, take, put } from 'redux-saga/effects';
import { FETCH_CARTS, CLOSE_CART } from '../constants';
import { fetchCarts, cartsFetched, cartClosed } from '../actions';
import CartsService from '../../../services/bifrost/CartsService';

export function* fetchCartsSaga(){
  while (true) {
    const action = yield take(FETCH_CARTS);
    const { sellerId } = action.payload;
    const cartsService = new CartsService();
    
    const data = yield call([cartsService, 'getCarts'], sellerId);

    yield put(cartsFetched(data));
    if(action.navigation) action.navigation.navigate('Pedidos')
  }
}

export function* closeCartSaga(){
  while (true) {
    const action = yield take(CLOSE_CART);
    const { cartId } = action.payload;
    const cartsService = new CartsService();
    
    const data = yield call([cartsService, 'closeCart'], cartId);

    yield put(cartClosed());
    yield put(fetchCarts('5aa75156f8245d00016bf8ab', action.navigation));
  }
}