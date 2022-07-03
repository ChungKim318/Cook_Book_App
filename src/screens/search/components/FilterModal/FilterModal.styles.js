import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const styles = (recipesActive, profilesActive, tagsActive) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    modalContainer: {
      height: scaleHeight(475),
      marginTop: scaleHeight(20),
      backgroundColor: colors.white,
    },
    headerContainer: {
      flex: 9,
    },
    bodyContainer: {
      flex: 72,

      paddingHorizontal: scale(35),
    },
    footerContainer: {
      flex: 19,

      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonApply: {
      width: scale(255),
    },
    searchFilterContainer: {
      flex: 66,
    },
    searchForContainer: {
      flex: 44,
    },
    titleText: {
      fontFamily: FONT_FAMILY.BOLD,
      fontSize: FONT_SIZE.MEDIUM,
      color: colors.black,
      marginTop: scaleHeight(30),
    },
    filterContainer: {
      flex: 1,
    },
    searchForElementContainer: {
      flex: 1,
      flexDirection: 'row',
    },
  });

export default styles;
