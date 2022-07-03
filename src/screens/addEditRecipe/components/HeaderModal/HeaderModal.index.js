import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {icons} from '../../../../constants/icons';
import styles from './HeaderModal.styles';

const HeaderModal = ({title, onClose, ...props}) => {
  // console.log('HeaderModal re-render');
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity onPress={() => onClose()}>
        <Image
          source={icons.CLOSE}
          style={styles.iconClose}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(HeaderModal);
