import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import wiki from './reducers/index.js';
import thunk from 'redux-thunk';

let store = createStore(wiki, undefined, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementsByTagName('wiki-app')[0]
);
