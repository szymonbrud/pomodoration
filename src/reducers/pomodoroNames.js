import { CURRENT_NAME, DOWNLOAD_DATA_POMODORO_NAMES, SET_NAME } from 'actions/pomodoroNames';

const initialState = {
  currentPomodoroName: '',
  downloadDataLastPomodoros: false,
  nameOfLastPomodoros: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENT_NAME:
      return {
        ...state,
        currentPomodoroName: payload.name,
        nameOfLastPomodoros: payload.pomodoroNames,
      };
    case SET_NAME:
      return {
        ...state,
        currentPomodoroName: payload.name,
      };
    case DOWNLOAD_DATA_POMODORO_NAMES:
      return {
        ...state,
        downloadDataLastPomodoros: true,
        nameOfLastPomodoros: payload.pomodoroNames,
      };
    default:
      return state;
  }
};
