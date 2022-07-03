import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useFormInput} from '../../../hooks';
import {SCREEN_NAME} from '../../../constants/screenName';
import {NavigationServices} from '../../../utils';
import LoginView from './login.view';
import {validateEmail} from '../../../helpers';
import {storeData} from '../../../utils/storeAsync';
import {keyStore} from '../../../constants/keyStoreAsync';
import WithCheckInternet from '../../../HOC/withCheckInternet/withCheckInternet';

const LoginContainer = props => {
  const emailFromSignup = props?.route?.params?.emailInit;
  const email = useFormInput('');
  const password = useFormInput('');
  const errorEmail = useFormInput('');
  const errorPassword = useFormInput('');
  const [isTrueInfo, setIsTrueInfo] = useState(false);

  useEffect(() => {
    !!emailFromSignup && email.onChange(emailFromSignup);
  }, []);
  useEffect(() => {
    checkInfo();
  }, [password.value, email.value]);

  const checkInfo = () => {
    let flagEmail = false;
    let flagPassword = false;
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

    if (flagEmail && flagPassword) {
      setIsTrueInfo(true);
    }
  };
  const onLogin = () => {
    if (isTrueInfo) {
      NavigationServices.replace(SCREEN_NAME.MAIN_BOTTOM_TAB_SCREEN, {
        screen: SCREEN_NAME.RECIPE_FEED_SCREEN,
      });
      storeData(keyStore.AUTH_TOKEN, email.value);
    }
  };
  const onGoSignup = useCallback(
    () => NavigationServices.replace(SCREEN_NAME.SIGN_UP_SCREEN),
    [],
  );

  const isTrueInfoNew = useMemo(() => isTrueInfo, [isTrueInfo]);
  // console.log('istrueee', isTrueInfoNew);

  return (
    <LoginView
      email={email}
      password={password}
      errorEmail={errorEmail.value}
      errorPassword={errorPassword.value}
      onLogin={onLogin}
      onGoSignup={onGoSignup}
      isTrueInfo={isTrueInfoNew}
    />
  );
};

export default WithCheckInternet(LoginContainer);
