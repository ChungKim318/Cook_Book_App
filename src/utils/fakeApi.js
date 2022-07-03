import {dataRecipe} from '../constants/dataRecipeFeed';
import {keyStore} from '../constants/keyStoreAsync';
import {getData} from './storeAsync';

const getDataRecipes = (skip = 0, take = 6) => {
  return new Promise((resolve, reject) => {
    if (skip > dataRecipe.length) {
      resolve([]);
    } else {
      setTimeout(() => {
        resolve(dataRecipe.slice(skip, take + skip));
      }, 2000);
    }
  });
};

const getDataSaved = (skip = 0, take = 6) => {
  const dataSaved = [];

  getData(keyStore.COOK_BOOK).then(res => {
    if (res) {
      res.map(typeRecipe => {
        !!typeRecipe.data.length &&
          typeRecipe.data.map(recipe => dataSaved.push(recipe));
      });
    }
  });

  return new Promise((resolve, reject) => {
    if (skip > dataSaved.length) {
      resolve([]);
    } else {
      setTimeout(() => {
        resolve(dataSaved.slice(skip, take + skip));
      }, 2000);
    }
  });
};

export {getDataRecipes, getDataSaved};
