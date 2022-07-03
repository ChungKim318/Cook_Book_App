import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const styles = StyleSheet.create({
  listEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEmpty: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.X_LARGE,
    color: colors.black,
  },
  lottie: {
    width: scale(50),
    height: scale(50),
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    paddingTop: scaleHeight(15),
  },
});

export default styles;
