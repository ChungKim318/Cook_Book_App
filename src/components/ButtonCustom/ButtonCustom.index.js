import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './ButtonCustom.styles';

const ButtonCustom = ({
  title,
  onPress,
  disable,
  icon,
  styleButton,
  styleText,
  ...props
}) => {
  // console.log('ButtonCustom re-render');
  return (
    <TouchableOpacity
      disabled={disable}
      style={[styles(disable).container, styleButton]}
      onPress={onPress}>
      {icon && icon}
      <Text style={[styles().buttonText, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ButtonCustom);
