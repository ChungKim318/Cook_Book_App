import React, {useState, useCallback, useEffect} from 'react';
import {useFormInput} from '../../../hooks';
import SignupView from './signup.view';
import {NavigationServices} from '../../../utils';
import {SCREEN_NAME} from '../../../constants/screenName';
import {validateEmail} from '../../../helpers';
import WithCheckInternet from '../../../HOC/withCheckInternet/withCheckInternet';

const SignupContainer = props => {
  const fullName = useFormInput('');
  const errorFullName = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');
  const errorEmail = useFormInput('');
  const errorPassword = useFormInput('');
  const [isTrueInfo, setIsTrueInfo] = useState(false);

  useEffect(() => {
    checkInfo();
  }, [password.value, email.value, fullName.value]);

  const checkInfo = () => {
    let flagEmail = false;
    let flagPassword = false;
    let flagFullName = false;
    if (email.isChange) {
      const isEmail = validateEmail(email.value);
      if (!email.value) {
        errorEmail.onChange('Nội dung nhập vào không được trống!');
        setIsTrueInfo(false);
      } else {
        if (isEmail) {
          errorEmail.onChange('');
          flagEmail = true;
        } else {
          errorEmail.onChange('Định dạng email không đúng!');
          setIsTrueInfo(false);
        }
      }
    }

    if (password.isChange) {
      if (!password.value) {
        errorPassword.onChange('Nội dung nhập vào không được trống!');
        setIsTrueInfo(false);
      } else {
        errorPassword.onChange('');
        flagPassword = true;
      }
    }

    if (fullName.isChange) {
      if (!fullName.value) {
        errorFullName.onChange('Nội dung nhập vào không được trống!');
        setIsTrueInfo(false);
      } else {
        errorFullName.onChange('');
        flagFullName = true;
      }
    }

    if (flagEmail && flagPassword && flagFullName) {
      setIsTrueInfo(true);
    }
  };

  const onSignup = () => {
    if (isTrueInfo) {
      NavigationServices.replace(SCREEN_NAME.LOGIN_SCREEN, {
        emailInit: email.value,
      });
    }
  };

  const onGoLogin = useCallback(() => {
    NavigationServices.replace(SCREEN_NAME.LOGIN_SCREEN);
  }, []);

  return (
    <SignupView
      fullName={fullName}
      email={email}
      password={password}
      errorFullName={errorFullName.value}
      errorEmail={errorEmail.value}
      errorPassword={errorPassword.value}
      onSignup={onSignup}
      onGoLogin={onGoLogin}
      isTrueInfo={isTrueInfo}
    />
  );
};

export default WithCheckInternet(SignupContainer);
