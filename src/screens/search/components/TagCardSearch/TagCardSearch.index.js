import React from 'react';
import {View, Text} from 'react-native';
import {ReactComponent} from '../../../../components';
import styles from './TagCardSearch.styles';

const TagCardSearch = ({item, index}) => {
  // console.log('TagCardSearch re-render');
  return (
    <View style={styles.container}>
      <Text style={styles.tagText}>#sweets</Text>
      <ReactComponent react1={'45k followers'} react2={'7345 Recipes'} />
    </View>
  );
};

export default React.memo(TagCardSearch);
