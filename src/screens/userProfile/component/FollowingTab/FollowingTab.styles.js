import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../../../utils';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  listFooterComponentStyle: {
    alignItems: 'center',
    marginVertical: scale(20),
  },
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
  cardUser: {
    marginBottom: scaleHeight(20),
  },
});

export default styles;
