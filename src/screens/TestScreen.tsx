import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useGetProductsQuery } from '../store/App.service';

const renderItem = ({ item }:any) => {
  return (
    <Text
      style={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15,
        borderBottomColor: 'red',
        borderBottomWidth: 2,
      }}
    >
      {item}
    </Text>
  );
};

let stopFetchMore = true;

const ListFooterComponent = () => (
  <Text
    style={{
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 5,
    }}
  >
    Loading...
  </Text>
);

export default function TestScreen() {
    const { data } = useGetProductsQuery({
        categories: 'Cloth',
        page: 1,
        perpage: 5,
      });
  const [loadingMore, setLoadingMore] = useState(false);


  

  const handleOnEndReached = async () => {
    setLoadingMore(true);
    if (!stopFetchMore) {
      const response = data
   
      stopFetchMore = true;
    }
    setLoadingMore(false);
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      onEndReached={handleOnEndReached}
      onEndReachedThreshold={0.5}
      onScrollBeginDrag={() => {
        stopFetchMore = false;
      }}
      ListFooterComponent={() => loadingMore && <ListFooterComponent />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});