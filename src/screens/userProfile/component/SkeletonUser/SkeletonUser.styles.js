import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../../../utils';

const styles = index =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    card: {
      width: scale(185),
      height: scaleHeight(235),
      backgroundColor: 'red',
      marginLeft: index % 2 == 0 ? 0 : scale(15),
      marginBottom: scaleHeight(15),
      borderRadius: scale(8),
      marginTop: index == 0 || index == 1 ? scaleHeight(25) : 0,
    },
  });
export default styles;
