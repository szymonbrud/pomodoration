import {
  CHANGE_SET_NAME_BOTTOM_PANEL,
  CHANGE_NAME_OF_POMODORO_LIST,
} from 'actions/visibleOfComponents';
import visibleOfComponents from './visibleOfComponents';

describe('visibleOfCompoents reducer', () => {
  it('Should to return a default value', () => {
    const defaultValue = {
      isSetNameBottomPanelVisible: false,
      isNameOfPomodoroListOpen: false,
    };

    expect(visibleOfComponents(undefined, {})).toEqual(defaultValue);
  });

  it('Return when CHANGE_SET_NAME_BOTTOM_PANEL', () => {
    const expectedReturn = {
      isSetNameBottomPanelVisible: true,
      isNameOfPomodoroListOpen: false,
    };

    expect(
      visibleOfComponents(undefined, {
        type: CHANGE_SET_NAME_BOTTOM_PANEL,
        payload: {
          isSetNameBottomPanelOpen: true,
        },
      }),
    ).toEqual(expectedReturn);
  });

  it('Return when CHANGE_NAME_OF_POMODORO_LIST', () => {
    const expectToReturn = {
      isSetNameBottomPanelVisible: false,
      isNameOfPomodoroListOpen: true,
    };

    expect(
      visibleOfComponents(undefined, {
        type: CHANGE_NAME_OF_POMODORO_LIST,
        payload: {
          isNameOfPomodoroListOpen: true,
        },
      }),
    ).toEqual(expectToReturn);
  });
});
