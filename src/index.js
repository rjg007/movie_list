import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/store'
import {Provider} from 'react-redux'

const store = configureStore()

store.subscribe(() => {
  console.log('state updated', store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);
