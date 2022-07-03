import React, {useCallback} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ButtonCustom, Header} from '../../components';
import styles from './recipeDetail.styles';
import Feather from 'react-native-vector-icons/Feather';
import {scale} from '../../utils';
import colors from '../../constants/colors';
import stylesOri from '../../constants/stylesOri';
import TabContainerDetail from './components/TabDetailContainer/TabContainerDetail.index';

const RecipeDetailView = ({recipe, ...props}) => {
  const {image, nameRecipe, images, id} = recipe;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.headerContainer}>
        <View style={styles.header}>
          <Header
            titleBack={'Back to My Profile'}
            colorStyle={styles.colorsLeftHeader}
            rightHeader={
              <ButtonCustom
                title={'Cook Now'}
                styleButton={{...stylesOri.buttonSmall, ...styles.buttonCook}}
                styleText={{
                  ...stylesOri.buttonSmallText,
                  ...styles.buttonCookText,
                }}
                icon={
                  <Feather name="play" size={scale(16)} color={colors.white} />
                }
              />
            }
          />
        </View>
        <View style={styles.nameRecipe}>
          <Text style={styles.nameRecipeText}>{nameRecipe}</Text>
        </View>
      </ImageBackground>
      <View style={styles.imagesContainer}>
        {!!images[0] && (
          <Image source={images[0]} style={styles.images} resizeMode="cover" />
        )}
        {!!images[1] && (
          <Image source={images[1]} style={styles.images} resizeMode="cover" />
        )}
        {!!images[2] && (
          <ImageBackground
            source={images[2]}
            style={styles.images}
            resizeMode="cover">
            <TouchableOpacity style={styles.imagesBlur}>
              <Text style={styles.imagesBlurText}>{images.length - 2}+</Text>
            </TouchableOpacity>
          </ImageBackground>
        )}
      </View>
      <View style={styles.bodyContainer}>
        <TabContainerDetail idRecipe={id} />
      </View>
    </View>
  );
};

export default React.memo(RecipeDetailView);
