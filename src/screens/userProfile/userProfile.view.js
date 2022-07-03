import React from 'react';
import {View} from 'react-native';
import styles from './userProfile.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationServices, scale} from '../../utils';
import colors from '../../constants/colors';
import UserCard from './component/UserCard/UserCard.index';
import {Heading1} from '../../components';
import TabContainer from './component/TabContainer/TabContainer.index';
import {SCREEN_NAME} from '../../constants/screenName';
import stylesOri from '../../constants/stylesOri';

const UserProfileView = ({user, ...props}) => {
  return (
    <View style={stylesOri.container}>
      <View style={styles.headerContainer}>
        <Heading1
          titleLeft="My Kitchen"
          titleRight="Settings"
          iconRight={
            <AntDesign
              name="setting"
              size={scale(16)}
              color={colors.lightBlack}
            />
          }
          onPressRight={() =>
            NavigationServices.navigate(SCREEN_NAME.SETTING_SCREEN)
          }
        />
      </View>

      <View style={stylesOri.bodyContainer}>
        <View style={styles.userInfoContainer}>
          <UserCard user={user} type={1} />
        </View>
        <View style={styles.tabContainer}>
          <TabContainer type={1} />
        </View>
      </View>
      <View style={stylesOri.footerContainer}></View>
    </View>
  );
};

export default React.memo(UserProfileView);
