import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './stores/configureStores'
import { getShoppingListItems } from './actions/shoppingListItemsActions'
import App from './App';
import './index.css';

const store = configureStore();

store.dispatch(getShoppingListItems());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


