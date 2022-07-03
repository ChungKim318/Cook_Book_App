import messaging from '@react-native-firebase/messaging';
import {keyStore} from '../../constants/keyStoreAsync';
import {getData, storeData} from '../../utils/storeAsync';
import notifee, {AndroidImportance} from '@notifee/react-native';
import colors from '../../constants/colors';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken();
  }
}

const GetFCMToken = async () => {
  let fcmToken = await getData(keyStore.FCM_TOKEN);
  console.log('fcm token', 'old FCM token', fcmToken);

  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log(fcmToken, 'new FCM token');
        await storeData(keyStore.FCM_TOKEN, fcmToken);
      }
    } catch (err) {
      console.log(err, 'error FCM Token');
    }
  }
};

const NotificationListener = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    // navigate screen
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log('Notification on fro ground state....', remoteMessage);
    let {title, body} = remoteMessage.notification;
    // console.log('titleeeeee', title, body);
    onDisplayNotification(title, body);
  });
};

const onDisplayNotification = async (title, body) => {
  const channelId = await notifee.createChannel({
    id: 'RecipeChannel',
    name: 'Recipe App',
    badge: true,
    importance: AndroidImportance.HIGH,
  });

  // Display a notification
  await notifee.displayNotification({
    id: `${Date.now().toString()}`,
    title: title,
    body: body,
    android: {
      color: colors.primary,
      channelId,
      smallIcon: 'ic_launcher_round', // optional, defaults to 'ic_launcher'.
      importance: AndroidImportance.HIGH,
    },
  });
};

export {
  requestUserPermission,
  NotificationListener,
  GetFCMToken,
  onDisplayNotification,
};
