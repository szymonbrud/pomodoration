import checkPropTypes from 'check-prop-types';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsErr;
};

export const storeToTests = reducers => {
  const allReducers = combineReducers({
    ...reducers,
  });

  const testStore = initalState => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    return createStoreWithMiddleware(allReducers, initalState);
  };

  const store = testStore();
  return store;
};

// TODO: #ZMIANA STRUKTURY zmienić nazwę folderu na testHelpers myślę że będzie lepiej pasować. Ale zanim to to spawdzić w necie czy to napewno są chelery
