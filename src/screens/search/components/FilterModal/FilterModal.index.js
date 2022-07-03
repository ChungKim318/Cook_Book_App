import React, {useContext, useCallback, useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './FilterModal.styles';
import {ContextSearchContainer} from '../../search.container';
import SearchBar from '../SearchBar/SearchBar.index';
import {
  ButtonCustom,
  MultiSliderCustom,
  SliderCustom,
} from '../../../../components';
import {scale} from '../../../../utils';

import ButtonSearchFor from '../ButtonSearchFor/ButtonSearchFor.index';

const FilterModal = ({props}) => {
  const contextSearchContainer = useContext(ContextSearchContainer);
  const {isVisibleFilterModal, setIsVisibleFilterModal} =
    contextSearchContainer;

  // console.log('FilterModal re-render');

  const dataSearchForDefault = {
    recipes: 298,
    recipesActive: false,
    profiles: 78,
    profilesActive: false,
    tags: 326,
    tagsActive: false,
  };
  const [dataSearchFor, setDataSearchFor] = useState(dataSearchForDefault);
  const onChangeRecipesActive = useCallback(
    () =>
      setDataSearchFor(preData => ({
        ...preData,
        ...{recipesActive: !preData.recipesActive},
      })),
    [],
  );
  const onChangeProfilesActive = useCallback(
    () =>
      setDataSearchFor(preData => ({
        ...preData,
        ...{profilesActive: !preData.profilesActive},
      })),
    [],
  );
  const onChangeTagsActive = useCallback(
    () =>
      setDataSearchFor(preData => ({
        ...preData,
        ...{tagsActive: !preData.tagsActive},
      })),
    [],
  );

  const onApplyFilter = useCallback(() => setIsVisibleFilterModal(false), []);

  return (
    <Modal
      animationIn={'slideInDown'}
      animationOut={'slideOutDown'}
      backdropOpacity={0.8}
      isVisible={isVisibleFilterModal}>
      <View style={styles().container}>
        <View style={styles().modalContainer}>
          <View style={styles().headerContainer}>
            <SearchBar />
          </View>
          <View style={styles().bodyContainer}>
            <View style={styles().searchFilterContainer}>
              <Text style={styles().titleText}>Search Filter</Text>
              <View style={styles().filterContainer}>
                <SliderCustom
                  title={'Ingredients'}
                  sliderLength={scale(260)}
                  valueMin={2}
                  valueMax={21}
                />
              </View>
              <View style={styles().filterContainer}>
                <MultiSliderCustom
                  sliderLength={scale(260)}
                  valueDefault={[5, 60]}
                  title={'Serving Time'}
                />
              </View>
            </View>
            <View style={styles().searchForContainer}>
              <Text style={styles().titleText}>Search for</Text>
              <View style={styles().searchForElementContainer}>
                <ButtonSearchFor
                  title={`${dataSearchFor.recipes} recipes`}
                  isActive={dataSearchFor.recipesActive}
                  onPress={onChangeRecipesActive}
                />
                <ButtonSearchFor
                  title={`${dataSearchFor.profiles} profiles`}
                  isActive={dataSearchFor.profilesActive}
                  onPress={onChangeProfilesActive}
                />
              </View>
              <View style={styles().searchForElementContainer}>
                <ButtonSearchFor
                  title={`${dataSearchFor.tags} tags`}
                  isActive={dataSearchFor.tagsActive}
                  onPress={onChangeTagsActive}
                />
              </View>
            </View>
          </View>
          <View style={styles().footerContainer}>
            <ButtonCustom
              title={'Apply Filter'}
              onPress={onApplyFilter}
              styleButton={styles().buttonApply}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(FilterModal);
