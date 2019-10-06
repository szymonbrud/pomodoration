import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  pomdoroName,
  pomodoroSessions,
  downloadData,
  allDate,
  loadingDataStatusOfTimer,
} from 'reducers';
import pomodoroNames from 'reducers/pomodoroNames';

const allStoreEnchancers = compose(
  applyMiddleware(thunk),
  composeWithDevTools(),
);

const allReducers = combineReducers({
  pomdoroName,
  pomodoroSessions,
  downloadData,
  allDate,
  loadingDataStatusOfTimer,
  pomodoroNames,
});

const store = createStore(allReducers, allStoreEnchancers);

export default store;
