import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Text,
} from 'react-native';
import {images} from '../../../../constants/images';
import TitleForm from '../TitleForm/TitleForm.index';
import styles from './IngredientsForm.styles';

const IngredientsFrom = ({data, ...props}) => {
  const {name, onPressEdit, value} = data;

  const valueActive = value.slice(0, 4);

  //  console.log('IngredientForm re-render');

  const renderItemUser = ({item, index}) => {
    return (
      <Image
        key={index.toString() + Date.now().toString()}
        source={images.USER}
        style={styles.imageUser}
        resizeMode="cover"
      />
    );
  };
  const renderItemIngredient = ({item, index}) => (
    <Text
      key={item + index.toString() + Date.now().toString()}
      style={styles.ingredientText}>
      {item},
    </Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TitleForm title={name} onPressEdit={onPressEdit} />
      </View>
      <View style={styles.imageUserContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {valueActive.map((ingredient, index) =>
            renderItemUser({item: ingredient, index}),
          )}

          {!!value[4] && (
            <ImageBackground
              source={images.USER}
              style={styles.imageUser}
              resizeMode="cover">
              {value.length > 5 && (
                <TouchableOpacity>
                  <View style={styles.imagePosition}>
                    <Text style={styles.lengthIngredientText}>
                      {value.length - 5}+
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </ImageBackground>
          )}
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {valueActive.map((ingredient, index) =>
            renderItemIngredient({item: ingredient, index}),
          )}

          {value.length > 4 && (
            <Text style={styles.ingredientText}>+ {value.length - 4} more</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default React.memo(IngredientsFrom);
