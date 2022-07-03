import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';
import {NavigationServices, scale} from '../../utils';
import styles from './Header.styles';

const Header = ({titleBack, rightHeader, colorStyle}) => {
  // console.log('Header re-render');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftContainer}
        onPress={() => NavigationServices.goBack()}>
        <Ionicons
          name={'chevron-back'}
          size={scale(16)}
          color={!!colorStyle ? colorStyle.color : colors.black}
        />
        <Text style={[styles.textHeader, colorStyle]}>
          {titleBack ? titleBack : 'Back'}
        </Text>
      </TouchableOpacity>
      {!!rightHeader && rightHeader}
    </View>
  );
};

export default React.memo(Header);
