import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    flex: 1.3,
    paddingHorizontal: scale(25),
    justifyContent: 'flex-end',
  },
  bodyContainer: {
    flex: 7.5,
  },
  footerContainer: {
    flex: 1.2,
  },
  recipesContainer: {
    height: scaleHeight(280),
  },
  profilesContainer: {
    height: scaleHeight(345),
  },
  tagsContainer: {
    height: scaleHeight(72),
  },
  recipesHeaderContainer: {
    flex: 2,

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(25),
    alignItems: 'center',
  },
  recipesListContainer: {
    flex: 8,
  },
  titleLeftText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
  },
  titleRightText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.primary,
  },
  line: {
    height: scaleHeight(2),
    backgroundColor: colors.lightGrey2,
    marginHorizontal: scale(25),
  },
  scrollViewContainer: {
    flex: 1,
  },
  headerListContainer: {
    width: scale(25),
  },
  profilesHeaderContainer: {
    flex: 18,

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(25),
    alignItems: 'center',
  },
  profilesListContainer: {
    flex: 82,
  },
  headerTagContainer: {
    flex: 2,
  },
  footerTagContainer: {
    paddingHorizontal: scale(25),
  },
  emptyListText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
  },
});

export default styles;
