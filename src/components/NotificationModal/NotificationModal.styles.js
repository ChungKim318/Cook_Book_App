import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../utils';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';

const styles = type =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      height: scaleHeight(322),
      width: scale(315),
      backgroundColor: colors.white,
      borderRadius: scale(30),
    },
    titleView: {
      flex: 1,
      backgroundColor:
        (type == 'success' && colors.primary) ||
        (type == 'error' && colors.red) ||
        colors.grey,
      borderTopLeftRadius: scale(30),
      borderTopRightRadius: scale(30),
      justifyContent: 'center',
      paddingHorizontal: scale(20),
    },
    titleText: {
      fontSize: FONT_SIZE.XX_LARGE,
      fontFamily: FONT_FAMILY.BOLD,
      color: colors.black,
    },
    bodyView: {
      flex: 4,
      backgroundColor: 'transparent',
    },
    messageView: {
      flex: 2,
      paddingHorizontal: scale(20),
      justifyContent: 'center',
    },
    buttonView: {
      flex: 1,
      borderBottomLeftRadius: scale(30),
      borderBottomRightRadius: scale(30),
      flexDirection: 'row',
      marginHorizontal: scale(20),
    },
    cancelButtonView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: scaleHeight(10),
    },
    acceptButtonView: {
      flex: 1,
      backgroundColor: colors.primary,
      borderRadius: scale(30),
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: scaleHeight(10),
    },
    textCancel: {
      fontSize: FONT_SIZE.LARGE,
      fontFamily: FONT_FAMILY.REGULAR,
      color: colors.grey,
    },
    textAccept: {
      fontSize: FONT_SIZE.LARGE,
      fontFamily: FONT_FAMILY.BOLD,
      color: colors.white,
    },
    messageText: {
      fontSize: FONT_SIZE.LARGE,
      color: colors.black,
      fontFamily: FONT_FAMILY.REGULAR,
    },
  });

export default styles;
