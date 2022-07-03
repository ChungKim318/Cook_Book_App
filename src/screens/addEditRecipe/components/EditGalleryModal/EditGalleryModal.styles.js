import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../../../utils';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';

const style = (activeImage, activeRadio) =>
  StyleSheet.create({
    headerContainer: {
      flex: 13.2,
      justifyContent: 'center',
      paddingHorizontal: scale(20),
    },
    titleContainer: {
      flex: 9.2,
      flexDirection: 'row',
      paddingHorizontal: scale(25),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    imageContainer: {
      flex: 20,
    },
    setAndRemoveContainer: {
      flex: 24,
      justifyContent: 'space-around',
      paddingHorizontal: scale(25),
    },
    uploadAndOpenContainer: {
      flex: 14,
      paddingHorizontal: scale(25),
    },
    saveButtonContainer: {
      flex: 20,
      alignItems: 'center',
    },
    titleImage: {
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.black,
    },
    titleViewAll: {
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.primary,
    },
    imageView: {
      width: scale(140),
      height: scaleHeight(100),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: activeImage ? colors.primary : colors.white,
    },
    image: {
      width: scale(130),
      height: scaleHeight(90),
    },
    iconRemove: {
      width: scale(25),
      height: scale(25),
    },
    setAndRemoveElement: {
      flexDirection: 'row',
    },
    setAndRemoveText: {
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.black,
      marginLeft: scale(15),
    },
    upload: {
      height: scaleHeight(50),
      borderColor: colors.grey,
      borderStyle: 'dashed',
      borderWidth: 2,
      flexDirection: 'row',
      alignItems: 'center',
    },
    uploadText: {
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.blackRGB,
      marginLeft: scale(15),
    },
  });

export default style;
