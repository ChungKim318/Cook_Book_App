import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const styles = isActiveRBSheet =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: scale(25),
      backgroundColor: isActiveRBSheet ? colors.blackRGB : colors.white,
      opacity: isActiveRBSheet ? 0.5 : 1,
    },
    headerContainer: {
      height: scaleHeight(81),
    },
    heading1Container: {
      height: scaleHeight(32),
    },
    recipeNameContainer: {
      marginTop: scaleHeight(30),
      height: scaleHeight(65),
      flexDirection: 'row',
    },
    imageRecipeContainer: {
      flex: 19,
      borderStyle: 'dashed',
      borderWidth: 2,
      borderColor: colors.grey,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputNameRecipeContainer: {
      flex: 71,
      marginLeft: scale(15),
      borderBottomWidth: 1,
      justifyContent: 'space-between',
      borderBottomColor: colors.grey,
    },
    normalText: {
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: FONT_SIZE.NORMAL,
      color: colors.grey,
    },
    saveRecipeContainer: {
      height: scaleHeight(82),
      marginTop: scaleHeight(30),
    },
    pickerContainer: {
      height: scaleHeight(50),
      marginTop: scaleHeight(10),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    picker: {
      width: scale(190),
      height: scaleHeight(50),
      borderRadius: scale(8),
      shadowColor: colors.black,
      elevation: 5,
    },
    styleButtonSave: {
      width: scale(120),
      height: scaleHeight(50),
      borderWidth: 2,
    },
    buttonPostToFeed: {
      paddingTop: scaleHeight(30),
      paddingBottom: scaleHeight(35),
      alignItems: 'center',
    },
    imageUser: {
      width: '100%',
      height: '100%',
    },
  });

export default styles;
