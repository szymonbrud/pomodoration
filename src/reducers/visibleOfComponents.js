import {
  CHANGE_SET_NAME_BOTTOM_PANEL,
  CHANGE_NAME_OF_POMODORO_LIST,
} from 'actions/visibleOfComponents';

const defaultState = {
  isSetNameBottomPanelVisible: false,
  isNameOfPomodoroListOpen: false,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_SET_NAME_BOTTOM_PANEL:
      return {
        ...state,
        isSetNameBottomPanelVisible: payload.isSetNameBottomPanelOpen,
      };
    case CHANGE_NAME_OF_POMODORO_LIST:
      return {
        ...state,
        isNameOfPomodoroListOpen: payload.isNameOfPomodoroListOpen,
      };
    default:
      return state;
  }
};
