import { CURRENT_NAME } from 'actions/pomodoroNames';

const initialState = {
  currentPomodoroName: '',
  downloadData: false,
  nameOfLastPomodoros: [],
};

// @TODO: w zmieenić w useTimer na ten reducer aby z tąd pobierał dane a nie z kąś indziej
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENT_NAME:
      return {
        ...state,
        currentPomodoroName: payload.name,
        nameOfLastPomodoros: payload.pomodoroNames,
      };
    case 'DOWNLOAD_DATA': // @TODO: tutaj będziemy równieź przy okazji pobierać aktualną nazwę z bazy danych, wsęsie aktualną nazwę naszego currnetUser bo poco do tego osobna akcja
      return {
        ...state,
        downloadData: true,
        nameOfLastPomodoros: payload.pomodoroNames,
      };
    default:
      return state;
  }
};
