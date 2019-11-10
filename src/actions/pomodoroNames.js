import { saveMyPomodorosNamesToDatabase } from 'components/Molecules/Timer/Requests';

export const CURRENT_NAME = 'CURRENT_NAME';
export const DOWNLOAD_DATA_POMODORO_NAMES = 'DOWNLOAD_DATA_POMODORO_NAMES';
export const SET_NAME = 'SET_NAME';

export const changeCurrentNamePomodoro = (currentName, nameOfLastPomodoros) => {
  if (currentName === '') {
    return {
      type: CURRENT_NAME,
      payload: {
        name: currentName,
        pomodoroNames: nameOfLastPomodoros,
      },
    };
  }

  const allLastPomodoros = nameOfLastPomodoros;
  const serchForCopy = allLastPomodoros.findIndex(name => name === currentName);
  if (serchForCopy !== -1) {
    allLastPomodoros.splice(serchForCopy, 1);
  } else if (allLastPomodoros.length === 5) {
    allLastPomodoros.pop();
  }
  allLastPomodoros.unshift(currentName);
  saveMyPomodorosNamesToDatabase(allLastPomodoros);

  return {
    type: CURRENT_NAME,
    payload: {
      name: currentName,
      pomodoroNames: allLastPomodoros === null ? [] : allLastPomodoros,
    },
  };
};

export const onlySetCurrentName = currentName => {
  return {
    type: SET_NAME,
    payload: {
      name: !currentName ? '' : currentName,
    },
  };
};
