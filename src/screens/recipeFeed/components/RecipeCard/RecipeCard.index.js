import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './RecipeCard.styles';
import Animated, {useAnimatedStyle, interpolate} from 'react-native-reanimated';
import {NavigationServices, scale} from '../../../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../../../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {ButtonCustom, ReactComponent} from '../../../../components';
import ModalSaveRecipe from '../ModalSaveRecipe/ModalSaveRecipe';
import {useDispatch} from 'react-redux';
import {startModal} from '../../../../redux/isActiveModal/actions';
import {SCREEN_NAME} from '../../../../constants/screenName';
import formatText from '../../../../utils/formatText';

const RecipeCard = ({
  recipe,
  translateX,
  index,
  maxLengthRecipes,
  setTypeStatus,
  sendMessage,
  startToast,
}) => {
  const {
    image,
    nameRecipe,
    detail,
    like,
    comment,
    userImage,
    userName,
    dateCreate,
  } = recipe;
  const [isHeart, setIsHeart] = useState(false);
  const [isVisibleSaveModal, setIsVisibleSaveModal] = useState(false);
  const dispatch = useDispatch();
  const cardSize = scale(315);

  // console.log('RecipeCard re-render');

  const changeHeart = useCallback(() => {
    setIsHeart(!isHeart);
  }, [isHeart]);

  const translateXStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * cardSize,
      (index - 1) * cardSize,
      index * cardSize,
    ];
    const opacity = interpolate(translateX.value, inputRange, [0.6, 1, 0.6]);
    return {
      opacity,
    };
  });
  if (index == 0 || index == maxLengthRecipes - 1) {
    return <View style={styles.cardFirst} />;
  }

  const openModalSaveRecipe = () => {
    setIsVisibleSaveModal(true);
    dispatch(startModal());
  };

  return (
    <>
      <Animated.View style={[styles.cardContainer, translateXStyle]}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.rightHeader}
            onPress={() =>
              NavigationServices.navigate(
                SCREEN_NAME.USER_OTHER_PROFILE_SCREEN,
                {
                  user: recipe,
                },
              )
            }>
            <Image
              source={userImage}
              style={styles.imageUser}
              resizeMode="cover"
            />
            <View style={styles.userInfoContainer}>
              <Text style={styles.textUserName}>{userName}</Text>
              <Text style={styles.textCreateDay}>{dateCreate}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.bodyContainer}
          onPress={() =>
            NavigationServices.navigate(SCREEN_NAME.RECIPE_DETAIL_SCREEN, {
              id: recipe.id,
            })
          }>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <View style={styles.headerFooterContainer}>
            <Text style={styles.textNameRecipe}>{formatText(nameRecipe)}</Text>
            <TouchableOpacity onPress={changeHeart}>
              <AntDesign
                name={isHeart ? 'heart' : 'hearto'}
                size={scale(16)}
                color={isHeart ? colors.red : colors.lightBlack}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyFooterContainer}>
            <Text style={styles.textDetailRecipe}>{detail}</Text>
          </View>
          <View style={styles.footerFooterContainer}>
            <View style={styles.likeAndCommentContainer}>
              <ReactComponent
                react1={`${like} likes`}
                react2={`${comment} comments`}
              />
            </View>
            <View style={styles.buttonContainer}>
              <ButtonCustom
                title={'Save'}
                styleButton={styles.buttonSave}
                styleText={styles.buttonText}
                icon={
                  <Entypo name="plus" size={scale(14)} color={colors.primary} />
                }
                onPress={openModalSaveRecipe}
              />
            </View>
          </View>
        </View>
      </Animated.View>
      {/* {index != 0 && index != maxLengthRecipes && ( */}
      <ModalSaveRecipe
        isVisible={isVisibleSaveModal}
        setIsVisible={setIsVisibleSaveModal}
        index={index}
        recipeCurrent={recipe}
        setTypeStatus={setTypeStatus}
        sendMessage={sendMessage}
        startToast={startToast}
      />
      {/* )} */}
    </>
  );
};

export default React.memo(RecipeCard);
