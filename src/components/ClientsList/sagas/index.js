import { call, take, put } from 'redux-saga/effects';
import { FETCH_CLIENTS, OPEN_CART } from '../constants';
import { CARTS_FETCHED } from '../../CartsList/constants';
import { clientsFetched } from '../actions';
import { fetchCarts } from '../../CartsList/actions';
import ClientsService from '../../../services/bifrost/ClientsService';
import CartsService from '../../../services/bifrost/CartsService';

export function* fetchClientsSaga(){
  yield take(FETCH_CLIENTS);
  const clientsService = new ClientsService();
  const data = yield call([clientsService, 'getClients']);

  yield put(clientsFetched(data));
}

export function* openCartAndAddProductSaga(){
  const { buyer, seller, product, navigation } = yield take(OPEN_CART);
  
  const cartsService = new CartsService();
  const cart = yield call([cartsService, 'openCart'], buyer, seller);
  const data = yield call([cartsService, 'addProduct'], cart.id, product.id);
  yield put(fetchCarts('5aa75156f8245d00016bf8ab', navigation));
}