import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../../../utils';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';

const style = StyleSheet.create({
  headerContainer: {
    flex: 13,
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
  bodyContainer: {
    flex: 67,
    paddingHorizontal: scale(25),
    justifyContent: 'center',
  },

  saveButtonContainer: {
    flex: 20,
    alignItems: 'center',
  },
  itemRenderContainer: {
    height: scaleHeight(65),
    marginBottom: scaleHeight(20),
  },
  input: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 2,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
  },
  titleText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.lightGrey2,
  },
});

export default style;
