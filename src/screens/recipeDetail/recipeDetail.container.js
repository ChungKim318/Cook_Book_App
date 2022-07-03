import React, {useContext} from 'react';
import RecipeDetailView from './recipeDetail.view';
import {Context as ContextRecipe} from '../../contexts/recipes/recipes.context';

const RecipeDetailContainer = props => {
  const {id} = props?.route?.params;
  const {state} = useContext(ContextRecipe);
  const recipe = state.recipes.filter(recipe => recipe.id === id);

  return <RecipeDetailView recipe={recipe[0]} />;
};

export default RecipeDetailContainer;
