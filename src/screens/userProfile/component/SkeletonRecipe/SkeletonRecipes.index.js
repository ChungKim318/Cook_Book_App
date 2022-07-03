import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './SkeletonRecipes.styles';

const SkeletonRecipes = () => {
  //console.log('SkeletonRecipes re-render');
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
      <View style={styles().container}>
        <View style={styles(2).card} />
        <View style={styles(3).card} />
      </View>
    </SkeletonPlaceholder>
  );
};

export default SkeletonRecipes;
