import React, {useCallback} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {ButtonCustom, ReactComponent} from '../../../../components';
import styles from './MyRecipeCard.styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationServices, scale} from '../../../../utils';
import colors from '../../../../constants/colors';
import {SCREEN_NAME} from '../../../../constants/screenName';

const MyRecipeCard = ({item}) => {
  const {image, nameRecipe, time, ingredients, id} = item;

  //  console.log('MyRecipeCard re-render');

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        NavigationServices.navigate(SCREEN_NAME.ADD_EDIT_RECIPE_SCREEN, {id})
      }>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} resizeMode="cover" />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.nameText} numberOfLines={2}>
          {nameRecipe}
        </Text>
        <View style={styles.cookContainer}>
          <View style={styles.reactContainer}>
            <MaterialCommunityIcons
              name="plus-minus"
              size={scale(14)}
              color={colors.greyBold}
            />
            <ReactComponent
              react1={`${time} mins`}
              react2={`${ingredients.length} ingredients`}
              disable1={true}
              disable2={true}
            />
          </View>

          <ButtonCustom
            title={'Cook'}
            styleButton={styles.buttonSave}
            styleText={styles.buttonText}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(MyRecipeCard);
