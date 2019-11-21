import { changeSetNameBottomPanel, changeNameOfPomdoroListOpen } from './visibleOfComponents';

describe('Actions visibleOfComponents', () => {
  it('Should create an action to change visible of SetNameBottomPanel ', () => {
    const changeValue = true;
    const expectedValue = {
      type: 'CHANGE_SET_NAME_BOTTOM_PANEL',
      payload: {
        isSetNameBottomPanelOpen: true,
      },
    };

    expect(changeSetNameBottomPanel(changeValue)).toEqual(expectedValue);
  });

  it('Shout to create an action to change visible of CheckNameOfPomodoroList', () => {
    const changeValue = true;
    const expectedValue = {
      type: 'CHANGE_NAME_OF_POMODORO_LIST',
      payload: {
        isNameOfPomodoroListOpen: true,
      },
    };

    expect(changeNameOfPomdoroListOpen(changeValue)).toEqual(expectedValue);
  });
});
