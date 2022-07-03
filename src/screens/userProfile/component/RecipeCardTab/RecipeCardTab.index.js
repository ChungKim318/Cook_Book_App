import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './RecipeCardTab.styles';
import Animated, {useAnimatedStyle, interpolate} from 'react-native-reanimated';
import {NavigationServices, scaleHeight} from '../../../../utils';
import {SCREEN_NAME} from '../../../../constants/screenName';

const RecipeCardTab = ({item, index, translateY}) => {
  const {image, nameRecipe} = item;
  const cardSize = scaleHeight(100);

  const indexNew = parseInt(parseInt(index) / 2);

  // console.log('RecipeCardTab re-render');

  const animationStyle = useAnimatedStyle(() => {
    const inputRange = [
      (indexNew - 3) * cardSize,
      (indexNew - 2) * cardSize,
      (indexNew - 1) * cardSize,
      indexNew * cardSize,
      (indexNew + 1) * cardSize,
      (indexNew + 2) * cardSize,
      // (indexNew + 3) * cardSize,
    ];
    const scale = interpolate(
      translateY.value,
      inputRange,
      [0.5, 1, 1, 1, 1, 0.5],
    );
    const translateX = interpolate(
      translateY.value,
      inputRange,
      [-100, 0, 0, 0, 0, -100],
    );
    const rotateY = interpolate(
      translateY.value,
      inputRange,
      [-90, 0, 0, 0, 0, -90],
    );
    return {
      transform: [{scale}, {translateX}, {rotateY: `${rotateY}deg`}],
    };
  });

  return (
    <Animated.View style={[styles(index).container, animationStyle]}>
      <TouchableOpacity
        style={styles().touchContainer}
        onPress={() =>
          NavigationServices.navigate(SCREEN_NAME.MY_RECIPES_SCREEN)
        }>
        <View style={styles().imageContainer}>
          <Image source={image} style={styles().image} resizeMode="cover" />
        </View>
        <View style={styles().nameRecipe}>
          <Text style={styles().nameText}>{nameRecipe.split(' ')[0]}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default React.memo(RecipeCardTab);
