import { POMODORO_NAME, pomodoroName } from 'actions';

describe('actions', () => {
  it('Should create an action to set a name of timer', () => {
    const text = 'programming';
    const expectedAction = {
      type: POMODORO_NAME,
      payload: {
        name: text,
      },
    };
    expect(pomodoroName(text)).toEqual(expectedAction);
  });
});
