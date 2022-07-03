import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import TitleForm from '../TitleForm/TitleForm.index';
import styles from './GalleryForm.styles';

const GalleryForm = ({data, ...props}) => {
  const {name, value, onPressEdit} = data;

  const renderImageSmall = (uri, styleMargin) => (
    <View style={[styles.imageSmallContainer, styleMargin]}>
      <Image source={uri} style={styles.imageSmall} resizeMode="cover" />
    </View>
  );

  // console.log('GalleryForm re-render');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TitleForm title={name} onPressEdit={onPressEdit} />
      </View>
      {!!value[0] && (
        <View style={styles.imageBigContainer}>
          <Image source={value[0]} style={styles.imageBig} resizeMode="cover" />
        </View>
      )}
      <View style={styles.imageSmallView}>
        {!!value[1] && renderImageSmall(value[1])}
        {!!value[2] && renderImageSmall(value[2], styles.marginImage)}
        {!!value[3] && renderImageSmall(value[3])}
        {value.length > 4 && (
          <TouchableOpacity style={styles.imagePosition}>
            <Text style={styles.lengthGalleryText}>{value.length - 4}+</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default React.memo(GalleryForm);
