import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../../../utils';
import colors from '../../../../constants/colors';

const styles = isActive =>
  StyleSheet.create({
    button: {
      width: scale(104),
      marginTop: scaleHeight(15),
      marginRight: scaleHeight(15),
      borderRadius: scale(15),
      backgroundColor: isActive ? colors.primary : colors.white,
    },

    buttonText: {
      color: !isActive ? colors.primary : colors.white,
    },
  });

export default styles;
