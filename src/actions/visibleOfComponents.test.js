import { changeSetNameBottomPanel } from './visibleOfComponents';

describe('Name of the group', () => {
  it('Should to return a value', () => {
    const changeValue = true;
    const expectedValue = {
      type: 'CHANGE_SET_NAME_BOTTOM_PANEL',
      payload: {
        isSetNameBottomPanelOpen: true,
      },
    };

    expect(changeSetNameBottomPanel(changeValue)).toEqual(expectedValue);
  });
});
