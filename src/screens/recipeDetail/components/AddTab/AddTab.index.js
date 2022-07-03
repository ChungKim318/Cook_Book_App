import React from 'react';
import {View, Text} from 'react-native';

const AddTab = () => {
  // console.log('AddTab re-render');
  return (
    <View>
      <Text>AddTab</Text>
    </View>
  );
};

export default React.memo(AddTab);
