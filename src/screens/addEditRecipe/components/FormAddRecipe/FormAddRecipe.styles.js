import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    height: scaleHeight(122),
    marginTop: scaleHeight(20),
    backgroundColor: colors.white,
    shadowColor: colors.black,
    elevation: 6,
    borderRadius: scale(8),
    padding: scale(15),
  },
  headerCard: {
    flex: 46,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerCard: {
    flex: 54,
    borderColor: colors.grey,
    borderStyle: 'dashed',
    borderWidth: 2,
    paddingHorizontal: scale(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
  },
  icon: {
    width: scale(16),
    height: scale(16),
    tintColor: colors.lightBlack,
  },
  placeHolder: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.blackRGB,
    marginLeft: scale(15),
  },
});

export default styles;
