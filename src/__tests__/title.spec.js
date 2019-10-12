import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import historyOfPomodoro from 'reducers/historyOfPomodoro';
import { historyOfPomodorosDataFromDatabase } from 'Utils/dataToTests';
import {
  getDateFromDataAndSort,
  downloadPomodoroSessions,
  downloadData,
} from 'actions/downloadSessionsFromDatabase';

const allReducers = combineReducers({
  historyOfPomodoro,
});

const testStore = initalState => {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleware(allReducers, initalState);
};

// @TODO: change names
// @TODO: jak działają fn() oraz jak powino się nazywać it
describe('test reducers and action copatibility', () => {
  it('Should work ', () => {
    const store = testStore();
    store.dispatch(downloadPomodoroSessions(historyOfPomodorosDataFromDatabase));
    store.dispatch(getDateFromDataAndSort(historyOfPomodorosDataFromDatabase));
    store.dispatch(downloadData(true));

    const shouldToReturn = {
      historyOfPomodoro: {
        allDate: ['28|09|2019', '27|09|2019', '26|09|2019'],
        downloadData: true,
        pomodoroSessions: [
          {
            date: 1569575447927,
            dateSerch: '27|09|2019',
            pomodoro: 6,
            time: 8400,
            title: 'programowanie',
          },
          { date: 1569602445200, dateSerch: '26|09|2019', pomodoro: 1, time: 3, title: 'ramnulus' },
          { date: 1569672015817, dateSerch: '28|09|2019', pomodoro: 1, time: 1, title: 'rabarbar' },
          {
            date: 1569575447927,
            dateSerch: '27|09|2019',
            pomodoro: 6,
            time: 8400,
            title: 'programowanie',
          },
        ],
      },
    };

    expect(store.getState()).toEqual(shouldToReturn);
  });
});
