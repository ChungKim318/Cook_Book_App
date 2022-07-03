import React, {useCallback, useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './EditGalleryModal.styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../../constants/colors';
import {ContextAddEdit} from '../../addEditRecipe.container';
import {scaleHeight, scale} from '../../../../utils/fontConfig';
import HeaderModal from '../HeaderModal/HeaderModal.index';
import {icons} from '../../../../constants/icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ButtonCustom} from '../../../../components';

const EditGalleryModal = ({data}) => {
  const context = useContext(ContextAddEdit);
  const {refRBSheetEditGallery, setIsActiveRBSheet} = context;
  const dataNew = [];
  data.map((image, index) =>
    dataNew.push({id: index.toString(), uri: image, isActive: false}),
  );

  const [dataImage, setDataImage] = useState(dataNew);
  const [activeRadio, setActiveRadio] = useState(false);

  const onClose = useCallback(() => refRBSheetEditGallery.current.close(), []);
  const onChangeActiveImage = id => {
    setDataImage(
      [...dataImage].map(image => ({...image, isActive: image.id == id})),
    );
  };

  const keyExtractor = (item, index) =>
    index.toString() + Date.now().toString();
  const renderImage = ({item, index}) => {
    return (
      <View style={styles(item.isActive).imageView}>
        <TouchableOpacity onPress={() => onChangeActiveImage(item.id)}>
          <Image source={item.uri} style={styles().image} resizeMode="cover" />
        </TouchableOpacity>
      </View>
    );
  };

  //  console.log('EditGalleryModal re-render');
  return (
    <RBSheet
      ref={refRBSheetEditGallery}
      height={scaleHeight(500)}
      closeOnDragDown={false}
      closeOnPressMask={true}
      customStyles={{
        container: {
          borderTopLeftRadius: scale(20),
          borderTopRightRadius: scale(20),
        },
      }}
      onOpen={() => setIsActiveRBSheet(true)}
      onClose={() => setIsActiveRBSheet(false)}>
      <View style={styles().headerContainer}>
        <HeaderModal title={'Edit Gallery'} onClose={onClose} />
      </View>
      <View style={styles().titleContainer}>
        <Text style={styles().titleImage}>{`Images(${data.length})`}</Text>
        <TouchableOpacity>
          <Text style={styles().titleViewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles().imageContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataImage}
          keyExtractor={keyExtractor}
          renderItem={renderImage}
        />
      </View>
      <View style={styles().setAndRemoveContainer}>
        <TouchableOpacity
          style={styles().setAndRemoveElement}
          onPress={() => setActiveRadio(pre => !pre)}>
          <MaterialIcons
            name="radio-button-on"
            size={scale(24)}
            color={activeRadio ? colors.primary : colors.lightGrey2}
          />
          <Text style={styles().setAndRemoveText}>Set as Cover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles().setAndRemoveElement}>
          <Image
            source={icons.REMOVE}
            style={styles().iconRemove}
            resizeMode="cover"
          />
          <Text style={styles().setAndRemoveText}>Remove</Text>
        </TouchableOpacity>
      </View>
      <View style={styles().uploadAndOpenContainer}>
        <TouchableOpacity style={styles().upload}>
          <AntDesign name="plus" size={scale(16)} color={colors.blackRGB} />
          <Text style={styles().uploadText}>Upload Images or Open Camera</Text>
        </TouchableOpacity>
      </View>
      <View style={styles().saveButtonContainer}>
        <ButtonCustom title={'Save Gallery'} />
      </View>
    </RBSheet>
  );
};

export default React.memo(EditGalleryModal);
