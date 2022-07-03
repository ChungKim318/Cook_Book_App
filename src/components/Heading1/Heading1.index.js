import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './Heading1.styles';

const Heading1 = ({titleLeft, iconRight, titleRight, onPressRight}) => {
  // console.log('Heading1 re-render');
  return (
    <View style={styles.container}>
      <Text style={styles.titleLeftText}>{titleLeft}</Text>

      <TouchableOpacity
        style={styles.right}
        onPress={() => !!onPressRight && onPressRight()}>
        {!!iconRight && iconRight}
        {!!titleRight && (
          <Text style={styles.titleRightText}>{titleRight}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Heading1);
