import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import isloadingDataStatusOfTimer from 'reducers/isloadingDataStatusOfTimer';
import pomodoroNames from 'reducers/pomodoroNames';
import historyOfPomodoro from 'reducers/historyOfPomodoro';

const allStoreEnchancers = compose(
  applyMiddleware(thunk),
  composeWithDevTools(),
);

const allReducers = combineReducers({
  isloadingDataStatusOfTimer,
  pomodoroNames,
  historyOfPomodoro,
});

const store = createStore(allReducers, allStoreEnchancers);

export default store;
