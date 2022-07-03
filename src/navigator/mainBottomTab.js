import React, {useEffect, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity, Image} from 'react-native';
import {SCREEN_NAME} from '../constants/screenName';
import RecipeFeedContainer from '../screens/recipeFeed/recipeFeed.container';
import SearchContainer from '../screens/search/search.container';
import UserProfileContainer from '../screens/userProfile/userProfile.container';
import {icons} from '../constants/icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {scale, scaleHeight} from '../utils';
import {windowWidth} from '../constants/sizeScreen';
import colors from '../constants/colors';

const TabButton = props => {
  const {icon, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const iconAnimation = useSharedValue(1);
  const iconAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: iconAnimation.value}],
    };
  });

  useEffect(() => {
    if (focused) {
      iconAnimation.value = withTiming(1.5);
    } else {
      iconAnimation.value = withTiming(1);
    }
  }, [focused]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <Animated.View
          style={[
            {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: windowWidth * 0.15,
              height: 0,
              borderColor: 'transparent',
              backgroundColor: 'transparent',
            },
            iconAnimationStyle,
          ]}>
          <Image
            source={icon}
            style={{
              width: scale(32),
              height: scaleHeight(32),
              tintColor: focused ? colors.primary : colors.lightBlack,
            }}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const BottomTab = createBottomTabNavigator();
function MainBottomTab() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,
        showLabel: false,
        tabBarStyle: {
          height: scaleHeight(90),
          position: 'absolute',
          bottom: scaleHeight(0),
          right: scaleHeight(0),
          left: scaleHeight(0),
          backgroundColor: 'transparent',
          shadowColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <BottomTab.Screen
        name={SCREEN_NAME.SEARCH_SCREEN}
        component={SearchContainer}
        options={{
          tabBarShowLabel: false,
          tabBarButton: props => <TabButton icon={icons.TAB1} {...props} />,
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.RECIPE_FEED_SCREEN}
        component={RecipeFeedContainer}
        options={{
          tabBarShowLabel: false,
          tabBarButton: props => <TabButton icon={icons.TAB2} {...props} />,
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.USER_PROFILE_SCREEN}
        component={UserProfileContainer}
        options={{
          tabBarShowLabel: false,
          tabBarButton: props => <TabButton icon={icons.TAB3} {...props} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default MainBottomTab;
