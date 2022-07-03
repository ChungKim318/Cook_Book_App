import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const styles = StyleSheet.create({
  headerContainer: {
    height: scaleHeight(55),
    padding: scale(15),
  },
  additionalContainer: {
    flexDirection: 'row',
    paddingHorizontal: scale(15),
    marginBottom: scaleHeight(20),
  },
  titleContainer: {
    flex: 1,
  },
  dataContainer: {
    flex: 1.5,
  },
  titleText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.lightGrey2,
  },
  dataText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.black,
  },
});

export default styles;
