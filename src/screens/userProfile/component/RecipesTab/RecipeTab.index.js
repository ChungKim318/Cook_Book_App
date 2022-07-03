import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import FlatListCustom from '../../../../components/FlatListCustom/FlatListCustom.index';
import {icons} from '../../../../constants/icons';
import {getDataRecipes, getDataSaved} from '../../../../utils/fakeApi';
import RecipeCardTab from '../RecipeCardTab/RecipeCardTab.index';
import styles from './RecipeTab.styles';
import LottieView from 'lottie-react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import SkeletonRecipes from '../SkeletonRecipe/SkeletonRecipes.index';
import {useIsFocused} from '@react-navigation/native';

const RecipesTab = props => {
  const [recipes, setRecipes] = useState({data: [], skip: 0});
  const [isFetching, setIsFetching] = useState(false);
  const [isEndList, setIsEndList] = useState(false);
  const PAGE = 6;
  const size = recipes?.data?.length;
  const {type} = props;
  const getData = type == 1 ? getDataRecipes : getDataSaved;
  const isFocus = useIsFocused();

  // console.log('RecipeTab re-render');

  useEffect(() => {
    let mounted = true;
    mounted && FetchData(0, PAGE, true);
    // FetchData(0, PAGE, true);
    return () => {
      setRecipes({});
      mounted = false;
    };
  }, [isFocus]);

  const FetchData = async (skip, take, isRefresh) => {
    setIsFetching(true);
    try {
      const data = await getData(skip, take);
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
      return <SkeletonRecipes />;
    }
    if (!isFetching) {
      return (
        <View style={styles.listEmpty}>
          <Text style={styles.textEmpty}> Don't have recipe </Text>
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
  const extraData = () => products.data;
  const keyExtractor = item => item.id + Date.now().toString();

  const renderItem = ({item, index}) => {
    return <RecipeCardTab item={item} index={index} translateY={translateY} />;
  };

  const translateY = useSharedValue(0);
  const scrollViewHandler = useAnimatedScrollHandler(event => {
    translateY.value = event.contentOffset.y;
  });

  return (
    <FlatListCustom
      data={recipes.data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      onLoadMore={onLoadMore}
      onPullToRefresh={onPullToRefresh}
      renderFooter={renderFooter}
      renderEmptyData={renderEmptyData}
      scrollViewHandler={scrollViewHandler}
    />
  );
};

export default React.memo(RecipesTab);
