import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../../../utils';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';

const style = activeEdit =>
  StyleSheet.create({
    headerContainer: {
      flex: 13.5,
      justifyContent: 'center',
      paddingHorizontal: scale(20),
    },

    bodyContainer: {
      flex: 51,

      paddingHorizontal: scale(25),
    },
    addIngredientContainer: {
      flex: 14.5,
      paddingHorizontal: scale(25),
    },
    saveButtonContainer: {
      flex: 21,
      alignItems: 'center',
    },

    iconRemove: {
      width: scale(25),
      height: scale(25),
    },

    addIngredient: {
      height: scaleHeight(50),
      borderColor: colors.grey,
      borderStyle: 'dashed',
      borderWidth: 2,
      flexDirection: 'row',
      alignItems: 'center',
    },
    addIngredientText: {
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.blackRGB,
      marginLeft: scale(15),
    },
  });

export default style;
