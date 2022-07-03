import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleLeftText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.XX_LARGE,
    color: colors.black,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleRightText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.primary,
    marginLeft: scale(5),
  },
});

export default styles;
