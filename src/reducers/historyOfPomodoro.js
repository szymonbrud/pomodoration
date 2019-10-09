import {
  DOWNLOAD_POMODORO_SESSIONS,
  DOWNLOAD_DATA,
  GET_DATE_FROM_DATA_AND_SORT,
} from 'actions/downloadSessionsFromDatabase';

const initialState = {
  downloadData: false,
  allDate: [],
  pomodoroSessions: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DOWNLOAD_DATA:
      return {
        ...state,
        downloadData: payload.download,
      };
    case GET_DATE_FROM_DATA_AND_SORT:
      return {
        ...state,
        allDate: payload.date,
      };
    case DOWNLOAD_POMODORO_SESSIONS:
      return {
        ...state,
        pomodoroSessions: payload.data,
      };
    default:
      return state;
  }
};
