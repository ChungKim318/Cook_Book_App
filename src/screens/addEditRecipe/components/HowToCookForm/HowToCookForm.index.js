import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import TitleForm from '../TitleForm/TitleForm.index';
import styles from './HowToCookForm.styles';

const HowToCook = ({data, ...props}) => {
  const {name, onPressEdit, value} = data;

  // console.log('HowToCook re-render');

  const renderItem = ({item, index}) => (
    <View
      key={item + index.toString() + Date.now().toString()}
      style={styles.cookStepContainer}>
      <View style={styles.cookStep}>
        <Text style={styles.cookStepText}>{index + 1}</Text>
      </View>
      <Text style={styles.ingredientText}>{item}</Text>
    </View>
  );

  return (
    <>
      <View style={styles.headerContainer}>
        <TitleForm title={name} onPressEdit={onPressEdit} />
      </View>
      <ScrollView>
        {value.map((howToCook, index) => renderItem({item: howToCook, index}))}
      </ScrollView>
    </>
  );
};

export default React.memo(HowToCook);
