import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    height: scaleHeight(298),
    marginTop: scaleHeight(20),
  },
  headerContainer: {
    height: scaleHeight(55),
    padding: scale(15),
  },
  imageBigContainer: {
    height: scale(125),
  },
  imageBig: {
    height: '100%',
    width: '100%',
  },
  imageSmallContainer: {
    height: scale(94),
    width: scale(100),
    marginTop: scale(7),
  },
  imageSmall: {
    height: '100%',
    width: '100%',
  },
  imageSmallView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  marginImage: {
    marginHorizontal: scale(7),
  },
  imagePosition: {
    height: scale(94),
    width: scale(100),
    marginTop: scale(7),
    position: 'absolute',
    opacity: 0.6,
    right: scale(6),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lengthGalleryText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
  },
});

export default styles;
