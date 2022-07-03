import recipesActionType from './recipes.actionType';
import {dataRecipe} from '../../constants/dataRecipeFeed';

const getRecipes = dispatch => () => {
  return dispatch({type: recipesActionType.GET_RECIPES, payload: dataRecipe});
};

export {getRecipes};
