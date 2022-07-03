import {StyleSheet} from 'react-native';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';
import colors from '../../../../constants/colors';

const styles = isActive =>
  StyleSheet.create({
    container: {
      height: scaleHeight(65),
      marginBottom: scaleHeight(30),
    },
    formActiveFalse: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    formActiveTrue: {
      flex: 1,
      justifyContent: 'space-between',
    },
    ingredientText: {
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: FONT_SIZE.NORMAL,
      color: colors.black,
      width: scale(250),
    },
    iconEdit: {
      height: scale(20),
      width: scale(20),
      tintColor: isActive ? colors.primary : colors.black,
    },
    iconRemove: {
      height: scale(28),
      width: scale(28),
      tintColor: colors.red,
    },
    headerFormContainer: {
      flex: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    footerFormContainer: {
      flex: 6,
    },
    iconsFormActiveContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: scale(70),
      alignItems: 'center',
    },
    input: {
      borderBottomWidth: 2,
      borderBottomColor: colors.primary,
      textAlignVertical: 'top',
    },
    indexContainer: {
      width: scale(20),
      height: scale(20),
      borderRadius: scale(10),
      borderColor: colors.primary,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    indexText: {
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: FONT_SIZE.SMALL,
      color: colors.primary,
    },
  });

export default styles;
