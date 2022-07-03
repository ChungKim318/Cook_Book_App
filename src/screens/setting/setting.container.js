import React, {useCallback} from 'react';
import SettingView from './setting.view';
import {keyStore} from '../../constants/keyStoreAsync';
import {SCREEN_NAME} from '../../constants/screenName';
import {NavigationServices} from '../../utils';
import {removeData} from '../../utils/storeAsync';
import {SendNotification} from '../../components/NotificationModal/NotificationModal.index';

const SettingContainer = props => {
  const onLogout = useCallback(() => {
    SendNotification({
      isShow: true,
      options: {
        message: 'Bạn thực sự muốn đăng xuất ?',
        isAccept: true,
        titleAccept: 'Ok',
        isCancel: true,
        onAccept: () =>
          removeData(keyStore.AUTH_TOKEN).then(() =>
            NavigationServices.reset({
              index: 0,
              routes: [{name: SCREEN_NAME.AUTH_SCREEN}],
            }),
          ),
      },
    });
  }, []);
  return <SettingView onLogout={onLogout} />;
};

export default SettingContainer;
