import { combineReducers } from 'redux';
import productsReducer from './components/ProductsList/reducers'
import clientsReducer from './components/ClientsList/reducers'
import cartsReducer from './components/CartsList/reducers'

const rootReducer = combineReducers({
  products: productsReducer,
  clients: clientsReducer,
  carts: cartsReducer,
});

export default rootReducer;