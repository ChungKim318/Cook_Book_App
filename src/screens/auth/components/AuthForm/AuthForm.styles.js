import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const styles = type =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    headerContainer: {
      flex: 3.5,
      paddingHorizontal: scale(25),
    },
    bodyContainer: {
      flex: 6.5,
      paddingHorizontal: scale(25),
    },
    logo: {
      marginTop: scaleHeight(61),
    },
    title: {
      marginTop: scaleHeight(49),
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.XX_LARGE,
      color: colors.black,
    },
    title2Container: {
      flex: 16.9,
    },
    title2Text: {
      fontFamily: FONT_FAMILY.MEDIUM,
      color: colors.greyBold,
      fontSize: FONT_SIZE.NORMAL,
      marginTop: scaleHeight(20),
    },
    inputContainer: {
      flex: 18,
    },
    buttonContainer: {
      flex: 15,
      justifyContent: 'center',
    },
    lastContainer: {
      flex: type == 1 ? 34.7 : 20,
      alignItems: 'center',
    },
    lastText1: {
      marginTop: scaleHeight(15),
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: FONT_SIZE.NORMAL,
      color: colors.lightGrey2,
    },
    lastText2: {
      marginTop: scaleHeight(3),
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.primary,
    },
  });

export default styles;
