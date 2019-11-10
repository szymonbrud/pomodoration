import { LOADING_DATA_STATUS } from 'actions/changeDataLoadingStatus';

export default (state = false, { type, payload }) => {
  switch (type) {
    case LOADING_DATA_STATUS:
      return payload.state;
    default:
      return state;
  }
};
