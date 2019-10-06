export const CURRENT_NAME = 'CURRENT_NAME';
export const DOWNLOAD_DATA = 'DOWNLOAD_DATA';

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
  if (allLastPomodoros.length === 5) {
    allLastPomodoros.pop();
  }
  allLastPomodoros.unshift(currentName);

  return {
    type: CURRENT_NAME,
    payload: {
      name: currentName,
      pomodoroNames: allLastPomodoros,
    },
  };
};
