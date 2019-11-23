import historyOfPomodorosDataFromDatabase from '__mocks__/historyOfPomodorosDataFromDatabase';
import {
  downloadPomodoroSessions,
  DOWNLOAD_POMODORO_SESSIONS,
  downloadData,
  DOWNLOAD_DATA,
  GET_DATE_FROM_DATA_AND_SORT,
  getDateFromDataAndSort,
} from './downloadSessionsFromDatabase';

describe('downloadSessionsFromDatabase actions', () => {
  describe('downloadPomodoroSessions function', () => {
    it('Should create an action downloadPomodoroSessions', () => {
      const data = {
        myData: {
          dogs: 3,
        },
      };

      const expectedAction = {
        type: DOWNLOAD_POMODORO_SESSIONS,
        payload: {
          data,
        },
      };

      expect(downloadPomodoroSessions(data)).toEqual(expectedAction);
    });
  });

  describe('downloadData function', () => {
    it('Should create an action downloadData', () => {
      const isDataDownload = true;
      const expectedAction = {
        type: DOWNLOAD_DATA,
        payload: {
          download: true,
        },
      };
      expect(downloadData(isDataDownload)).toEqual(expectedAction);
    });
  });

  describe('getDateFromDataAndSort', () => {
    it('Should create an action getDateFromDataAndSort', () => {
      const data = historyOfPomodorosDataFromDatabase;
      const expectedAction = {
        type: GET_DATE_FROM_DATA_AND_SORT,
        payload: { date: ['28|09|2019', '27|09|2019', '26|09|2019'] },
      };

      expect(getDateFromDataAndSort(data)).toEqual(expectedAction);
    });
  });
});
