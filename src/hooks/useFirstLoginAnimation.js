import { useState } from 'react';
import firebase from 'firebase';

const useFirstLoginAnimation = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    setCurrentSection(prev => prev + 1);
  };

  const userId = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`users/${userId}/isFirstLogin`)
    .set(true);

  firebase
    .database()
    .ref(`users/${userId}/timer/status`)
    .set('reset');

  return {
    currentSection,
    nextSection,
  };
};

export default useFirstLoginAnimation;
