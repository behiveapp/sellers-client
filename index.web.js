import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/configureStore';
import saga from './src/rootSaga';
import './src/lib/VectorIcons';
import App from './src/App';

store.runSaga(saga);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('sellers_client', () => Root);
AppRegistry.runApplication('sellers_client', { rootTag: document.getElementById('react-app') });