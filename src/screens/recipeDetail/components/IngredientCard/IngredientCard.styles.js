import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    height: scaleHeight(70),
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: scale(20),
  },
  image: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(25),
  },
  ingredientText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.black,
    marginLeft: scale(15),
  },
});

export default styles;
