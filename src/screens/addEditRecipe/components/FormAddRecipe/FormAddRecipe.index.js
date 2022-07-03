import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './FormAddRecipe.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from '../../../../utils';
import colors from '../../../../constants/colors';
import TitleForm from '../TitleForm/TitleForm.index';

const FormAddRecipe = ({data, ...props}) => {
  const {name, placeHolder, value, onPressForm, onPressEdit} = data;

  // console.log('FormAddRecipe re-render');

  return (
    <View style={styles.container}>
      <View style={styles.headerCard}>
        <TitleForm title={name} onPressEdit={onPressEdit} />
      </View>
      <TouchableOpacity style={styles.footerCard}>
        <AntDesign name="plus" size={scale(16)} color={colors.blackRGB} />
        <Text style={styles.placeHolder}>{placeHolder}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(FormAddRecipe);
