export const LOADING_DATA_STATUS = 'LOADING_DATA_STATUS';

// TODO: przetestować to
export const loadingDataStatus = state => {
  return {
    type: LOADING_DATA_STATUS,
    payload: {
      state,
    },
  };
};
