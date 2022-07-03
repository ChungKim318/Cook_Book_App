import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {Context as ContextRecipes} from '../../../../contexts/recipes/recipes.context';
import {scaleHeight} from '../../../../utils';
import IngredientCard from '../IngredientCard/IngredientCard.index';
import styles from './IngredientsTab.styles';

const IngredientsTab = ({idRecipe, ...props}) => {
  const {state} = useContext(ContextRecipes);
  const recipe = state.recipes.filter(recipe => recipe.id === idRecipe)[0];
  const keyExtractor = (item, index) =>
    item + index.toString() + Date.now().toString();
  const renderItem = ({item, index}) => {
    return (
      <IngredientCard item={item} image={recipe.userImage} index={index} />
    );
  };

  // console.log('IngredientsTab re-render');

  const ListHeaderComponent = () => <View style={styles.header} />;
  return (
    <FlatList
      data={recipe.ingredients}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      getItemLayout={(data, index) => ({
        length: scaleHeight(70),
        offset: scaleHeight(70) * index,
        index,
      })}
      scrollEventThrottle={16}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default React.memo(IngredientsTab);
