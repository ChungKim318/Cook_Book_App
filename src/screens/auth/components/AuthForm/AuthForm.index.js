import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {ButtonCustom, LogoMain, TextInputCustom} from '../../../../components';
import {images} from '../../../../constants/images';
import styles from './AuthForm.styles';

const AuthForm = ({
  type,
  value1,
  value2,
  value3,
  onPress1,
  onPress2,
  error1,
  error2,
  error3,
  isTrueInfo,
}) => {
  // console.log('AuthForm re-render');
  return (
    <View style={styles().container}>
      <ImageBackground
        source={images.LOGIN_SIGNUP_BACKGROUND}
        resizeMode="cover"
        style={styles().headerContainer}>
        <View style={styles().logo}>
          <LogoMain />
          <Text style={styles().title}>
            {type == 1 ? `Welcome Back!` : `Start\nfrom Scratch`}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles().bodyContainer}>
        <View style={styles().title2Container}>
          <Text style={styles().title2Text}>
            {type == 1
              ? `Please login to continue`
              : `Create account to continue`}
          </Text>
        </View>
        <View style={styles().inputContainer}>
          <TextInputCustom
            title={type == 1 ? 'Email address' : 'Full Name'}
            value={value1}
            isSecure={false}
            errorMessage={error1}
          />
        </View>
        <View style={styles().inputContainer}>
          <TextInputCustom
            title={type == 1 ? 'Password' : 'Email'}
            value={value2}
            isSecure={type == 1 ? true : false}
            forgotPassword={type == 1 ? 'Forgot password ?' : ' '}
            errorMessage={error2}
          />
        </View>
        {value3 && (
          <View style={styles().inputContainer}>
            <TextInputCustom
              title={'Password'}
              value={value3}
              isSecure={true}
              errorMessage={error3}
            />
          </View>
        )}
        <View style={styles().buttonContainer}>
          <ButtonCustom
            title={type == 1 ? 'Login' : 'Create Account'}
            onPress={onPress1}
            disable={!isTrueInfo}
          />
        </View>
        <View style={styles().lastContainer}>
          <Text style={styles().lastText1}>
            {type == 1 ? 'New to Scratch?' : 'Already have an account?'}
          </Text>
          <TouchableOpacity onPress={onPress2}>
            <Text style={styles().lastText2}>
              {type == 1 ? 'Create Account Here' : 'Login Here'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default React.memo(AuthForm);
