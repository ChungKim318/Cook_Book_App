import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './SkeletonUser.styles';

const SkeletonUser = () => {
  // console.log('SkeletonUser re-render');
  return (
    <SkeletonPlaceholder>
      <View style={styles().container}>
        <View style={styles(0).card} />
        <View style={styles(1).card} />
      </View>
      <View style={styles().container}>
        <View style={styles(2).card} />
        <View style={styles(3).card} />
      </View>
    </SkeletonPlaceholder>
  );
};

export default SkeletonUser;
