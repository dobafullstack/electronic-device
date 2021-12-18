import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const currentUser = useSelector((state) => state.authUser.currentUser);

  const setComponent = (props) => {
    if (currentUser === null) return <Redirect to="/user/login" />;
    return <Component {...props} />;
  };

  return <Route {...rest} render={setComponent} />;
};

// eslint-disable-next-line import/prefer-default-export
export { ProtectedRoute };
