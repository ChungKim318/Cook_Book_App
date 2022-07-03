import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const styles = StyleSheet.create({
  inputView: {
    height: scaleHeight(65),
    width: '100%',
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleInput: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.lightGrey2,
  },
  textInput: {
    width: '100%',
    height: scaleHeight(40),
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.black,
    fontSize: FONT_SIZE.MEDIUM,
    borderBottomWidth: scaleHeight(1),
    borderBottomColor: colors.grey,
  },
  errorText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.red,
  },
});

export default styles;
