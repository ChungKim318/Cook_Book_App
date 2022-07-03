import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../../../utils';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: scaleHeight(165),
    marginTop: scaleHeight(20),
  },
  headerContainer: {
    height: scaleHeight(55),
    padding: scale(15),
  },
  imageUser: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    marginHorizontal: scale(5),
  },
  imageUserContainer: {
    paddingHorizontal: scale(15),
  },
  imagePosition: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    backgroundColor: colors.white,
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lengthIngredientText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
  },
  ingredientText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: colors.black,
    marginTop: scaleHeight(20),
  },
});

export default styles;
