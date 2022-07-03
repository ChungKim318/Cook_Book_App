import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import {icons} from '../../../../constants/icons';
import {getDataRecipes} from '../../../../utils/fakeApi';
import {scale} from '../../../../utils';

import styles from './FollowingTab.styles';
import LottieView from 'lottie-react-native';

import SkeletonUser from '../SkeletonUser/SkeletonUser.index';
import {useIsFocused} from '@react-navigation/native';
import ProfileCardSearch from '../../../search/components/ProfileCardSearch/ProfileCardSearch.index';

const FollowingTab = props => {
  const [recipes, setRecipes] = useState({data: [], skip: 0});
  const [isFetching, setIsFetching] = useState(false);
  const [isEndList, setIsEndList] = useState(false);
  const PAGE = 6;
  const size = recipes?.data?.length;
  const isFocused = useIsFocused();

  // console.log('FollowingTab re-render');

  useEffect(() => {
    let mounted = true;
    mounted && FetchData(0, PAGE, true);
    return () => {
      setRecipes({});
      mounted = false;
    };
  }, []);

  const FetchData = async (skip, take, isRefresh) => {
    setIsFetching(true);
    try {
      const data = await getDataRecipes(skip, take);
      if (!!data.length) {
        if (isRefresh) {
          setRecipes({data: data, skip: PAGE});
          setIsEndList(false);
          setIsFetching(false);
        } else {
          setRecipes({
            data: [...recipes.data, ...data],
            skip: recipes.skip + PAGE,
          });
          setIsFetching(false);
        }
      } else {
        setIsEndList(true);
        setIsFetching(false);
      }
    } catch (err) {
      console(err);
      setIsFetching(false);
    }
  };

  const renderEmptyData = () => {
    if (isFetching) {
      return <SkeletonUser />;
    }
    if (!isFetching) {
      return (
        <View style={styles.listEmpty}>
          <Text style={styles.textEmpty}> Don't have user </Text>
        </View>
      );
    }
    return null;
  };

  const renderFooter = () => {
    if (isFetching && !!size && !isEndList) {
      return (
        <View style={styles.lottie}>
          <LottieView source={icons.LOADING} autoPlay loop />
        </View>
      );
    }
    if (isEndList && !!size) {
      return (
        <View style={styles.lottie}>
          <Text style={styles.textEmpty}> Hết </Text>
        </View>
      );
    }
    return null;
  };

  const onLoadMore = () => {
    if (!isFetching && !isEndList && !!size) {
      FetchData(recipes.skip, PAGE);
    }
  };

  const onPullToRefresh = () => {
    setIsEndList(false);
    if (!isFetching) {
      FetchData(0, PAGE, true);
    }
  };

  const keyExtractor = item => item.id + Date.now().toString();

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.cardUser}>
        <ProfileCardSearch item={item} index={index} />
      </View>
    );
  };

  return (
    <FlatList
      numColumns={2}
      bounces={false}
      showsVerticalScrollIndicator={false}
      data={recipes.data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      getItemLayout={(data, index) => ({
        length: scale(255),
        offset: scale(255) * parseInt(index / 2),
        index,
      })}
      ListEmptyComponent={renderEmptyData}
      scrollEventThrottle={16}
      contentContainerStyle={{alignItems: 'center'}}
      ListFooterComponentStyle={styles.listFooterComponentStyle}
      refreshControl={
        <RefreshControl
          removeClippedSubViews={true}
          refreshing={false}
          onRefresh={onPullToRefresh}
        />
      }
      ListFooterComponent={renderFooter}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.1}
    />
  );
};

export default React.memo(FollowingTab);
