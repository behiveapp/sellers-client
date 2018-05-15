import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/configureStore';
import saga from './src/rootSaga';
import Main from './src/screens/Main';

store.runSaga(saga);

const Root = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

AppRegistry.registerComponent('sellers_client', () => Root);
