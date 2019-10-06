import { CURRENT_NAME } from 'actions/pomodoroNames';
import reducer from './pomodoroNames';

// TODO: podmienić statyczne nazwy DOWNLOAD_DATA na nasz nazwy z zmiennych w action
describe('pomodoroNames reducer', () => {
  it('should return a initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      currentPomodoroName: '',
      downloadData: false,
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
      downloadData: false,
      nameOfLastPomodoros: ['coding', 'working'],
    });
  });

  it('should handle DOWNLOAD_DATA', () => {
    expect(
      reducer(undefined, {
        type: 'DOWNLOAD_DATA',
        payload: {
          pomodoroNames: ['coding', 'learn english', 'meditation'],
        },
      }),
    ).toEqual({
      currentPomodoroName: '',
      downloadData: true,
      nameOfLastPomodoros: ['coding', 'learn english', 'meditation'],
    });
  });
});
