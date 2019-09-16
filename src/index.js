import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'storeConfig';
// import * as serviceWorker from './firebase-messaging-sw.js';
import firebase from 'firebase';
import { askForPermissioToReceiveNotifications } from 'firebaseConfig';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
askForPermissioToReceiveNotifications();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
