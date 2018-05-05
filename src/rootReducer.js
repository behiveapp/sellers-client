import { combineReducers } from 'redux';
import productsReducer from './components/ProductsList/reducers'
import clientsReducer from './components/ClientsList/reducers'

const rootReducer = combineReducers({
  products: productsReducer,
  clients: clientsReducer,
});

export default rootReducer;