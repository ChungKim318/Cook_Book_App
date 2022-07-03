import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm.index';

const LoginView = props => {
  const {
    email,
    password,
    onLogin,
    errorEmail,
    errorPassword,
    onGoSignup,
    isTrueInfo,
  } = props;
  return (
    <AuthForm
      type={1}
      value1={email}
      value2={password}
      onPress1={onLogin}
      error1={errorEmail}
      error2={errorPassword}
      onPress2={onGoSignup}
      isTrueInfo={isTrueInfo}
    />
  );
};

export default React.memo(LoginView);
