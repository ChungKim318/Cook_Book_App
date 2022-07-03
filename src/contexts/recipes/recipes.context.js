import createContext from '../createContext';
import {getRecipes} from './recipes.action';
import recipesReducer from './recipes.reducer';

export const {Context, Provider} = createContext(
  recipesReducer,
  {getRecipes},
  [],
);
