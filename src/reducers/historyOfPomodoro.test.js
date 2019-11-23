import {
  DOWNLOAD_POMODORO_SESSIONS,
  DOWNLOAD_DATA,
  GET_DATE_FROM_DATA_AND_SORT,
} from 'actions/downloadSessionsFromDatabase';
import { historyOfPomodorosDataFromDatabase } from 'Helpers/dataToTests';
import reducer from './historyOfPomodoro';

describe('historyOfPomodoro', () => {
  it('Should return initialState', () => {
    expect(reducer(undefined, {})).toEqual({
      downloadData: false,
      allDate: [],
      pomodoroSessions: [],
    });
  });

  it('Should handle DOWNLOAD_DATA', () => {
    expect(
      reducer(undefined, {
        type: DOWNLOAD_DATA,
        payload: {
          download: true,
        },
      }),
    ).toEqual({ downloadData: true, allDate: [], pomodoroSessions: [] });
  });

  it('Should handle GET_DATE_FROM_DATA_AND_SORT', () => {
    expect(
      reducer(undefined, {
        type: GET_DATE_FROM_DATA_AND_SORT,
        payload: {
          date: ['24|09|2019'],
        },
      }),
    ).toEqual({ downloadData: false, allDate: ['24|09|2019'], pomodoroSessions: [] });
  });

  it('Should handle DOWNLOAD_POMODORO_SESSIONS', () => {
    expect(
      reducer(undefined, {
        type: DOWNLOAD_POMODORO_SESSIONS,
        payload: {
          data: historyOfPomodorosDataFromDatabase,
        },
      }),
    ).toEqual({
      downloadData: false,
      allDate: [],
      pomodoroSessions: historyOfPomodorosDataFromDatabase,
    });
  });
});
