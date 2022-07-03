import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import TitleForm from '../TitleForm/TitleForm.index';
import styles from './AdditionalInfoForm.styles';

const AdditionalInfoForm = ({data, ...props}) => {
  const {name, onPressEdit, value} = data;

  const renderItem = ({item, index}) => {
    const dataAdditional = item.data.toString().split(',');
    // console.log('AdditionalInfoForm re-render');
    return (
      <View
        key={item.name + index.toString() + Date.now().toString()}
        style={styles.additionalContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{item.name}</Text>
        </View>
        <View style={styles.dataContainer}>
          <ScrollView>
            {dataAdditional.map((additional, index) => (
              <Text
                key={additional + index.toString() + Date.now().toString()}
                style={styles.dataText}>
                {additional}
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <TitleForm title={name} onPressEdit={onPressEdit} />
      </View>
      <ScrollView>
        {value.map((additional, index) =>
          renderItem({item: additional, index}),
        )}
      </ScrollView>
    </>
  );
};

export default React.memo(AdditionalInfoForm);
