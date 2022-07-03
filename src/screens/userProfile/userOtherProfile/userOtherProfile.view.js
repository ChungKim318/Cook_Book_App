import React from 'react';
import {View} from 'react-native';
import styles from './userOtherProfile.styles';
import UserCard from '../component/UserCard/UserCard.index';
import {ButtonCustom, Header} from '../../../components';
import TabContainer from '../component/TabContainer/TabContainer.index';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../../constants/colors';
import {scale} from '../../../utils';

const UserOtherProfileView = ({user, ...props}) => {
  return (
    <View style={styles.container}>
      <Header
        rightHeaderIcon={
          <Entypo
            name="dots-three-horizontal"
            size={scale(16)}
            color={colors.darkGrey}
          />
        }
        onPressRightHeader={() => console.log('right header press')}
      />

      <View style={styles.bodyContainer}>
        <View style={styles.userInfoContainer}>
          <UserCard user={user} type={2} />
        </View>
        <View style={styles.buttonFollowContainer}>
          <ButtonCustom title="Follow" />
        </View>
        <View style={styles.tabContainer}>
          <TabContainer type={2} />
        </View>
      </View>
    </View>
  );
};

export default React.memo(UserOtherProfileView);
