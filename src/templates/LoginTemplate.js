import React from 'react';
import * as firebase from 'firebase';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import { firebaseApp } from '../firebaseConfig';

const LoginTemplate = ({ user, signOut, signInWithGoogle }) => (
  <>
    <h1>Login template</h1>
    {user
      ? (
        <>
          <p>
            hello
            {user.displayName}
          </p>
        </>
      ) : <p>please sign in</p>}

    {user
      ? <button onClick={signOut}>LOG OUT</button>
      : <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>}
  </>
);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(LoginTemplate);
