import reducer from 'reducers/pomodoroNames';
import { storeToTests } from 'Utils';
import { changeCurrentNamePomodoro, onlySetCurrentName } from 'actions/pomodoroNames';

jest.mock('components/Molecules/Timer/Requests');

describe('test reducers and action copatibility', () => {
  it('Should retrun correct data of state, when run onlySetCurrentName action', () => {
    const store = storeToTests({ reducer });
    store.dispatch(onlySetCurrentName('coding'));

    const shouldToReturnAfterAction = {
      reducer: {
        currentPomodoroName: 'coding',
        downloadDataLastPomodoros: false,
        nameOfLastPomodoros: [],
      },
    };

    expect(store.getState()).toEqual(shouldToReturnAfterAction);
  });

  it('should return corrent data of state, when run changeCurrentNamePomodoro, after last action', () => {
    const store = storeToTests({ reducer });
    store.dispatch(changeCurrentNamePomodoro('eatting', []));
    const shouldToReturnAfterAction = {
      reducer: {
        currentPomodoroName: 'eatting',
        downloadDataLastPomodoros: false,
        nameOfLastPomodoros: ['eatting'],
      },
    };
    expect(store.getState()).toEqual(shouldToReturnAfterAction);
  });
});
