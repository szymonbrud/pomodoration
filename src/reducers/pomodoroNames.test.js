import { CURRENT_NAME } from 'actions/pomodoroNames';
import reducer from './pomodoroNames';

// TODO: change string DOWNLOAD_DATA to variable called DOWNLOAD_DATA
describe('pomodoroNames reducer', () => {
  it('should return a initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      currentPomodoroName: '',
      downloadDataLastPomodoros: false,
      nameOfLastPomodoros: [],
    });
  });

  it('should handle CURRENT_NAME', () => {
    expect(
      reducer(undefined, {
        type: CURRENT_NAME,
        payload: {
          name: 'coding',
          pomodoroNames: ['coding', 'working'],
        },
      }),
    ).toEqual({
      currentPomodoroName: 'coding',
      downloadDataLastPomodoros: false,
      nameOfLastPomodoros: ['coding', 'working'],
    });
  });

  it('should handle DOWNLOAD_DATA_POMODORO_NAMES', () => {
    expect(
      reducer(undefined, {
        type: 'DOWNLOAD_DATA_POMODORO_NAMES',
        payload: {
          pomodoroNames: ['coding', 'learn english', 'meditation'],
        },
      }),
    ).toEqual({
      currentPomodoroName: '',
      downloadDataLastPomodoros: true,
      nameOfLastPomodoros: ['coding', 'learn english', 'meditation'],
    });
  });

  it('should handle DOWNLOAD_NAME', () => {
    expect(
      reducer(undefined, {
        type: 'SET_NAME',
        payload: {
          name: 'working',
        },
      }),
    ).toEqual({
      currentPomodoroName: 'working',
      downloadDataLastPomodoros: false,
      nameOfLastPomodoros: [],
    });
  });
});
