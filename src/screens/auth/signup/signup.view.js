import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm.index';

const SignupView = props => {
  const {
    fullName,
    email,
    password,
    onSignup,
    onGoLogin,
    errorFullName,
    errorEmail,
    errorPassword,
    isTrueInfo,
  } = props;
  return (
    <AuthForm
      type={2}
      value1={fullName}
      value2={email}
      value3={password}
      onPress1={onSignup}
      onPress2={onGoLogin}
      error1={errorFullName}
      error2={errorEmail}
      error3={errorPassword}
      isTrueInfo={isTrueInfo}
    />
  );
};

export default React.memo(SignupView);
