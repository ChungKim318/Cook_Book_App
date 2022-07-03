import React from 'react';
import {Image} from 'react-native';
import {icons} from '../../constants/icons';
import styles from './LogoMain.styles';

const LogoMain = () => {
  // console.log('LogoMain re-render');
  return (
    <Image source={icons.LOGO} style={styles.container} resizeMode="cover" />
  );
};

export default React.memo(LogoMain);
