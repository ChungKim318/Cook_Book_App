import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {keyStore} from './constants/keyStoreAsync';
import AppContainer from './navigator';
import store from './redux/configureStore';
import {getData, storeData} from './utils/storeAsync';
import {LogBox} from 'react-native';
import {Provider as ProviderRecipes} from './contexts/recipes/recipes.context';
import {Provider as ProviderUserAdmin} from './contexts/userAdmin/userAdmin.context';
import {StatusBar} from 'react-native';
import {
  NotificationListener,
  requestUserPermission,
} from './helpers/pushNotification';

LogBox.ignoreLogs([
  "exported from 'deprecated-react-native-prop-types'.",
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'. ",
]);

const Root = () => {
  useEffect(() => {
    getData(keyStore.COOK_BOOK).then(res => {
      if (!res) {
        storeData(keyStore.COOK_BOOK, [
          {name: 'Western', data: []},
          {name: 'Quick Lunch', data: []},
          {name: 'Veggies', data: []},
        ]);
      }
    });

    //  AsyncStorage.removeItem(keyStore.COOK_BOOK);
    // AsyncStorage.removeItem(keyStore.CHANNEL_NOTIFICATION);
    //FCM

    requestUserPermission();
    NotificationListener();
  }, []);
  return (
    <ProviderUserAdmin>
      <ProviderRecipes>
        <Provider store={store}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={'transparent'}
            translucent
          />
          <AppContainer />
        </Provider>
      </ProviderRecipes>
    </ProviderUserAdmin>
  );
};

export default Root;
