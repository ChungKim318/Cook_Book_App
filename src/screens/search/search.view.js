import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import FilterModal from './components/FilterModal/FilterModal.index';
import RenderEmptySearch from './components/RenderEmptySearch/RenderEmptySearch.index';
import RecipeCardSearch from './components/RecipeCardSearch/RecipeCardSearch.index';
import SearchBar from './components/SearchBar/SearchBar.index';
import styles from './search.styles';
import {scale} from '../../utils';
import ProfileCardSearch from './components/ProfileCardSearch/ProfileCardSearch.index';
import TagCardSearch from './components/TagCardSearch/TagCardSearch.index';

const SearchView = ({dataRender, textSearch, ...props}) => {
  const keyExtractorRecipe = (item, index) =>
    item.id + index.toString() + Date.now().toString();
  const renderItemRecipe = ({item, index}) => (
    <RecipeCardSearch item={item} index={index} />
  );
  const ListHeaderComponent = () => <View style={styles.headerListContainer} />;
  const ListEmptyComponent = () => (
    <Text style={styles.emptyListText}>Don't have recipes</Text>
  );

  const keyExtractorProfile = (item, index) =>
    item.id + index.toString() + Date.now().toString();
  const renderItemProfile = ({item, index}) => (
    <ProfileCardSearch item={item} index={index} />
  );

  const keyExtractorTag = (item, index) =>
    item.id + index.toString() + Date.now().toString();
  const renderItemTag = ({item, index}) => (
    <TagCardSearch item={item} index={index} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SearchBar />
      </View>
      <View style={styles.bodyContainer}>
        {!!textSearch ? (
          <ScrollView
            style={styles.scrollViewContainer}
            showsVerticalScrollIndicator={false}>
            <View style={styles.recipesContainer}>
              <View style={styles.recipesHeaderContainer}>
                <Text style={styles.titleLeftText}>Recipes</Text>
                <TouchableOpacity>
                  <Text style={styles.titleRightText}>Show all(200+)</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.recipesListContainer}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={dataRender.recipes}
                  keyExtractor={keyExtractorRecipe}
                  renderItem={renderItemRecipe}
                  ListHeaderComponent={ListHeaderComponent}
                  ListEmptyComponent={ListEmptyComponent}
                  scrollEventThrottle={16}
                  getItemLayout={(data, index) => ({
                    length: scale(135),
                    offset: scale(135) * index,
                    index,
                  })}
                />
                <View style={styles.line} />
              </View>
            </View>
            <View style={styles.profilesContainer}>
              <View style={styles.profilesHeaderContainer}>
                <Text style={styles.titleLeftText}>Profiles</Text>
                <TouchableOpacity>
                  <Text style={styles.titleRightText}>Show all(42+)</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.profilesListContainer}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={dataRender.recipes}
                  keyExtractor={keyExtractorProfile}
                  renderItem={renderItemProfile}
                  ListHeaderComponent={ListHeaderComponent}
                  ListEmptyComponent={ListEmptyComponent}
                  scrollEventThrottle={16}
                  getItemLayout={(data, index) => ({
                    length: scale(175),
                    offset: scale(175) * index,
                    index,
                  })}
                />
                <View style={styles.line} />
              </View>
            </View>
            <View style={styles.tagsContainer}>
              <View style={styles.profilesHeaderContainer}>
                <Text style={styles.titleLeftText}>Tags</Text>
                <TouchableOpacity>
                  <Text style={styles.titleRightText}>Show all(200+)</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.footerTagContainer}>
              {!!dataRender.recipes.length &&
                dataRender.recipes.map((item, index) => {
                  return (
                    <TagCardSearch
                      key={item.id + index.toString() + Date.now().toString()}
                      item={item}
                      index={index}
                    />
                  );
                })}
            </View>
          </ScrollView>
        ) : (
          <RenderEmptySearch />
        )}
      </View>
      <View style={styles.footerContainer}></View>
      <FilterModal />
    </View>
  );
};

export default React.memo(SearchView);
