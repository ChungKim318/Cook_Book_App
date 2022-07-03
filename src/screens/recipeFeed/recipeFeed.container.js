import React, {useRef, useCallback, useState, useContext} from 'react';
import {Context as RecipesContext} from '../../contexts/recipes/recipes.context';
import RecipeFeedView from './recipeFeed.view';

import {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import WithCheckInternet from '../../HOC/withCheckInternet/withCheckInternet';

const RecipeFeedContainer = props => {
  const {state} = useContext(RecipesContext);
  const translateX = useSharedValue(0);
  const dataRecipeNew = [
    {name: 'firstRecipe'},
    ...state.recipes,
    {name: 'lastRecipe'},
  ];

  const scrollViewHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
    },
  });

  return (
    <RecipeFeedView
      data={dataRecipeNew}
      scrollViewHandler={scrollViewHandler}
      translateX={translateX}
    />
  );
};

export default React.memo(WithCheckInternet(RecipeFeedContainer));
