import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadingDataStatusOfTimer } from 'reducers';
import pomodoroNames from 'reducers/pomodoroNames';
import historyOfPomodoro from 'reducers/historyOfPomodoro';

const allStoreEnchancers = compose(
  applyMiddleware(thunk),
  composeWithDevTools(),
);

const allReducers = combineReducers({
  loadingDataStatusOfTimer,
  pomodoroNames,
  historyOfPomodoro,
});

const store = createStore(allReducers, allStoreEnchancers);

export default store;
