import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {SCREEN_NAME} from '../../../../constants/screenName';
import {NavigationServices} from '../../../../utils';
import formatText from '../../../../utils/formatText';
import styles from './RecipesCardSearch.styles';

const RecipeCardSearch = ({item, index, ...props}) => {
  const {image, nameRecipe} = item;
  //  console.log('RecipeCardSearch re-render');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          NavigationServices.navigate(SCREEN_NAME.RECIPE_DETAIL_SCREEN, {
            id: item.id,
          })
        }>
        <View style={styles.imageRecipeContainer}>
          <Image style={styles.imageRecipe} source={image} resizeMode="cover" />
        </View>
        <View style={styles.nameRecipeContainer}>
          <Text style={styles.nameRecipeText}>{formatText(nameRecipe)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(RecipeCardSearch);
