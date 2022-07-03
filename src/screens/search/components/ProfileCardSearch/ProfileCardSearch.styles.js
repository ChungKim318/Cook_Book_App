import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    height: scaleHeight(235),
    width: scale(185),
    paddingRight: scale(15),
  },
  card: {
    flex: 1,
  },
  headerContainer: {
    flex: 46,
  },
  footerContainer: {
    flex: 54,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  userNameText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
    textAlign: 'center',
    marginTop: scaleHeight(40),
  },
  infoUserContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: scaleHeight(10),
  },
  numberText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.black,
  },
  numberTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeFollowerText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.TINY,
    color: colors.blackRGB,
  },
  imageUserContainer: {
    width: scale(90),
    height: scale(90),
    borderRadius: scale(45),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginTop: scaleHeight(50),
  },
  imageUser: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(40),
  },
});

export default styles;
