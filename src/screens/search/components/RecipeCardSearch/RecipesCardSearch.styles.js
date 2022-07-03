import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale} from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    width: scale(135),
    height: scale(195),
    paddingRight: scale(15),
  },
  card: {
    flex: 1,
  },
  imageRecipeContainer: {
    flex: 6.2,
  },
  imageRecipe: {
    width: '100%',
    height: '100%',
  },
  nameRecipeContainer: {
    flex: 3.8,
  },
  nameRecipeText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
  },
});

export default styles;
