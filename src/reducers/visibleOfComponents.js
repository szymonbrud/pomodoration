import { CHANGE_SET_NAME_BOTTOM_PANEL } from 'actions/visibleOfComponents';

const defaultState = {
  isSetNameBottomPanelVisible: false,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_SET_NAME_BOTTOM_PANEL:
      return {
        ...state,
        isSetNameBottomPanelVisible: payload.isSetNameBottomPanelOpen,
      };
    default:
      return state;
  }
};
