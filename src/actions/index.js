export const POMODORO_NAME = 'POMODORO_NAME';

export const pomodoroName = name => {
  return {
    type: POMODORO_NAME,
    payload: {
      name,
    },
  };
};
