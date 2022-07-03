import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './IngredientCard.styles';

const IngredientCard = ({item, image, index}) => {
  // console.log('IngredientCard re-render');
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.ingredientText}>{item}</Text>
    </View>
  );
};

export default React.memo(IngredientCard);
