import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const styles = index =>
  StyleSheet.create({
    container: {
      width: scale(155),
      height: scaleHeight(132),
      marginLeft: index % 2 == 0 ? 0 : scale(15),
      marginBottom: scaleHeight(15),
      borderRadius: scale(8),
      marginTop: index == 0 || index == 1 ? scaleHeight(25) : 0,
    },
    imageContainer: {
      flex: 0.76,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    nameRecipe: {
      flex: 0.25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
      borderBottomLeftRadius: scale(8),
      borderBottomRightRadius: scale(8),
    },
    nameText: {
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.black,
    },
    touchContainer: {
      flex: 1,
    },
  });

export default styles;
