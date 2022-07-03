import React, {useEffect, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {SCREEN_NAME} from '../constants/screenName';
import AuthStack from './authStack';
import NavigationServices from '../utils/navigationServices';
import Splash from '../screens/Splash';
import MainBottomTab from './mainBottomTab';
import UserOtherProfileContainer from '../screens/userProfile/userOtherProfile/userOtherProfile.container';
import SettingContainer from '../screens/setting/setting.container';
import EditProfileContainer from '../screens/editProfile/editProfile.container';
import MyRecipesContainer from '../screens/myRecipes/myRecipes.container';
import RecipeDetailContainer from '../screens/recipeDetail/recipeDetail.container';
import {Context as ContextRecipe} from '../contexts/recipes/recipes.context';
import AddEditRecipeContainer from '../screens/addEditRecipe/addEditRecipe.container';
import {Context as ConTextUserAdmin} from '../contexts/userAdmin/userAdmin.context';
import NotificationModal from '../components/NotificationModal/NotificationModal.index';

const Stack = createNativeStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAME.AUTH_SCREEN}
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.MAIN_BOTTOM_TAB_SCREEN}
        component={MainBottomTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.USER_OTHER_PROFILE_SCREEN}
        component={UserOtherProfileContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.SETTING_SCREEN}
        component={SettingContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.EDIT_PROFILE_SCREEN}
        component={EditProfileContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.MY_RECIPES_SCREEN}
        component={MyRecipesContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.RECIPE_DETAIL_SCREEN}
        component={RecipeDetailContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAME.ADD_EDIT_RECIPE_SCREEN}
        component={AddEditRecipeContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const AppContainer = props => {
  const {getRecipes} = useContext(ContextRecipe);
  const {getUserAdmin} = useContext(ConTextUserAdmin);
  useEffect(() => {
    getRecipes();
    getUserAdmin();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={NavigationServices.navigationRef}>
        <Splash />
        <MainStack />
        <NotificationModal />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppContainer;
