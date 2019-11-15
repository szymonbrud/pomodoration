import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginTemplate from 'templates/LoginTemplate';
import TimerTemplate from 'templates/TimerTemplate';
import 'firebase/auth';
import PrivateRoute from 'components/PrivateRoute.js/PrivateRoute';
import FirstLoginTemplate from 'templates/FirstLoginTemplate';
import { AuthProvider } from './Auth';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <PrivateRoute exact path="/timer" component={TimerTemplate} />
            <PrivateRoute exact path="/firstLogin" component={FirstLoginTemplate} />
            <Route exact path="/" component={LoginTemplate} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
