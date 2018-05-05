import { call, take, put } from 'redux-saga/effects';
import { FETCH_CLIENTS } from '../constants';
import { clientsFetched } from '../actions';
import ClientsService from '../../../services/bifrost/ClientsService';

export function* fetchClients(){
  yield take(FETCH_CLIENTS);
console.log('FETCH_CLIENTS');
const clientsService = new ClientsService();
const data = yield call([clientsService, 'getClients']);
console.log(data);

  yield put(clientsFetched(data));
}