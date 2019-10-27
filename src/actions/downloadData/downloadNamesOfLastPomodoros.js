import firebase from 'firebase';
import { changeCurrentNamePomodoro } from 'actions/pomodoroNames';

export default () => {
  const userId = firebase.auth().currentUser.uid;
  const query = firebase.database().ref(`users/${userId}/pomodoroNames`);

  return dispatch => {
    query.once('value', snap => {
      if (snap.val()) {
        dispatch(changeCurrentNamePomodoro('', snap.val()));
      }
    });
  };
};
