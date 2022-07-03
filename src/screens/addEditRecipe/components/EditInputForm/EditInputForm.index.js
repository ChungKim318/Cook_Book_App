import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Text, Image, TextInput} from 'react-native';
import {icons} from '../../../../constants/icons';
import styles from './EditInputForm.styles';

const EditInputForm = ({
  type,
  item,
  index,
  dataIngredients,
  setDataIngredients,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [valueText, setValueText] = useState(item.value);
  const inputRef = useRef();

  const onPressEdit = () => {
    setIsActive(pre => !pre);
  };

  const onPressDelete = () => {
    let dataIngredientsCurrent = dataIngredients.filter(
      ingredient => ingredient.id != item.id,
    );
    setDataIngredients(dataIngredientsCurrent);
  };

  // console.log('EditInputForm re-render');

  return (
    <View style={styles().container}>
      {isActive ? (
        <View style={styles().formActiveTrue}>
          <View style={styles().headerFormContainer}>
            <Text>{type == 1 ? 'Write Ingredient' : 'Write Directions'}</Text>
            <View style={styles().iconsFormActiveContainer}>
              <TouchableOpacity onPress={() => onPressDelete()}>
                <Image
                  source={icons.REMOVE}
                  style={styles().iconRemove}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPressEdit()}>
                <Image source={icons.EDIT} style={styles(true).iconEdit} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles().footerFormContainer}>
            <TextInput
              multiline
              value={valueText}
              style={styles().input}
              autoFocus={true}
              onChangeText={text => setValueText(text)}
            />
          </View>
        </View>
      ) : (
        <View style={styles().formActiveFalse}>
          {type == 2 && (
            <View style={styles().indexContainer}>
              <Text style={styles().indexText}>{index + 1}</Text>
            </View>
          )}
          <Text style={styles().ingredientText}>{valueText}</Text>
          <TouchableOpacity onPress={() => onPressEdit()}>
            <Image source={icons.EDIT} style={styles(false).iconEdit} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default React.memo(EditInputForm);
