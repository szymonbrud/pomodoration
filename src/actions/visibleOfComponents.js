export const CHANGE_SET_NAME_BOTTOM_PANEL = 'CHANGE_SET_NAME_BOTTOM_PANEL';
export const CHANGE_NAME_OF_POMODORO_LIST = 'CHANGE_NAME_OF_POMODORO_LIST';

export const changeSetNameBottomPanel = isBottomPanelOpen => {
  return {
    type: CHANGE_SET_NAME_BOTTOM_PANEL,
    payload: {
      isSetNameBottomPanelOpen: isBottomPanelOpen,
    },
  };
};

export const changeNameOfPomdoroListOpen = isNameOfPomodoroListOpen => {
  return {
    type: CHANGE_NAME_OF_POMODORO_LIST,
    payload: {
      isNameOfPomodoroListOpen,
    },
  };
};
