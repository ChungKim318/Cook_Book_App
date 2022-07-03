import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 5,
    justifyContent: 'center',
  },
  pickerCookBookContainer: {
    flex: 16,
    justifyContent: 'center',
  },
  pickerCookBook: {
    height: scaleHeight(50),
    borderRadius: scale(8),
    backgroundColor: colors.white,
    shadowColor: colors.black,
    elevation: 10,
  },
  listRecipes: {
    flex: 79,
  },
  listRecipesEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.XX_LARGE,
    color: colors.black,
  },
});

export default styles;
