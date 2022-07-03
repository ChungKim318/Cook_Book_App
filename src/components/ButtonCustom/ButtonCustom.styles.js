import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const styles = disable =>
  StyleSheet.create({
    container: {
      height: scaleHeight(50),
      width: scale(325),
      backgroundColor: colors.primary,
      borderRadius: scale(8),
      justifyContent: 'center',
      alignItems: 'center',
      opacity: disable ? 0.2 : 1,
      flexDirection: 'row',
    },
    buttonText: {
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.white,
    },
  });

export default styles;
