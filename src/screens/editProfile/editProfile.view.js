import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ButtonCustom, Header, TextInputCustom} from '../../components';
import stylesOri from '../../constants/stylesOri';
import styles from './editProfile.styles';

const EditProfileView = ({user, userName, address, email, phone, ...props}) => {
  const {userImage} = user;

  return (
    <View style={stylesOri.container}>
      <View style={styles.headerContainer}>
        <Header titleBack={'Back to Profile'} />
      </View>
      <View style={stylesOri.bodyContainer}>
        <View style={styles.titleEditProfileContainer}>
          <Text style={styles.titleEditProfileText}>Edit Profile</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Image
            source={userImage}
            style={styles.pictureUser}
            resizeMode="cover"
          />
          <TouchableOpacity>
            <Text style={styles.pictureText}>Edit Profile Picture</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInputCustom title={'Full Name'} value={userName} />
        </View>
        <View style={styles.inputContainer}>
          <TextInputCustom title={'Bio'} value={address} />
        </View>

        <Text style={styles.privateText}>Private Information</Text>
        <View style={styles.inputContainer}>
          <TextInputCustom title={'Email'} value={email} />
        </View>
        <View style={styles.inputContainer}>
          <TextInputCustom title={'Phone'} value={phone} />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <ButtonCustom title={'Save Profile'} />
      </View>
    </View>
  );
};

export default React.memo(EditProfileView);
