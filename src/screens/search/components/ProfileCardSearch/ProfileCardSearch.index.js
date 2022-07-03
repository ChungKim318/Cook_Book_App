import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {NavigationServices} from '../../../../utils';
import styles from './ProfileCardSearch.styles';
import {SCREEN_NAME} from '../../../../constants/screenName';

const ProfilesCardSearch = ({item, index, ...props}) => {
  const {image, userName, userImage} = item;

  // console.log('ProfilesCardSearch re-render');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          NavigationServices.replace(SCREEN_NAME.USER_OTHER_PROFILE_SCREEN, {
            user: item,
          })
        }>
        <View style={styles.headerContainer}>
          <Image
            source={image}
            style={styles.imageBackground}
            resizeMode="cover"
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.userNameText}>{userName}</Text>
          <View style={styles.infoUserContainer}>
            <View style={styles.numberTextContainer}>
              <Text style={styles.numberText}>289</Text>
              <Text style={styles.recipeFollowerText}>recipes</Text>
            </View>
            <View style={styles.numberTextContainer}>
              <Text style={styles.numberText}>8k</Text>
              <Text style={styles.recipeFollowerText}>followers</Text>
            </View>
          </View>
        </View>
        <View style={styles.imageUserContainer}>
          <Image
            source={userImage}
            style={styles.imageUser}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ProfilesCardSearch);
