import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { AuthContext } from 'Auth';

// TODO: nauczyć się testować redirect po pewnie jest cos takiego
const PrivateRoute = ({ component: RouteComponent }) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <RouteComponent />;
  }
  if (currentUser === false) {
    return <Redirect to="/" />;
  }

  return <h1>loading......</h1>;
};

PrivateRoute.propTypes = {
  component: propTypes.func.isRequired,
};

export default PrivateRoute;
