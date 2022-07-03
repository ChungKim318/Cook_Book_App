import React, {useCallback, useContext, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './EditAdditionalModal.styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ContextAddEdit} from '../../addEditRecipe.container';
import {scaleHeight, scale} from '../../../../utils/fontConfig';
import HeaderModal from '../HeaderModal/HeaderModal.index';

import {ButtonCustom} from '../../../../components';

const EditAdditionalModal = ({data}) => {
  const context = useContext(ContextAddEdit);
  const {refRBSheetEditAdditional, setIsActiveRBSheet} = context;
  const [servingTime, setServingTime] = useState(data[0]?.data.toString());
  const [nutritionFacts, setNutritionFacts] = useState(data[1]?.data);
  const [tags, setTags] = useState(data[2]?.data);
  const [dataAdditional, setDataAdditional] = useState(data);

  const onClose = useCallback(
    () => refRBSheetEditAdditional.current.close(),
    [],
  );

  const renderItem = (title, value, setValue) => {
    return (
      <View style={styles.itemRenderContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <TextInput
          multiline
          value={value}
          style={styles.input}
          onChangeText={text => setValue(text.toString())}
        />
      </View>
    );
  };

  // console.log('EditAdditionalModal re-render');

  return (
    <RBSheet
      ref={refRBSheetEditAdditional}
      height={scaleHeight(500)}
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
      <View style={styles.headerContainer}>
        <HeaderModal title={'Edit Directions'} onClose={onClose} />
      </View>

      <View style={styles.bodyContainer}>
        {renderItem('Serving Time (±)', servingTime, setServingTime)}
        {renderItem('Nutrition Facts', nutritionFacts, setNutritionFacts)}
        {renderItem('Tags', tags, setTags)}
      </View>

      <View style={styles.saveButtonContainer}>
        <ButtonCustom title={'Save Info'} />
      </View>
    </RBSheet>
  );
};

export default React.memo(EditAdditionalModal);
