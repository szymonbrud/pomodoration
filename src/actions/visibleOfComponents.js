export const CHANGE_SET_NAME_BOTTOM_PANEL = 'CHANGE_SET_NAME_BOTTOM_PANEL';

export const changeSetNameBottomPanel = isBottomPanelOpen => {
  return {
    type: CHANGE_SET_NAME_BOTTOM_PANEL,
    payload: {
      isSetNameBottomPanelOpen: isBottomPanelOpen,
    },
  };
};
