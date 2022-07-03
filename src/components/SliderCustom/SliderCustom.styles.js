import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'green',
    justifyContent: 'space-around',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1,
  },
  titleText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.black,
  },
  valueText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.lightGrey2,
  },
  sliderStyle: {
    backgroundColor: colors.primary,
  },
  trackSlider: {
    height: 3,
  },
});

export default styles;
