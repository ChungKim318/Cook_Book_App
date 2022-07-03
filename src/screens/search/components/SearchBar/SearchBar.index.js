import React, {useContext, useCallback} from 'react';
import {View, TouchableOpacity, Image, TextInput} from 'react-native';
import styles from './SearchBar.styles';
import {icons} from '../../../../constants/icons';
import {ContextSearchContainer} from '../../search.container';

const SearchBar = ({filterData, setFilterData, ...props}) => {
  const contextSearchContainer = useContext(ContextSearchContainer);
  const {
    textSearch,
    onSearchChange,
    isVisibleFilterModal,
    setIsVisibleFilterModal,
  } = contextSearchContainer;

  const onPressFilter = useCallback(
    () => setIsVisibleFilterModal(preIsVisible => !preIsVisible),
    [],
  );
  // console.log('SearchBar re-render');
  return (
    <View style={styles().searchBarContainer}>
      <Image source={icons.SEARCH} style={styles().searchIcon} />
      <TextInput
        value={textSearch}
        onChangeText={onSearchChange}
        placeholder="Search recipe, people, or tag"
        style={styles().inputSearch}
      />
      <TouchableOpacity onPress={() => onPressFilter()}>
        <Image
          source={icons.FILTER}
          style={styles(isVisibleFilterModal).filterIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SearchBar);
