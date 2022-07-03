import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const ButtonSmallCustom = ({title, onPress}) => {
  // console.log('ButtonSmallCustom re-render');
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ButtonSmallCustom);
