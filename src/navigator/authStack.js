import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginContainer from '../screens/auth/login/login.container';
import {SCREEN_NAME} from '../constants/screenName';
import SignupContainer from '../screens/auth/signup/signup.container';

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAME.LOGIN_SCREEN}
        component={LoginContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.SIGN_UP_SCREEN}
        component={SignupContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
