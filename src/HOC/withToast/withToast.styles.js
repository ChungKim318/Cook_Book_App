import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {windowWidth} from '../../constants/sizeScreen';
import {scale, scaleHeight} from '../../utils';

const styles = type =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      height: scaleHeight(100),
      width: windowWidth,
      alignItems: 'center',
      top: -100,
      zIndex: 100,
    },
    toastView: {
      height: '100%',
      width: '90%',
      backgroundColor: colors.white,
      flexDirection: 'row',
    },
    statusView: {
      height: '100%',
      width: scale(8),
      backgroundColor: type == 'success' ? colors.primary : colors.red,
    },
    messageText: {
      padding: scale(15),
      textAlign: 'center',
      fontSize: FONT_SIZE.MEDIUM,
      alignSelf: 'center',
      fontFamily: FONT_FAMILY.REGULAR,
      color: colors.primary,
    },
  });

export default styles;
