import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {scale, scaleHeight} from '../../utils';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 44,
    backgroundColor: colors.black,
    opacity: 0.8,
    paddingHorizontal: scale(25),
  },
  imagesContainer: {
    flex: 18,
    paddingHorizontal: scale(25),
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 38,
    paddingHorizontal: scale(25),
  },
  header: {
    flex: 25,
  },
  nameRecipe: {
    flex: 75,
    justifyContent: 'flex-end',
  },
  nameRecipeText: {
    marginBottom: scale(25),
    marginHorizontal: scale(25),
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.XX_LARGE,
    color: colors.white,
  },
  buttonCook: {
    borderColor: colors.white,
    backgroundColor: colors.blackRGB,
    width: scale(101),
  },
  buttonCookText: {
    color: colors.white,
  },
  colorsLeftHeader: {
    color: colors.white,
  },
  images: {
    width: scale(103),
    height: scaleHeight(94),
    marginRight: scale(8),
  },
  imagesBlur: {
    flex: 1,
    backgroundColor: colors.white,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagesBlurText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.X_LARGE,
    color: colors.black,
  },
});

export default styles;
