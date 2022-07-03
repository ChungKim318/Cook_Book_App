import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';
import SearchView from './search.view';
import {Context as ContextRecipes} from '../../contexts/recipes/recipes.context';

export const ContextSearchContainer = createContext();

const SearchContainer = props => {
  const [textSearch, setTextSearch] = useState('');
  const onSearchChange = useCallback(text => setTextSearch(text), []);
  const [isVisibleFilterModal, setIsVisibleFilterModal] = useState(false);
  const contextRecipes = useContext(ContextRecipes);
  const [recipesOri, setRecipesOri] = useState(contextRecipes?.state?.recipes);

  const dataRenderDefault = {
    recipes: [],
    profiles: [],
    tags: [],
  };
  const [dataRender, setDataRender] = useState(dataRenderDefault);

  useEffect(() => upDateDataRender(), [textSearch]);

  const upDateDataRender = () => {
    if (!!textSearch) {
      let newArray = recipesOri.filter((recipe, key) => {
        var stringSum = `${recipe.nameRecipe}${recipe.userName}`;
        recipe.tag.map(
          tagCurrent => (stringSum = stringSum.concat(tagCurrent)),
        );
        return (
          stringSum
            .toLocaleLowerCase()
            .indexOf(textSearch.toLocaleLowerCase()) != -1
        );
      });

      setDataRender({...dataRender, recipes: newArray});
    } else {
      setDataRender(dataRenderDefault);
    }
  };

  return (
    <ContextSearchContainer.Provider
      value={{
        textSearch,
        onSearchChange,
        isVisibleFilterModal,
        setIsVisibleFilterModal,
      }}>
      <SearchView dataRender={dataRender} textSearch={textSearch} />
    </ContextSearchContainer.Provider>
  );
};

export default SearchContainer;
