import React, { useContext, useState } from 'react';
import * as firebase from 'firebase';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import { Redirect } from 'react-router-dom';
import LoginButton from 'components/LoginButton/LoginButton';
import styled from 'styled-components';
import { firebaseApp } from '../firebaseConfig';
import { AuthContext } from '../Auth';

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

// eslint-disable-next-line
const LoginTemplate = ({ user, signOut, signInWithGoogle }) => {
  const [currentLogin, setCurrentLogin] = useState(false);
  const { currentUser } = useContext(AuthContext);

  if (currentLogin) {
    if (currentUser) return <Redirect to="/timer" />;
  }

  const LoginAction = () => {
    signInWithGoogle();
    setCurrentLogin(true);
  };

  const rediretMe = () => {
    setCurrentLogin(true);
  };

  return (
    <StyledMainWrapper>
      <H2>Hello</H2>
      <H1>Pomodoro app</H1>
      {user ? (
        <>
          <LoginButton textInButton="przejdz do aplikacji" action={rediretMe} LogoActive={false} />
          <LoginButton textInButton="wyloguj się" action={signOut} />
        </>
      ) : (
        <LoginButton textInButton="zaloguj się przez google" action={LoginAction} />
      )}
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
