import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const styles = isActive =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      zIndex: 100,
    },
    modalView: {
      height: scaleHeight(254),
      width: scale(286),
      backgroundColor: colors.white,
      borderRadius: scale(8),
      marginTop: scaleHeight(300),
      padding: scale(20),
    },
    headerContainer: {
      flex: 0.24,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    bodyContainer: {
      flex: 0.52,
    },
    footerContainer: {
      flex: 0.24,

      flexDirection: 'row',
    },
    titleText: {
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.X_LARGE,
      color: colors.black,
    },
    cardTypeCookBookContainer: {
      width: scale(266),
      height: scale(35),
      backgroundColor: isActive ? colors.primaryRGB : 'transparent',
      borderRadius: scale(8),
      justifyContent: 'center',
    },
    typeCookBookText: {
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: FONT_SIZE.NORMAL,
      color: colors.black,
    },
    itemFooterContainer: {
      justifyContent: 'center',
    },
    textFooter: {
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.primary,
    },
  });

export default styles;
