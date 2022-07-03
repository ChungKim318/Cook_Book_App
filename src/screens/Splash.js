import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {keyStore} from '../constants/keyStoreAsync';
import {SCREEN_NAME} from '../constants/screenName';
import NavigationServices from '../utils/navigationServices';
import {getData} from '../utils/storeAsync';

const Splash = () => {
  useEffect(() => {
    getData(keyStore.AUTH_TOKEN)
      .then(res => {
        if (!!res) {
          [
            NavigationServices.replace(SCREEN_NAME.MAIN_BOTTOM_TAB_SCREEN, {
              screen: SCREEN_NAME.RECIPE_FEED_SCREEN,
            }),
          ];
        } else {
          [NavigationServices.replace(SCREEN_NAME.AUTH_SCREEN)];
        }
      })
      .catch(err => console.log(err));
    const timeOut = setTimeout(() => SplashScreen.hide(), 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return <></>;
};

export default Splash;
