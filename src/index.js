import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'storeConfig';
import firebase from 'firebase';
import { askForPermissioToReceiveNotifications } from 'firebaseConfig';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
askForPermissioToReceiveNotifications();

// TODO: wyżucić to z kodu i gdzieś zapisać

// wywołanie powiadomienia

// axios.post('https://us-central1-pomodoro-app-test-a03e7.cloudfunctions.net/apiResponse', {
//   body: {},
//   headers: {},
// });

serviceWorker.register();
