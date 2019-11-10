import { CHANGE_SET_NAME_BOTTOM_PANEL } from 'actions/visibleOfComponents';
import visibleOfComponents from './visibleOfComponents';

describe('visibleOfCompoents reducer', () => {
  it('Should to return a default value', () => {
    const defaultValue = {
      isSetNameBottomPanelVisible: false,
    };

    expect(visibleOfComponents(undefined, {})).toEqual(defaultValue);
  });

  it('Return when CHANGE_SET_NAME_BOTTOM_PANEL', () => {
    const expectedReturn = {
      isSetNameBottomPanelVisible: true,
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
});
