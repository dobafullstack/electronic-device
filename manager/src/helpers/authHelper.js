import { SECRET_JWT } from 'constants/defaultValues';
import jwt from 'jsonwebtoken';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let isLogin = false;
  const currentUser = useSelector((state) => state.authUser.currentUser);
  const token = localStorage.getItem('access_token');

  if (currentUser === null || !token) isLogin = true;

  jwt.verify(token, SECRET_JWT, (err) => {
    if (err) {
      console.log(err);
      isLogin = false;
      localStorage.removeItem('access_token');
    } else {
      isLogin = true;
    }
  });

  const setComponent = (props) => {
    if (!isLogin) return <Redirect to="/user/login" />;
    return <Component {...props} />;
  };

  return <Route {...rest} render={setComponent} />;
};

// eslint-disable-next-line import/prefer-default-export
export { ProtectedRoute };
