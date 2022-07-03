import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const styles = activeCategory =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    trendingRecipesContainer: {
      flex: 1,
    },
    whatCanContainer: {
      flex: 1,
    },
    trendingTitleContainer: {
      flex: 23,
      justifyContent: 'center',
      paddingLeft: scale(25),
    },
    trendingListContainer: {
      flex: 77,
    },
    trendingTitleText: {
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.black,
    },
    headerListContainer: {
      width: scale(25),
    },
    line: {
      height: scaleHeight(2),
      backgroundColor: colors.lightGrey2,
      marginHorizontal: scale(25),
    },
    whatCanTitleContainer: {
      flex: 14,
      justifyContent: 'center',
      paddingHorizontal: scale(25),
    },
    categoriesContainer: {
      flex: 18,
      justifyContent: 'center',
    },
    whatCanListContainer: {
      flex: 68,
    },
    whatCanText: {
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.black,
    },
    itemCategory: {
      alignSelf: 'center',
      marginRight: scale(30),
    },
    categoryText: {
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.X_LARGE,
      color: !!activeCategory ? colors.black : colors.lightGrey2,
    },
  });

export default styles;
