import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import { Redirect } from 'react-router-dom';
import LoginButton from 'components/LoginButton/LoginButton';
import styled from 'styled-components';
import LoadingAnimation from 'components/Molecules/LoadingAnimation/LoadingAnimation';
import { firebaseApp } from '../firebaseConfig';

const StyledMainWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.BGblue};
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const H2 = styled.h2`
  margin: 0 0 0 5%;
  color: white;
  font-size: 30px;
`;

const H1 = styled.h1`
  margin: 0 0 42px 5%;
  color: white;
  font-size: 35px;
`;

const SmallTextBellowLoginButton = styled.p`
  margin: 20px 0 42px 5%;
  color: white;
  opacity: 0.7;
`;

const StyledWrapperPositionAnimation = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
  background: ${({ theme }) => theme.BGblue};
`;

const LoginTemplate = ({ user }) => {
  const [isLoadingDuringAction, setIsLoadingDuringAction] = useState(false);
  const [isNOTFirstUserLogin, setIsNOTFirstUserLogin] = useState(null);

  const authenticationAnimationStart = () => {
    setIsLoadingDuringAction(true);
    setTimeout(() => {
      setIsLoadingDuringAction(false);
    }, 30000);
  };
  const LoginAction = () => {
    authenticationAnimationStart();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp.auth().signInWithRedirect(provider);
  };

  if (user) {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/users/${userId}/isFirstLogin`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          setIsNOTFirstUserLogin(true);
        } else {
          setIsNOTFirstUserLogin(false);
        }
      });
  }

  if (isNOTFirstUserLogin) {
    return <Redirect to="/timer" />;
  }

  if (isNOTFirstUserLogin === false) {
    return <Redirect to="/firstLogin" />;
  }

  return (
    <StyledMainWrapper>
      <H2 id="h2">Hello</H2>
      <H1>Pomodoration</H1>
      {isLoadingDuringAction ? (
        <StyledWrapperPositionAnimation>
          <LoadingAnimation text="uwierzytelnianie" />
        </StyledWrapperPositionAnimation>
      ) : (
        !user && <LoginButton textInButton="zaloguj się przez google" action={LoginAction} />
      )}
      <SmallTextBellowLoginButton>Więcej metod logowania już wkrótce</SmallTextBellowLoginButton>
    </StyledMainWrapper>
  );
};

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(LoginTemplate);
