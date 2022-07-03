import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const styles = StyleSheet.create({
  titleText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.XX_LARGE,
    color: colors.black,
  },
  headerContainer: {
    flex: 2,
  },
  rightHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.primary,
    marginLeft: scale(11),
  },
  userInfoContainer: {
    flex: 1.33,
  },
  tabContainer: {
    flex: 6.67,
    marginTop: scaleHeight(20),
  },
  buttonFollowContainer: {
    height: scaleHeight(50),
    marginTop: scaleHeight(15),
  },
});

export default styles;
