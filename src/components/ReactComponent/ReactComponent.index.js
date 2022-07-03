import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './ReactComponent.styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {scale} from '../../utils';
import colors from '../../constants/colors';

const ReactComponent = ({react1, react2, disable1, disable2}) => {
  // console.log('ReactComponent re-render');
  return (
    <View style={styles.reactContainer}>
      <TouchableOpacity disabled={disable1}>
        <Text style={styles.reactText}>{react1}</Text>
      </TouchableOpacity>
      <Entypo name="dot-single" size={scale(14)} color={colors.greyBold} />
      <TouchableOpacity disabled={disable2}>
        <Text style={styles.reactText}>{react2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ReactComponent);
