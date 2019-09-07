import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { timerState } from 'reducers';

const allStoreEnchancers = compose(
  applyMiddleware(thunk),
  // composeWithDevTools(),
);

const allReducers = combineReducers({
  timerState,
});

const store = createStore(allReducers, allStoreEnchancers);

export default store;
