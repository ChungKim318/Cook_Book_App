import recipesActionType from './recipes.actionType';

const initialState = {
  recipes: [],
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case recipesActionType.GET_RECIPES:
      return {
        recipes: action.payload,
      };
  }
  return state;
};

export default recipesReducer;
