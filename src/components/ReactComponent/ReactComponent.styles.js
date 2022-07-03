import {StyleSheet} from 'react-native';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  reactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.greyBold,
  },
});

export default styles;
