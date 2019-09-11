import { POMODORO_NAME } from 'actions';

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
