import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {scale} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: scale(25),
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  rightHeader: {
    flexDirection: 'row',
  },

  logoHeaderRight: {
    width: scale(24),
    height: scale(24),
    tintColor: colors.lightBlack,
    marginRight: scale(25),
  },
  alignRecipe: {
    width: scale(30),
  },
});

export default styles;
