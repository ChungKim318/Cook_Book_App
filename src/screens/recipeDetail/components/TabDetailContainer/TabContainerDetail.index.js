import React from 'react';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import colors from '../../../../constants/colors';
import stylesOri from '../../../../constants/stylesOri';
import AddTab from '../AddTab/AddTab.index';
import HowToCookTab from '../HowToCookTab/HowToCookTab.index';
import IngredientsTab from '../IngredientsTab/IngredientsTab.index';

const TabDetailContainer = ({idRecipe, ...props}) => {
  // console.log('TabDetailContainer re-render');
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
      <IngredientsTab tabLabel="Ingredients" idRecipe={idRecipe} />
      <HowToCookTab tabLabel="How to Cook" />
      <AddTab tabLabel="Add" />
    </ScrollableTabView>
  );
};

export default React.memo(TabDetailContainer);
