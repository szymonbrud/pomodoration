export const POMODORO_NAME = 'POMODORO_NAME';
export const LOADING_DATA_STATUS = 'LOADING_DATA_STATUS';

export const pomodoroName = name => {
  return {
    type: POMODORO_NAME,
    payload: {
      name,
    },
  };
};

export const loadingDataStatus = state => {
  return {
    type: LOADING_DATA_STATUS,
    payload: {
      state,
    },
  };
};

// TODO: porozdzielać plikami oraz przetestować
