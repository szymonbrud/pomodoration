import { POMODORO_NAME, LOADING_DATA_STATUS } from 'actions';
import {
  DOWNLOAD_DATA_SUCCESSFULL,
  DOWNLOAD_DATA,
  GET_DATE_FROM_DATA_AND_SORT,
} from 'actions/downloadSessionsFromDatabase';

export const pomdoroName = (state = { name: '' }, { type, payload }) => {
  switch (type) {
    case POMODORO_NAME:
      return {
        ...state,
        name: payload.name,
      };
    default:
      return state;
  }
};

// TODO: zadać pytanie na forum czy mogę napisać
//  return payload
//  retrun [...state, payload]
export const pomodoroSessions = (state = [], { type, payload }) => {
  switch (type) {
    case DOWNLOAD_DATA_SUCCESSFULL:
      return payload.data;
    default:
      return state;
  }
};

export const downloadData = (state = false, { type, payload }) => {
  switch (type) {
    case DOWNLOAD_DATA:
      return payload.download;
    default:
      return state;
  }
};

export const allDate = (state = [], { type, payload }) => {
  switch (type) {
    case GET_DATE_FROM_DATA_AND_SORT:
      return payload.date;
    default:
      return state;
  }
};

export const loadingDataStatusOfTimer = (state = false, { type, payload }) => {
  switch (type) {
    case LOADING_DATA_STATUS:
      return payload.state;
    default:
      return state;
  }
};
