import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import Separator from './Separator';
import Item from './Item';

export default ({ items, onEndReached }) => (
  <View>
    <FlatList
      data={items}
      renderItem={(info) => (
        <Item item={info.item} />
      )}
      ItemSeparatorComponent={() => 
      <Separator />
      }
      keyExtractor={item => item.id}
      onEndReached={onEndReached}
    />
  </View>
);
