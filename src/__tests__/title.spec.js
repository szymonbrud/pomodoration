import React from 'react';
import firebase from 'firebase';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers, dispatch } from 'redux';
import historyOfPomodoro from 'reducers/historyOfPomodoro';
import { historyOfPomodorosDataFromDatabase } from 'Utils/dataToTests';
import { downloadSessions, getDateFromDataAndSort } from 'actions/downloadSessionsFromDatabase';

// jest.mock('firebase');
// jest.mock('actions/downloadSessionsFromDatabase');

// const allStoreEnchancers = compose(applyMiddleware(thunk));

const allReducers = combineReducers({
  historyOfPomodoro,
});

// const store = createStore(allReducers, allStoreEnchancers);

const testStore = initalState => {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleware(allReducers, initalState);
};

// @TODO: change names
describe('test reducers and action copatibility', () => {
  it('shouldf ', () => {
    const store = testStore();

    store.dispatch(getDateFromDataAndSort(historyOfPomodorosDataFromDatabase));
    console.log(store.getState());
  });
});

// const InitStateComp = cmp => {
//   return render(<Provider store={store}>{cmp}</Provider>);
// };

// firebase.auth.mockImplementationOnce(() => {
//   return {
//     currentUser: {
//       uid: null,
//     },
//   };
// });

// firebase.database.mockImplementationOnce(() => {
//   return {
//     ref: () => {
//       return {
//         orderByChild: () => {
//           return {
//             once: () => Promise.resolve({ historyOfPomodorosDataFromDatabase }),
//           };
//         },
//       };
//     },
//   };
// });

// downloadSessions();
