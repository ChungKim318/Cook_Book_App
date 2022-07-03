import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const styles = StyleSheet.create({
  rightHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 9,
  },
  iconLogout: {
    width: scale(20),
    height: scale(20),
    tintColor: colors.lightBlack,
  },
  textLogout: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.primary,
  },
  titleText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.XX_LARGE,
    color: colors.black,
  },
  pushNotificationText: {
    marginTop: scaleHeight(30),
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.greyBold,
  },
  line: {
    height: scaleHeight(1),
    backgroundColor: colors.lightGrey,
    marginTop: scaleHeight(30),
  },
  infoPrivacyContainer: {
    height: scaleHeight(86),
    marginTop: scaleHeight(15),
    borderRadius: scale(8),
    padding: scale(10),
    backgroundColor: colors.lightGreyRBG,
  },
  infoPrivacyContainerText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: colors.greyBold,
  },
  whyThisMaster: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: colors.primary,
  },
  whyThisMasterContainer: {
    justifyContent: 'center',
  },
  marginTop20: {
    marginTop: scaleHeight(20),
  },
  marginTop25: {
    marginTop: scaleHeight(25),
  },
  changePasswordContainer: {
    flexDirection: 'row',
    marginTop: scaleHeight(30),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  changePasswordText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
  },
  iconRight: {
    width: scale(14),
    height: scaleHeight(6),
    tintColor: colors.black,
  },
});

export default styles;
