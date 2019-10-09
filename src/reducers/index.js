import { LOADING_DATA_STATUS } from 'actions';

// TODO: przetestować to
export const loadingDataStatusOfTimer = (state = false, { type, payload }) => {
  switch (type) {
    case LOADING_DATA_STATUS:
      return payload.state;
    default:
      return state;
  }
};
