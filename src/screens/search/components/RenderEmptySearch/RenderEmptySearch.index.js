import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './RenderEmptySearch.styles';
import {Context as ContextRecipes} from '../../../../contexts/recipes/recipes.context';
import RecipeCardSearch from '../RecipeCardSearch/RecipeCardSearch.index';
import {scale} from '../../../../utils';

const RenderEmptySearch = () => {
  const contextRecipes = useContext(ContextRecipes);
  const [recipesTrending, setRecipesTrending] = useState(
    contextRecipes?.state?.recipes,
  );
  const [recipesWhatCan, setRecipesWhatCan] = useState(
    contextRecipes?.state?.recipes,
  );
  const [recipesOri, setRecipesOri] = useState(contextRecipes?.state?.recipes);

  const [ingredients, setIngredients] = useState([]);
  const [nameCategoryActive, setNameCategoryActive] = useState('');

  useEffect(() => getIngredients(), []);

  // console.log('RenderEmptySearch re-render');

  //useEffect(() => upDateRecipeWhatCan, [nameCategoryActive]);

  const getIngredients = () => {
    let ingredientsArr = [];
    recipesOri.map(recipeCurrent => {
      recipeCurrent.ingredients.map(ingredients =>
        ingredientsArr.push(ingredients),
      );
    });
    ingredientsArr = Array.from(new Set(ingredientsArr));
    let newIngredientsArr = [];
    ingredientsArr.map(ingredients => {
      newIngredientsArr.push({name: ingredients, isActive: false});
    });

    setIngredients(newIngredientsArr);
  };

  const keyExtractorTrending = (item, index) =>
    item.id + index.toString() + Date.now().toString();
  const renderItemTrending = ({item, index}) => (
    <RecipeCardSearch item={item} index={index} />
  );
  const ListHeaderComponent = () => (
    <View style={styles().headerListContainer} />
  );
  const ListEmptyComponent = () => (
    <Text style={styles(true).categoryText}>Don't have recipes</Text>
  );

  const keyExtractorCategories = (item, index) =>
    item.name + index.toString() + Date.now().toString();
  const renderItemCategories = ({item, index}) => (
    <TouchableOpacity
      style={styles().itemCategory}
      onPress={() => onPressCategory(item.name)}>
      <Text style={styles(item.isActive).categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const onPressCategory = nameCategory => {
    let check = false;
    setIngredients(
      [...ingredients].map(ingredientsCurrent => {
        let ingredientTam = {
          ...ingredientsCurrent,
          isActive:
            ingredientsCurrent.name == nameCategory &&
            (ingredientsCurrent.isActive ? false : true),
        };
        !!ingredientTam.isActive && (check = true);
        return ingredientTam;
      }),
    );

    check ? upDateRecipeWhatCan(nameCategory) : upDateRecipeWhatCan();
  };

  const upDateRecipeWhatCan = nameCategoryActive => {
    if (!!nameCategoryActive) {
      let newArray = recipesOri.filter((recipe, key) => {
        let stringSum = `${recipe.nameRecipe}`;

        return (
          stringSum
            .toLocaleLowerCase()
            .indexOf(nameCategoryActive.toLocaleLowerCase()) != -1
        );
      });

      setRecipesWhatCan(newArray);
    } else {
      setRecipesWhatCan(recipesOri);
    }
  };

  return (
    <View style={styles().container}>
      <View style={styles().trendingRecipesContainer}>
        <View style={styles().trendingTitleContainer}>
          <Text style={styles().trendingTitleText}>Trending recipes</Text>
        </View>
        <View style={styles().trendingListContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={recipesTrending}
            keyExtractor={keyExtractorTrending}
            renderItem={renderItemTrending}
            ListHeaderComponent={ListHeaderComponent}
            ListEmptyComponent={ListEmptyComponent}
            scrollEventThrottle={16}
            getItemLayout={(data, index) => ({
              length: scale(135),
              offset: scale(135) * index,
              index,
            })}
          />
          <View style={styles().line} />
        </View>
      </View>
      <View style={styles().whatCanContainer}>
        <View style={styles().whatCanTitleContainer}>
          <Text style={styles().whatCanText}>What can I make with..</Text>
        </View>
        <View style={styles().categoriesContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={ingredients}
            keyExtractor={keyExtractorCategories}
            renderItem={renderItemCategories}
            ListHeaderComponent={ListHeaderComponent}
            scrollEventThrottle={16}
          />
        </View>
        <View style={styles().whatCanListContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={recipesWhatCan}
            keyExtractor={keyExtractorTrending}
            renderItem={renderItemTrending}
            ListHeaderComponent={ListHeaderComponent}
            ListEmptyComponent={ListEmptyComponent}
            scrollEventThrottle={16}
            getItemLayout={(data, index) => ({
              length: scale(135),
              offset: scale(135) * index,
              index,
            })}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(RenderEmptySearch);
