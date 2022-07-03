import React from 'react';
import {View, Text} from 'react-native';

const HowToCookTab = () => {
  // console.log('HowToCookTab re-render');
  return (
    <View>
      <Text>HowToCookTab</Text>
    </View>
  );
};

export default React.memo(HowToCookTab);
