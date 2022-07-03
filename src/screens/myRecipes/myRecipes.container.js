import React, {useEffect, useState} from 'react';
import {keyStore} from '../../constants/keyStoreAsync';
import {getData} from '../../utils/storeAsync';
import MyRecipesView from './myRecipes.view';

const MyRecipesContainer = props => {
  const [selectedTypeRecipe, setSelectedTypeRecipe] = useState('All');
  const [recipes, setRecipes] = useState([]);
  const [recipesOri, setRecipesOri] = useState([]);
  useEffect(() => {
    getData(keyStore.COOK_BOOK).then(res => {
      if (!!res) {
        setRecipesOri(res);
      }
    });
  }, []);

  useEffect(() => {
    let recipesTam = [];
    recipesOri.map(recipeType => {
      if (selectedTypeRecipe == 'All') {
        !!recipeType?.data?.length &&
          (recipesTam = [...recipesTam, ...recipeType.data]);
      } else {
        recipeType.name == selectedTypeRecipe && (recipesTam = recipeType.data);
      }
    });
    setRecipes(recipesTam);
  }, [recipesOri, selectedTypeRecipe]);

  return (
    <MyRecipesView
      selectedTypeRecipe={selectedTypeRecipe}
      setSelectedTypeRecipe={setSelectedTypeRecipe}
      recipes={recipes}
      recipesOri={recipesOri}
    />
  );
};

export default MyRecipesContainer;
