import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {LogoMain} from '../../components';
import {icons} from '../../constants/icons';
import {scale} from '../../utils';
import RecipeCard from './components/RecipeCard/RecipeCard.index';
import styles from './recipeFeed.styles';
import Animated from 'react-native-reanimated';
import withToast from '../../HOC/withToast/withToast.index';
import stylesOri from '../../constants/stylesOri';

const RecipeFeedView = props => {
  const {
    data,
    translateX,
    scrollViewHandler,
    setTypeStatus,
    sendMessage,
    startToast,
  } = props;

  const renderEmptyData = () => {
    return (
      <View>
        <Text>Don't have recipe</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoMain />
        <View style={styles.rightHeader}>
          <TouchableOpacity>
            <Image
              source={icons.NOTIFICATIONS}
              style={styles.logoHeaderRight}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={icons.MESSAGES}
              style={styles.logoHeaderRight}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={stylesOri.bodyContainer}>
        <Animated.FlatList
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item, index}) => (
            <RecipeCard
              recipe={item}
              index={index}
              translateX={translateX}
              maxLengthRecipes={data?.length}
              setTypeStatus={setTypeStatus}
              sendMessage={sendMessage}
              startToast={startToast}
            />
          )}
          getItemLayout={(data, index) => ({
            length: scale(315),
            offset: scale(315) * index,
            index,
          })}
          ListEmptyComponent={renderEmptyData}
          scrollEventThrottle={16}
          onScroll={scrollViewHandler}
          contentContainerStyle={{alignItems: 'center'}}
          snapToInterval={scale(315)}
          snapToAlignment="start"
          decelerationRate="fast"
        />
      </View>
      <View style={stylesOri.footerContainer}></View>
    </View>
  );
};

export default React.memo(withToast(RecipeFeedView));
