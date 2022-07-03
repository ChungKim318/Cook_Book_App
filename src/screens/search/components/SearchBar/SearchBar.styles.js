import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../../../utils';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';

const styles = isVisibleFilterModal =>
  StyleSheet.create({
    searchBarContainer: {
      height: scaleHeight(50),
      backgroundColor: colors.white,
      borderRadius: scale(8),
      padding: scale(15),
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: colors.black,
      elevation: 8,
    },
    searchIcon: {
      flex: 7,
      tintColor: colors.black,
    },
    inputSearch: {
      flex: 93,
      height: scaleHeight(50),
      fontFamily: FONT_FAMILY.REGULAR,
      fontSize: FONT_SIZE.MEDIUM,
    },
    filterIcon: {
      flex: 7,
      tintColor: isVisibleFilterModal ? colors.primary : colors.black,
      width: scale(24),
      height: scale(24),
    },
  });

export default styles;
