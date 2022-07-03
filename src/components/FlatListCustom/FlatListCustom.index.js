import React from 'react';
import {View, RefreshControl} from 'react-native';
import {scaleHeight} from '../../utils';
import styles from './FlatListCustom.styles';
import Animated from 'react-native-reanimated';

const FlatListCustom = ({
  data,
  extraData,
  keyExtractor,
  renderItem,
  renderEmptyData,
  renderFooter,
  onLoadMore,
  onPullToRefresh,
  scrollViewHandler,
  ...props
}) => {
  //console.log('FlatListCustom re-render');
  return (
    <View style={styles.container}>
      <Animated.FlatList
        numColumns={2}
        data={data}
        extraData={!!extraData ? extraData : null}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponentStyle={styles.listFooterComponentStyle}
        getItemLayout={(data, index) => ({
          length: scaleHeight(100),
          offset: scaleHeight(100) * parseInt(index / 2),
          index,
        })}
        refreshControl={
          <RefreshControl
            removeClippedSubViews={true}
            refreshing={false}
            onRefresh={onPullToRefresh}
          />
        }
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmptyData}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.1}
        scrollEventThrottle={16}
        onScroll={scrollViewHandler}
      />
    </View>
  );
};

export default React.memo(FlatListCustom);
