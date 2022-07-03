import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {Header, Heading1} from '../../components';
import styles from './myRecipes.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationServices, scale, scaleHeight} from '../../utils';
import colors from '../../constants/colors';
import {Picker} from '@react-native-picker/picker';
import {FlatList} from 'react-native-gesture-handler';
import MyRecipeCard from './components/MyRecipeCard/MyRecipeCard.index';
import stylesOri from '../../constants/stylesOri';
import {SCREEN_NAME} from '../../constants/screenName';

const MyRecipes = ({
  recipes,
  recipesOri,
  selectedTypeRecipe,
  setSelectedTypeRecipe,
  ...props
}) => {
  const keyExtractor = (item, index) =>
    item.id + index.toString() + Date.now().toString();
  const ListEmptyComponent = () => (
    <View style={styles.listRecipesEmpty}>
      <Text style={styles.emptyText}>Don't have recipe !</Text>
    </View>
  );
  const renderItem = ({item, index}) => <MyRecipeCard item={item} />;

  const onPressRight = useCallback(
    () => NavigationServices.navigate(SCREEN_NAME.ADD_EDIT_RECIPE_SCREEN),
    [],
  );

  return (
    <View style={stylesOri.container}>
      <Header titleBack={'Back to My Profile'} />
      <View style={stylesOri.bodyContainer}>
        <View style={styles.titleContainer}>
          <Heading1
            titleLeft="My Recipes"
            iconRight={
              <AntDesign name="plus" size={scale(16)} color={colors.primary} />
            }
            titleRight={'Add New'}
            onPressRight={() => onPressRight()}
          />
        </View>
        <View style={styles.pickerCookBookContainer}>
          <View style={styles.pickerCookBook}>
            <Picker
              selectedValue={selectedTypeRecipe}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedTypeRecipe(itemValue)
              }>
              <Picker.Item label="All" value="All" />
              {!!recipesOri.length &&
                recipesOri.map(recipeType => (
                  <Picker.Item
                    key={recipeType.name + Date.now().toString()}
                    label={recipeType.name}
                    value={recipeType.name}
                  />
                ))}
            </Picker>
          </View>
        </View>
        <View style={styles.listRecipes}>
          <FlatList
            data={recipes}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ListEmptyComponent={ListEmptyComponent}
            getItemLayout={(data, index) => ({
              length: scaleHeight(240),
              offset: scale(240) * index,
              index,
            })}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(MyRecipes);
