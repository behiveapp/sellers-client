import { combineReducers } from 'redux';
import productsReducer from '../components/ProductsList/reducers'

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;