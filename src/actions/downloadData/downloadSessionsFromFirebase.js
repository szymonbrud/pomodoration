import firebase from 'firebase';
import {
  downloadPomodoroSessions,
  downloadData,
  getDateFromDataAndSort,
} from 'actions/downloadSessionsFromDatabase';

export default () => {
  const userId = firebase.auth().currentUser.uid;
  const query = firebase
    .database()
    .ref(`users/${userId}/hostoryOfPomdoro`)
    .orderByChild('date');

  let pomodoroSessions = [];

  return dispatch => {
    query.on('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        pomodoroSessions = [...pomodoroSessions, childSnapshot.val()];
      });
      if (pomodoroSessions !== 0) {
        dispatch(downloadPomodoroSessions(pomodoroSessions));
        dispatch(getDateFromDataAndSort(pomodoroSessions));
        dispatch(downloadData(true));
      }
      pomodoroSessions = [];
    });
  };
};
