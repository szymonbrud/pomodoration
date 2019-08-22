import React, { Component } from 'react';
import MainTemplate from 'templates/MainTemplate';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import LoginTemplate from 'templates/LoginTemplate';
import TimerTemplate from 'templates/TimerTemplate';
import * as firebase from 'firebase';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import { firebaseApp } from './firebaseConfig';

// const firebaseApp = firebase.initializeApp(firebaseConfig);


const App = ({ user, signOut, signInWithGoogle }) => {
  console.log(user);
  console.log(firebase.auth().currentUser.uid);
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      ))}
    />
  );

  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <PrivateRoute exact path="/timer" component={TimerTemplate} />
          <Route exact path="/" component={LoginTemplate} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};


const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
