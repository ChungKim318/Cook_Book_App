import React from 'react';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import colors from '../../../../constants/colors';
import RecipesTab from '../RecipesTab/RecipeTab.index';
import FollowingTab from '../FollowingTab/FollowingTab.index';
import stylesOri from '../../../../constants/stylesOri';

const TabContainer = props => {
  const {type} = props;

  // console.log('TabContainer re-render');

  return (
    <ScrollableTabView
      renderTabBar={() => (
        <DefaultTabBar
          activeTextColor={colors.black}
          inactiveTextColor={colors.blackRGB}
          underlineStyle={stylesOri.tabBarUnderlineStyle}
          tabStyle={stylesOri.tabStyle}
        />
      )}>
      <RecipesTab tabLabel={` 20 \nRecipes`} type={1} />
      {type == 1 && <RecipesTab tabLabel={` 75 \nSaved`} type={2} />}
      <FollowingTab tabLabel={` 248 \nFollowing`} />
    </ScrollableTabView>
  );
};

export default React.memo(TabContainer);
