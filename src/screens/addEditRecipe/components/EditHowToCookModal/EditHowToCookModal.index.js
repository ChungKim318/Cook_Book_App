import React, {useCallback, useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import styles from './EditHowToCookModal.styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../../constants/colors';
import {ContextAddEdit} from '../../addEditRecipe.container';
import {scaleHeight, scale} from '../../../../utils/fontConfig';
import HeaderModal from '../HeaderModal/HeaderModal.index';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {ButtonCustom} from '../../../../components';
import EditInputForm from '../EditInputForm/EditInputForm.index';
import {images} from '../../../../constants/images';
import {icons} from '../../../../constants/icons';

const EditHowToCookModal = ({data}) => {
  const context = useContext(ContextAddEdit);
  const {refRBSheetEditHowToCook, setIsActiveRBSheet} = context;
  const dataNew = [];
  data.map((howToCook, index) =>
    dataNew.push({
      id: index.toString() + Date.now().toString(),
      value: howToCook,
    }),
  );

  // console.log('EditHowToCookModal re-render');

  const [dataHowToCook, setDataHowToCook] = useState(dataNew);

  const onClose = useCallback(
    () => refRBSheetEditHowToCook.current.close(),
    [],
  );

  const onAddDirection = () => {
    setDataHowToCook([
      ...dataHowToCook,
      {...{id: Date.now().toString(), value: ''}},
    ]);
  };
  const keyExtractor = (item, index) => item.id + Date.now().toString();
  const renderItem = ({item, index}) => {
    return (
      <EditInputForm
        type={2}
        item={item}
        index={index}
        dataIngredients={dataHowToCook}
        setDataIngredients={setDataHowToCook}
      />
    );
  };

  return (
    <RBSheet
      ref={refRBSheetEditHowToCook}
      height={scaleHeight(700)}
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
        <HeaderModal title={'Edit Directions'} onClose={onClose} />
      </View>
      <View style={styles().imageContainer}>
        <ImageBackground
          source={images.RECIPE}
          style={styles().imageBackground}>
          <TouchableOpacity style={styles().editAnnotationsContainer}>
            <Image
              source={icons.EDIT}
              style={styles().iconEdit}
              resizeMode="cover"
            />
            <Text style={styles().editAnnotationsText}>Edit Annotations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles().deleteContainer}>
            <Image
              source={icons.REMOVE}
              style={styles().iconEdit}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles().infoImageContainer}>
          <TouchableOpacity>
            <Image source={icons.UPLOAD} style={styles().iconUpload} />
          </TouchableOpacity>
          <Text style={styles().nameVideoText}>The Making of Waffle.mp4</Text>
        </View>
      </View>
      <View style={styles().bodyContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataHowToCook}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
      <View style={styles().addDirectionContainer}>
        <TouchableOpacity
          style={styles().addDirection}
          onPress={() => onAddDirection()}>
          <AntDesign name="plus" size={scale(16)} color={colors.blackRGB} />
          <Text style={styles().addDirectionText}>Add Directions</Text>
        </TouchableOpacity>
      </View>
      <View style={styles().saveButtonContainer}>
        <ButtonCustom title={'Save Directions'} />
      </View>
    </RBSheet>
  );
};

export default React.memo(EditHowToCookModal);
