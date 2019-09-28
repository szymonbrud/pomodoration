import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { pomdoroName, pomodoroSessions, downloadData, allDate } from 'reducers';

const allStoreEnchancers = compose(
  applyMiddleware(thunk),
  composeWithDevTools(),
);

const allReducers = combineReducers({
  pomdoroName,
  pomodoroSessions,
  downloadData,
  allDate,
});

const store = createStore(allReducers, allStoreEnchancers);

export default store;
