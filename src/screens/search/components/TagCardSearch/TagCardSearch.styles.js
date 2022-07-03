import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scaleHeight} from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    height: scaleHeight(55),
    justifyContent: 'space-between',
    marginBottom: scaleHeight(20),
  },
  tagText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
  },
});

export default styles;
