import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {windowWidth} from '../../../../constants/sizeScreen';
import {scale, scaleHeight} from '../../../../utils';

const styles = StyleSheet.create({
  cardContainer: {
    width: scale(315),
    height: scaleHeight(556),
    paddingHorizontal: scale(10),
  },
  headerContainer: {
    flex: 11,
    flexDirection: 'row',
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(15),
  },
  bodyContainer: {
    flex: 60,
  },
  footerContainer: {
    flex: 29,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  headerFooterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bodyFooterContainer: {
    flex: 1.5,
  },
  footerFooterContainer: {
    flex: 1,

    flexDirection: 'row',
  },
  textNameRecipe: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.LARGE,
    color: colors.black,
  },
  textDetailRecipe: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.lightGrey2,
  },
  cardFirst: {
    width: (windowWidth - scale(315)) / 2,
  },
  likeAndCommentContainer: {
    flex: 0.65,
    flexDirection: 'row',

    alignItems: 'center',
  },
  likeAndCommentText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.greyBold,
  },
  buttonSave: {
    width: scale(73),
    height: scale(26),
    borderRadius: scale(4),
    borderWidth: scale(1),
    borderColor: colors.primary,
    backgroundColor: colors.white,
    justifyContent: 'space-around',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.35,
  },
  buttonText: {
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.primary,
  },
  imageUser: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(16),
  },
  userInfoContainer: {
    justifyContent: 'center',
    marginLeft: scale(10),
  },
  textUserName: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.black,
    fontSize: scale(12),
  },
  textCreateDay: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.darkGrey,
    fontSize: scale(12),
  },
});

export default styles;
