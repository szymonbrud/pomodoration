// TODO: napisać testy do tego komponentu, myślę że się da, gdy będę manipulować mock fierbase

import React, { useContext, useState } from 'react';
import firebase from 'firebase';
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

// TODO: napiać prop types do tego, moge wyszukać w necie jakie prop types do tego pasują
const LoginTemplate = ({ user, signOut, signInWithGoogle }) => {
  const [currentLogin, setCurrentLogin] = useState(false);
  const { currentUser } = useContext(AuthContext);

  if (currentLogin) {
    if (currentUser) return <Redirect to="/timer" />;
  }

  const LoginAction = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp.auth().signInWithRedirect(provider);
    setCurrentLogin(true);
  };

  const rediretMe = () => {
    setCurrentLogin(true);
  };

  return (
    <StyledMainWrapper>
      <H2 id="h2">Hello</H2>
      {/* TODO: co to za linia i poco ją tu wrzuciełem */}
      {/* onClick={() => ServiceWorkerGlobalScope.onnotificationclick} */}
      <H1>Pomodoro app</H1>
      {/* TODO: dodać w przyszłości że jeżeli user jest aktywny to odrazu go prze redirectować bęzie lepiej */}
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
