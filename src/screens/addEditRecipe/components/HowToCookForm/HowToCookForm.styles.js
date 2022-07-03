import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const styles = StyleSheet.create({
  headerContainer: {
    height: scaleHeight(55),
    padding: scale(15),
    marginTop: scaleHeight(20),
  },
  cookStepContainer: {
    flexDirection: 'row',
    marginBottom: scaleHeight(20),
    paddingHorizontal: scale(15),
  },
  cookStep: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: colors.primary,
    marginRight: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cookStepText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: colors.primary,
  },
  ingredientText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.black,
  },
});

export default styles;
