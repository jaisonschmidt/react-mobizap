/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import LoginView from './LoginView';

const Login = props => {
  const { handleClickLogin } = props;
  return <LoginView handleClickLogin={handleClickLogin} />;
};

export default Login;
