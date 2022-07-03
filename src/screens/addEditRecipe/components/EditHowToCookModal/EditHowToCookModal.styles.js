import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../../../utils';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';

const style = activeEdit =>
  StyleSheet.create({
    headerContainer: {
      flex: 10,
      justifyContent: 'center',
      paddingHorizontal: scale(20),
    },
    imageContainer: {
      flex: 33,
      paddingHorizontal: scale(25),
    },
    bodyContainer: {
      flex: 36,
      paddingHorizontal: scale(25),
    },
    addDirectionContainer: {
      flex: 10,
      paddingHorizontal: scale(25),
    },
    saveButtonContainer: {
      flex: 14,
      alignItems: 'center',
    },

    iconRemove: {
      width: scale(25),
      height: scale(25),
    },

    addDirection: {
      height: scaleHeight(50),
      borderColor: colors.grey,
      borderStyle: 'dashed',
      borderWidth: 2,
      flexDirection: 'row',
      alignItems: 'center',
    },
    addDirectionText: {
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.blackRGB,
      marginLeft: scale(15),
    },
    imageBackground: {
      flex: 67,
      backgroundColor: colors.black,
      opacity: 0.7,
      flexDirection: 'row',
      padding: scale(15),
      justifyContent: 'flex-end',
    },
    infoImageContainer: {
      flex: 33,

      flexDirection: 'row',
      marginTop: scaleHeight(10),
    },
    iconUpload: {
      width: scale(24),
      height: scale(24),
      tintColor: colors.black,
    },
    nameVideoText: {
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.black,
      marginLeft: scale(20),
    },
    editAnnotationsContainer: {
      flexDirection: 'row',
      height: scaleHeight(30),
      width: scale(135),
      borderColor: colors.white,
      borderWidth: 2,
      borderRadius: scale(8),
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconEdit: {
      width: scale(16),
      height: scale(16),
      tintColor: colors.white,
    },
    editAnnotationsText: {
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.SMALL,
      color: colors.white,
      marginLeft: scale(10),
    },
    deleteContainer: {
      width: scale(30),
      height: scaleHeight(30),
      borderColor: colors.white,
      borderWidth: 2,
      borderRadius: scale(8),
      marginLeft: scale(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default style;
