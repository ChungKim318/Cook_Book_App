import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Header} from '../../components';
import {icons} from '../../constants/icons';
import stylesOri from '../../constants/stylesOri';
import SwitchCustom from './component/SwitchCustom/SwitchCustom.index';
import styles from './setting.styles';

const SettingView = ({onLogout, ...props}) => {
  return (
    <View style={stylesOri.container}>
      <Header
        rightHeader={
          <TouchableOpacity
            style={styles.rightHeaderContainer}
            onPress={() => onLogout()}>
            <Image
              source={icons.LOG_OUT}
              style={styles.iconLogout}
              resizeMode="cover"
            />
            <Text style={styles.textLogout}>Log Out</Text>
          </TouchableOpacity>
        }
      />

      <View style={stylesOri.bodyContainer}>
        <Text style={styles.titleText}>Settings</Text>
        <Text style={[styles.pushNotificationText, styles.marginTop25]}>
          Push Notifications
        </Text>
        <SwitchCustom
          title={'Notify me for followers'}
          styleSwitch={styles.marginTop25}
        />
        <SwitchCustom title={'When someone send me a message'} />
        <SwitchCustom title={'When someone do live cooking'} />
        <View style={styles.line} />
        <Text style={styles.pushNotificationText}>Privacy Settings</Text>
        <SwitchCustom
          title={'Followers can see my saved recipes'}
          styleSwitch={styles.marginTop25}
        />
        <View style={styles.infoPrivacyContainer}>
          <Text style={styles.infoPrivacyContainerText}>
            If disabled, you won’t be able to see recipes saved by other
            profiles. Leave this enabled to share your collected recipes to
            others.
            <Text
              onPress={() => console.log('press why this master')}
              style={styles.whyThisMaster}>
              why this matter?
            </Text>
          </Text>
        </View>
        <SwitchCustom
          title={'Followers can see profiles I follow'}
          styleSwitch={styles.marginTop20}
        />
        <View style={styles.line} />
        <View style={styles.changePasswordContainer}>
          <Text style={styles.changePasswordText}>Change Password</Text>
          <TouchableOpacity>
            <Image source={icons.RIGHT} resizeMode="cover" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default React.memo(SettingView);
