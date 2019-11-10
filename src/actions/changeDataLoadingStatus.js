export const LOADING_DATA_STATUS = 'LOADING_DATA_STATUS';

export const changeLoadingDataStatus = state => {
  return {
    type: LOADING_DATA_STATUS,
    payload: {
      state,
    },
  };
};
