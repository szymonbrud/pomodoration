import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginTemplate from 'templates/LoginTemplate';
import TimerTemplate from 'templates/TimerTemplate';
import 'firebase/auth';
import PrivateRoute from 'components/PrivateRoute.js/PrivateRoute';
import { AuthProvider } from './Auth';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            //@TODO: here
            {/* <PrivateRoute exact path="/timer" component={TimerTemplate} /> */}
            <Route exact path="/" component={TimerTemplate} />
            {/* <Route exact path="/" component={LoginTemplate} /> */}
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
