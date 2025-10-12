import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ColorString } from '../theme/AppColor';
import SearchBar from '../components/SearchBar';

const categories = [
  {
    id: 1,
    title: 'Fresh Fruits & Vegetable',
    image: 'https://cdn-icons-png.flaticon.com/512/415/415733.png',
    bgColor: '#E8F8E9',
  },
  {
    id: 2,
    title: 'Cooking Oil & Ghee',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
    bgColor: '#FFF6E5',
  },
  {
    id: 3,
    title: 'Meat & Fish',
    image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    bgColor: '#FFE8E8',
  },
  {
    id: 4,
    title: 'Bakery & Snacks',
    image: 'https://cdn-icons-png.flaticon.com/512/706/706164.png',
    bgColor: '#F4ECFF',
  },
  {
    id: 5,
    title: 'Dairy & Eggs',
    image: 'https://cdn-icons-png.flaticon.com/512/1869/1869029.png',
    bgColor: '#FFFBE5',
  },
  {
    id: 6,
    title: 'Beverages',
    image: 'https://cdn-icons-png.flaticon.com/512/415/415748.png',
    bgColor: '#E8F2FF',
  },
  {
    id: 7,
    title: 'Dairy & Eggs',
    image: 'https://cdn-icons-png.flaticon.com/512/1869/1869029.png',
    bgColor: '#FFFBE5',
  },
  {
    id: 8,
    title: 'Beverages',
    image: 'https://cdn-icons-png.flaticon.com/512/415/415748.png',
    bgColor: '#E8F2FF',
  },
];

const Separator = () => <View style={styles.separator} />;

const Explore = () => {
  const insets = useSafeAreaInsets();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.card, { backgroundColor: item.bgColor }]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }] }>
      <Text style={styles.header}>Find Products</Text>

      <SearchBar />
      <View style={styles.listWrapper}>
        <FlatList
          data={categories}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorString.screenColor,
    // paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
  },
  searchInput: {
    fontSize: 16,
    color: '#000',
  },
  row: {
    justifyContent: 'space-between',
  },
  listWrapper: {
    flex: 1,
    // paddingBottom: 30,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  separator: {
    width: 10,
  },
  card: {
    flex: 1,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    maxWidth: '47%',
    paddingVertical: 20,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    width: 100,
  },
});
