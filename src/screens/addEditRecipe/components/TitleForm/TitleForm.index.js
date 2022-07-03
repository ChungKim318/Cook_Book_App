import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './TitleForm.styles';
import {icons} from '../../../../constants/icons';

const TitleForm = ({title, onPressEdit}) => {
  //  console.log('TitleForm re-render');
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{title}</Text>
      <TouchableOpacity onPress={() => onPressEdit()}>
        <Image source={icons.EDIT} style={styles.icon} resizeMode="cover" />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(TitleForm);
