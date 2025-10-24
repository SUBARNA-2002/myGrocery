/* eslint-disable react/no-unstable-nested-components */
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderHome from '../components/HeaderHome';
import { useRoute } from '@react-navigation/native';
import ListCard from '../components/ListCard';
import { responsive } from '../constants/Responsive';

const ProductList = () => {
  const route = useRoute();
  const { category } = route.params || {};
  const insets = useSafeAreaInsets();

  const newArrivalData = [
    {
      id: 1,
      title: 'Product 1',
      price: 1299,
      off: 50,
      originalPrice: 2599,
      image: require('../../assets/images/card1.png'),
    },
    {
      id: 2,
      title: 'Product 2',
      price: 899,
      off: 30,
      originalPrice: 1299,
      image: require('../../assets/images/card2.png'),
    },
    {
      id: 3,
      title: 'Product 3',
      price: 499,
      off: 20,
      originalPrice: 999,
      image: require('../../assets/images/card3.png'),
    },
    {
      id: 4,
      title: 'Product 4',
      price: 1999,
      off: 40,
      originalPrice: 3499,
      image: require('../../assets/images/card4.png'),
    },
    {
      id: 5,
      title: 'Product 5',
      price: 299,
      off: 10,
      originalPrice: 599,
      image: require('../../assets/images/card5.png'),
    },
    {
      id: 6,
      title: 'Product 6',
      price: 1599,
      off: 25,
      originalPrice: 2199,
      image: require('../../assets/images/card6.png'),
    },
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <HeaderHome title={category || 'Products'} back />
      </View>

      {/* Product Grid */}
      <View style={{ flex: 1, paddingBottom: responsive.padding(16) }}>
        <FlatList
          data={newArrivalData}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{ height: responsive.height(16) }} />
          )}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <View
                style={{
                  flex: 1,
                  overflow: 'hidden',
                }}
              >
                <ListCard data={item} />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerWrapper: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 0.5,
    paddingBottom: responsive.padding(10),
  },
  listContent: {
    paddingVertical: responsive.padding(16),
    paddingHorizontal: responsive.padding(16),
    // paddingHorizontal: 12,
    // paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  cardWrapper: {
    flex: 0.47,
    // width: 'auto',
    // paddingHorizontal: responsive.padding(8),
    // marginBottom: 16,
    // marginHorizontal: 4,
  },
});
