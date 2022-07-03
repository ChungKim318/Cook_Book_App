import React, {
  useCallback,
  useEffect,
  useState,
  useContext,
  useRef,
  createContext,
} from 'react';
import {keyStore} from '../../constants/keyStoreAsync';
import {getData} from '../../utils/storeAsync';
import AddEditRecipeView from './addEditRecipe.view';
import {Context as ContextRecipes} from '../../contexts/recipes/recipes.context';
import WithCheckInternet from '../../HOC/withCheckInternet/withCheckInternet';

export const ContextAddEdit = createContext();

const AddEditRecipeContainer = props => {
  const id = props?.route?.params?.id;
  const context = useContext(ContextRecipes);
  const recipe = context.state.recipes.filter(recipe => recipe.id == id)[0];

  const dataRecipeDefault = {
    nameRecipe: !!recipe ? recipe.nameRecipe : '',
    gallery: !!recipe ? recipe.images : [],
    ingredients: !!recipe ? recipe.ingredients : [],
    howToCook: !!recipe ? recipe.howToCook : [],
    additionalInfo: !!recipe ? recipe.additional : [],
    image: !!recipe ? recipe.image : '',
  };

  const [dataRecipe, setDataRecipe] = useState(dataRecipeDefault);
  const [selectedTypeRecipe, setSelectedTypeRecipe] = useState(null);
  const [cookBook, setCookBook] = useState([]);
  const [isFillFull, setIsFillFull] = useState(false);
  const [isActiveRBSheet, setIsActiveRBSheet] = useState(false);

  const refRBSheetEditGallery = useRef();
  const refRBSheetEditIngredients = useRef();
  const refRBSheetEditHowToCook = useRef();
  const refRBSheetEditAdditional = useRef();

  useEffect(() => {
    getData(keyStore.COOK_BOOK).then(res => setCookBook(res));
  }, []);

  const onValuePickerChange = useCallback(
    value => setSelectedTypeRecipe(value),
    [],
  );

  useEffect(() => checkFillFull(), [dataRecipe]);

  const checkFillFull = () => {
    if (
      !!dataRecipe.nameRecipe &&
      !!dataRecipe.gallery &&
      !!dataRecipe.ingredients &&
      !!dataRecipe.howToCook &&
      !!dataRecipe.additionalInfo &&
      !!dataRecipe.image
    ) {
      setIsFillFull(true);
    } else {
      setIsFillFull(false);
    }
  };

  const dataForm = [
    {
      id: 1,
      name: 'Recipe Name',
      placeHolder: 'Write Down Recipe Name',
      value: dataRecipe.nameRecipe,
      image: dataRecipe.image,
    },
    {
      id: 2,
      name: 'Gallery',
      placeHolder: 'Upload Images or Open Camera',
      onPressForm: () => {},
      onPressEdit: useCallback(() => refRBSheetEditGallery.current.open(), []),
      value: dataRecipe.gallery,
    },
    {
      id: 3,
      name: 'Ingredients',
      placeHolder: 'Add Ingredient',
      onPressForm: () => {},
      onPressEdit: useCallback(
        () => refRBSheetEditIngredients.current.open(),
        [],
      ),
      value: dataRecipe.ingredients,
    },
    {
      id: 4,
      name: 'How to Cook',
      placeHolder: 'Add Directions',
      onPressForm: () => {},
      onPressEdit: useCallback(
        () => refRBSheetEditHowToCook.current.open(),
        [],
      ),
      value: dataRecipe.howToCook,
    },
    {
      id: 5,
      name: 'Additional Info',
      placeHolder: 'Add Info',
      onPressForm: () => {},
      onPressEdit: useCallback(
        () => refRBSheetEditAdditional.current.open(),
        [],
      ),
      value: dataRecipe.additionalInfo,
    },
  ];

  const onChangeName = useCallback(() => {}, []);

  return (
    <ContextAddEdit.Provider
      value={{
        refRBSheetEditGallery,
        setIsActiveRBSheet,
        refRBSheetEditIngredients,
        refRBSheetEditHowToCook,
        refRBSheetEditAdditional,
      }}>
      <AddEditRecipeView
        dataForm={dataForm}
        onChangeName={onChangeName}
        cookBook={cookBook}
        selectedTypeRecipe={selectedTypeRecipe}
        onValuePickerChange={onValuePickerChange}
        addType={!!!recipe}
        isFillFull={isFillFull}
        isActiveRBSheet={isActiveRBSheet}
      />
    </ContextAddEdit.Provider>
  );
};

export default WithCheckInternet(AddEditRecipeContainer);
