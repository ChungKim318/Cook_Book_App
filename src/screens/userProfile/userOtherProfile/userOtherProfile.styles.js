import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {scale, scaleHeight} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(25),
    backgroundColor: colors.white,
  },
  headerContainer: {
    flex: 1,

    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 8,
  },
  footerContainer: {
    flex: 1,
  },
  userInfoContainer: {
    flex: 1.33,
  },
  tabContainer: {
    flex: 6.67,
    marginTop: scaleHeight(25),
  },

  buttonFollowContainer: {
    height: scaleHeight(50),
    marginTop: scaleHeight(15),
  },
});

export default styles;
