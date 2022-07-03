import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {ButtonCustom, Header, Heading1} from '../../components';
import stylesOri from '../../constants/stylesOri';
import styles from './addEditRecipe.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from '../../utils';
import colors from '../../constants/colors';
import FormAddRecipe from './components/FormAddRecipe/FormAddRecipe.index';
import {Picker} from '@react-native-picker/picker';
import GalleryForm from './components/GalleryForm/GalleryForm.index';
import IngredientsForm from './components/IngredientsForm/IngredientsForm.index';
import HowToCookForm from './components/HowToCookForm/HowToCookForm.index';
import AdditionalInfoForm from './components/AdditionalInfoForm/AdditionalInfoForm.index';
import EditGalleryModal from './components/EditGalleryModal/EditGalleryModal.index';
import EditIngredientsModal from './components/EditIngredientsModal/EditIngredientsModal.index';
import EditHowToCookModal from './components/EditHowToCookModal/EditHowToCookModal.index';
import EditAdditionalModal from './components/EditAdditionalModal/EditAdditionalModal.index';

const AddEditRecipeView = ({
  dataForm,
  onChangeName,
  cookBook,
  selectedTypeRecipe,
  onValuePickerChange,
  addType,
  isFillFull,
  isActiveRBSheet,
  ...props
}) => {
  const recipeName = dataForm[0];
  const dataFormNew = dataForm.slice(1);

  const renderDataForm = () => {
    return (
      !!dataFormNew.length &&
      dataFormNew.map((infoElement, index) => {
        if (infoElement.id == 2 && !!infoElement?.value?.length) {
          return (
            <GalleryForm
              key={infoElement.name + index.toString() + Date.now.toString()}
              data={infoElement}
            />
          );
        } else if (infoElement.id == 3 && !!infoElement?.value?.length) {
          return (
            <IngredientsForm
              key={infoElement.name + index.toString() + Date.now.toString()}
              data={infoElement}
            />
          );
        } else if (infoElement.id == 4 && !!infoElement?.value?.length) {
          return (
            <HowToCookForm
              key={infoElement.name + index.toString() + Date.now.toString()}
              data={infoElement}
            />
          );
        } else if (infoElement.id == 5) {
          return (
            <AdditionalInfoForm
              key={infoElement.name + index.toString() + Date.now.toString()}
              data={infoElement}
            />
          );
        } else {
          return (
            <FormAddRecipe
              key={infoElement.name + index.toString() + Date.now.toString()}
              data={infoElement}
            />
          );
        }
      })
    );
  };
  return (
    <>
      <View
        style={styles(isActiveRBSheet).container}
        showsVerticalScrollIndicator={false}>
        <View style={styles().headerContainer}>
          <Header titleBack={'Back to My Recipes'} />
        </View>
        <View style={styles().heading1Container}>
          <Heading1 titleLeft={addType ? 'New Recipe' : 'Edit Recipe'} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles().recipeNameContainer}>
            <TouchableOpacity style={styles().imageRecipeContainer}>
              {!!recipeName.image ? (
                <Image
                  source={recipeName.image}
                  style={styles().imageUser}
                  resizeMode="cover"
                />
              ) : (
                <AntDesign
                  name="plus"
                  size={scale(16)}
                  color={colors.darkGrey}
                />
              )}
            </TouchableOpacity>
            <View style={styles().inputNameRecipeContainer}>
              <Text style={styles().normalText}>{recipeName.name}</Text>
              <TextInput
                value={recipeName.value}
                placeholder={recipeName.placeHolder}
                onChangeText={onChangeName}
              />
            </View>
          </View>
          {renderDataForm()}
          <View style={styles().saveRecipeContainer}>
            <Text style={styles().normalText}>Save to</Text>
            <View style={styles().pickerContainer}>
              <View style={styles().picker}>
                <Picker
                  selectedValue={selectedTypeRecipe}
                  onValueChange={onValuePickerChange}>
                  {!!cookBook.length &&
                    cookBook.map(recipeType => (
                      <Picker.Item
                        key={recipeType.name + Date.now().toString()}
                        label={recipeType.name}
                        value={recipeType.name}
                      />
                    ))}
                </Picker>
              </View>
              <ButtonCustom
                styleButton={{
                  ...stylesOri.buttonSmall,
                  ...styles().styleButtonSave,
                }}
                styleText={stylesOri.buttonSmallText}
                title={'Save Recipe'}
              />
            </View>
          </View>
          <View style={styles().buttonPostToFeed}>
            <ButtonCustom title={'Post to Feed'} disable={!isFillFull} />
          </View>
        </ScrollView>
      </View>
      <EditGalleryModal data={dataForm[1].value} />
      <EditIngredientsModal data={dataForm[2].value} />
      <EditHowToCookModal data={dataForm[3].value} />
      <EditAdditionalModal data={dataForm[4].value} />
    </>
  );
};

export default React.memo(AddEditRecipeView);
