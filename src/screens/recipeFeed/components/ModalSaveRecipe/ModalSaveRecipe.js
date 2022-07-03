import React, {useState, useEffect, useCallback} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import styles from './ModalSaveRecipe.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from '../../../../utils';
import colors from '../../../../constants/colors';
import {getData, storeData} from '../../../../utils/storeAsync';
import {keyStore} from '../../../../constants/keyStoreAsync';
import {useDispatch} from 'react-redux';
import Modal from 'react-native-modal';
import {useIsFocused} from '@react-navigation/native';

const ModalSaveRecipe = ({
  isVisible,
  setIsVisible,
  index,
  recipeCurrent,
  setTypeStatus,
  sendMessage,
  startToast,
}) => {
  const [cookBook, setCookBook] = useState([]);
  const [cookBookOri, setCookBookOri] = useState([]);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  //console.log('ModalSaveRecipe re-render');

  useEffect(() => {
    if (isFocused) {
      getData(keyStore.COOK_BOOK).then(res => {
        if (!!res) {
          let cookBookTam = [];
          let cookBookTam1 = res;
          res.map(typeRecipe => {
            let ck = {isActive: false, ...typeRecipe};
            cookBookTam.push(ck);
          });
          setCookBook(cookBookTam);
          setCookBookOri(cookBookTam1);
        }
      });
    }
  }, [isFocused]);

  const sendToast = () => {
    sendMessage(`Đã lưu ${recipeCurrent.nameRecipe} vào cook book`);
    startToast();
  };

  const changeIsActiveCookBook = item => {
    setCookBook(
      [...cookBook].map(typeCookBook => {
        return {
          ...typeCookBook,
          isActive: typeCookBook.name == item.name,
        };
      }),
    );
    let cookBookOriTam = cookBookOri;
    cookBookOriTam = cookBookOriTam.filter(typeCookBook =>
      typeCookBook.name == item.name
        ? typeCookBook.data.push(recipeCurrent)
        : typeCookBook,
    );
    cookBookOriTam = [...cookBookOriTam].map(typeCookBookTam => {
      return {
        ...typeCookBookTam,
        data: Array.from(new Set(typeCookBookTam.data)),
      };
    });

    storeData(keyStore.COOK_BOOK, cookBookOriTam);
    setCookBookOri(cookBookOriTam);
    setTimeout(() => [closeModalSaveRecipe(), sendToast()], 600);
  };

  const keyExtractor = (item, index) => item.name + Date.now().toString();
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={styles(item.isActive).cardTypeCookBookContainer}
      onPress={() => changeIsActiveCookBook(item)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const ListEmptyComponent = () => <Text>Đang load</Text>;

  const closeModalSaveRecipe = useCallback(() => [setIsVisible(false)], []);

  return (
    <Modal
      animationIn={'slideInDown'}
      animationOut={'slideOutDown'}
      backdropOpacity={0.8}
      isVisible={isVisible}>
      <View style={styles().container}>
        <View style={styles().modalView}>
          <View style={styles().headerContainer}>
            <Text style={styles().titleText}>Save to</Text>
            <TouchableOpacity onPress={closeModalSaveRecipe}>
              <AntDesign
                name="close"
                size={scale(20)}
                color={colors.lightBlack}
              />
            </TouchableOpacity>
          </View>
          <View style={styles().bodyContainer}>
            <FlatList
              data={cookBook}
              showsVerticalScrollIndicator={false}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              ListEmptyComponent={ListEmptyComponent}
            />
          </View>
          <View style={styles().footerContainer}>
            <TouchableOpacity style={styles().itemFooterContainer}>
              <Text style={styles().textFooter}>+ Add New CookBook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(ModalSaveRecipe);
