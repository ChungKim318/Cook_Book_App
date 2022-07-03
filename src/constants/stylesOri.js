import {StyleSheet} from 'react-native';
import {scale} from '../utils';
import colors from './colors';
import {FONT_FAMILY, FONT_SIZE} from './fonts';

const stylesOri = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(25),
    backgroundColor: colors.white,
  },
  headerContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 8,
  },
  footerContainer: {
    flex: 1,
  },
  buttonSmall: {
    width: scale(73),
    height: scale(26),
    borderRadius: scale(4),
    borderWidth: scale(1),
    borderColor: colors.primary,
    backgroundColor: colors.white,
    justifyContent: 'space-around',
  },
  buttonSmallText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.primary,
  },
  TextTab: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
  },
  tabBarUnderlineStyle: {
    backgroundColor: colors.primary,
  },
  tabStyle: {
    alignItems: 'center',
  },
});

export default stylesOri;
