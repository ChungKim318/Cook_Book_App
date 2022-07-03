import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../../../utils';
import colors from '../../../../constants/colors';
import {FONT_SIZE, FONT_FAMILY} from '../../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: scaleHeight(240),
    borderRadius: scale(8),
    paddingBottom: scaleHeight(20),
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: scale(16),
  },
  cookContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  buttonText: {
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.primary,
  },
  nameText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.LARGE,
    color: colors.black,
  },
});

export default styles;
