import { CURRENT_NAME, changeCurrentNamePomodoro } from './pomodoroNames';

describe('pomodoroNamesActions', () => {
  it('Should create an action to set current name of pomodoro, when tab is NOT 5 length', () => {
    const nameOfLastPomodoros = ['coding'];
    const currentName = 'learn english';
    const expectedAction = {
      type: CURRENT_NAME,
      payload: {
        name: 'learn english',
        pomodoroNames: ['learn english', 'coding'],
      },
    };

    expect(changeCurrentNamePomodoro(currentName, nameOfLastPomodoros)).toEqual(expectedAction);
  });

  it('Should create an action to set current name of pomodoro, when tab is 5 length', () => {
    const nameOfLastPomodoros = ['coding', 'working', 'playing', 'learning', 'walking'];
    const currentName = 'learn english';
    const expectedAction = {
      type: CURRENT_NAME,
      payload: {
        name: 'learn english',
        pomodoroNames: ['learn english', 'coding', 'working', 'playing', 'learning'],
      },
    };

    expect(changeCurrentNamePomodoro(currentName, nameOfLastPomodoros)).toEqual(expectedAction);
  });

  it('Should create an action to set current name of pomodoro, when current name length is 0', () => {
    const nameOfLastPomodoros = ['coding', 'working'];
    const currentName = '';
    const expectedAction = {
      type: CURRENT_NAME,
      payload: {
        name: '',
        pomodoroNames: ['coding', 'working'],
      },
    };

    expect(changeCurrentNamePomodoro(currentName, nameOfLastPomodoros)).toEqual(expectedAction);
  });
});
