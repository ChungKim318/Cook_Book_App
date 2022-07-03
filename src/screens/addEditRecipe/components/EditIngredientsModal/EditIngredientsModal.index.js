import React, {useCallback, useContext, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './EditIngredientsModal.styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../../constants/colors';
import {ContextAddEdit} from '../../addEditRecipe.container';
import {scaleHeight, scale} from '../../../../utils/fontConfig';
import HeaderModal from '../HeaderModal/HeaderModal.index';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {ButtonCustom} from '../../../../components';
import EditInputForm from '../EditInputForm/EditInputForm.index';

const EditIngredientsModal = ({data}) => {
  const context = useContext(ContextAddEdit);
  const {refRBSheetEditIngredients, setIsActiveRBSheet} = context;
  const dataNew = [];
  data.map((ingredient, index) =>
    dataNew.push({
      id: index.toString() + Date.now().toString(),
      value: ingredient,
    }),
  );
  //console.log('EditIngredientsModal re-render');
  const [dataIngredients, setDataIngredients] = useState(dataNew);

  const onClose = useCallback(
    () => refRBSheetEditIngredients.current.close(),
    [],
  );

  const onAddIngredients = () => {
    setDataIngredients([
      ...dataIngredients,
      {...{id: Date.now().toString(), value: ''}},
    ]);
  };

  const keyExtractor = (item, index) => item.id + Date.now().toString();
  const renderItem = ({item, index}) => {
    return (
      <EditInputForm
        type={1}
        item={item}
        index={index}
        dataIngredients={dataIngredients}
        setDataIngredients={setDataIngredients}
      />
    );
  };

  return (
    <RBSheet
      ref={refRBSheetEditIngredients}
      height={scaleHeight(482)}
      closeOnDragDown={false}
      closeOnPressMask={true}
      customStyles={{
        container: {
          borderTopLeftRadius: scale(20),
          borderTopRightRadius: scale(20),
        },
      }}
      onOpen={() => setIsActiveRBSheet(true)}
      onClose={() => setIsActiveRBSheet(false)}>
      <View style={styles().headerContainer}>
        <HeaderModal title={'Edit Ingredients'} onClose={onClose} />
      </View>
      <View style={styles().bodyContainer}>
        <FlatList
          data={dataIngredients}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles().addIngredientContainer}>
        <TouchableOpacity
          style={styles().addIngredient}
          onPress={() => onAddIngredients()}>
          <AntDesign name="plus" size={scale(16)} color={colors.blackRGB} />
          <Text style={styles().addIngredientText}>Add Ingredient</Text>
        </TouchableOpacity>
      </View>
      <View style={styles().saveButtonContainer}>
        <ButtonCustom title={'Save Ingredients'} />
      </View>
    </RBSheet>
  );
};

export default React.memo(EditIngredientsModal);
