import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1.3,
  },
  titleEditProfileContainer: {
    flex: 5,
  },
  titleEditProfileText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.XX_LARGE,
    color: colors.black,
  },
  pictureContainer: {
    flex: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureUser: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
  },
  pictureText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.primary,
    marginTop: scaleHeight(10),
  },
  inputContainer: {
    flex: 10,
    marginBottom: scaleHeight(23),
  },
  privateText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
    marginTop: scaleHeight(20),
    marginBottom: scaleHeight(10),
  },
});

export default styles;
