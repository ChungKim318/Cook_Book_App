import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: scaleHeight(1),
    borderBottomColor: colors.lightGrey,
  },
  imageContainer: {
    flex: 0.25,
  },
  infoContainer: {
    flex: 0.75,
    marginLeft: scale(10),
  },
  image: {
    width: scale(82),
    height: scale(82),
    borderRadius: scale(41),
  },
  userNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userNameText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
    width: scale(210),
  },
  normalText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.greyBold,
  },
  likeAndComment: {
    marginTop: scaleHeight(10),
  },
});

export default styles;
