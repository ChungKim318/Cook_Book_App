import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './UserCard.styles';
import Octicons from 'react-native-vector-icons/Octicons';
import {NavigationServices, scale} from '../../../../utils';
import colors from '../../../../constants/colors';
import {ReactComponent} from '../../../../components';
import {SCREEN_NAME} from '../../../../constants/screenName';

const UserCard = ({user, type, ...props}) => {
  const {userImage, userName, address, followers, like} = user;

  // console.log('UserCard re-render');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={userImage} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.userNameContainer}>
          <Text style={styles.userNameText} numberOfLines={2}>
            {userName}
          </Text>

          {type == 1 && (
            <TouchableOpacity
              onPress={() =>
                NavigationServices.navigate(SCREEN_NAME.EDIT_PROFILE_SCREEN, {
                  user,
                })
              }>
              <Octicons name="pencil" size={scale(18)} color={colors.black} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.normalText} numberOfLines={2}>
          {address}
        </Text>
        <View style={styles.likeAndComment}>
          <ReactComponent
            react1={`${followers} followers`}
            react2={`${like} likes`}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(UserCard);
