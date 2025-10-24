/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
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
import HeaderHome from '../components/HeaderHome';
import { responsive } from '../constants/Responsive';
import { useNavigation } from '@react-navigation/native';

const categories = [
  {
    id: 1,
    title: 'Track Pants',
    image: require('../../assets/images/cate1.png'),
    bgColor: '#E8F8E9',
  },
  {
    id: 2,
    title: 'Shorts',
    image: require('../../assets/images/cate2.png'),
    bgColor: '#FFF6E5',
  },
  {
    id: 3,
    title: 'T-Shirts',
    image: require('../../assets/images/cate3.png'),
    bgColor: '#FFE8E8',
  },
  {
    id: 4,
    title: 'Jacket',
    image: require('../../assets/images/cate4.png'),
    bgColor: '#F4ECFF',
  },
  {
    id: 5,
    title: 'Vest',
    image: require('../../assets/images/cate5.png'),
    bgColor: '#FFFBE5',
  },
  {
    id: 6,
    title: 'Cord Set',
    image: require('../../assets/images/cate6.png'),
    bgColor: '#E8F2FF',
  },
  {
    id: 7,
    title: 'Track Suit',
    image: require('../../assets/images/cate7.png'),
    bgColor: '#FFFBE5',
  },
  {
    id: 8,
    title: 'Women Lgging',
    image: require('../../assets/images/cate8.png'),
    bgColor: '#E8F2FF',
  },
  {
    id: 9,
    title: 'Inner Wear',
    image: require('../../assets/images/cate9.png'),
    bgColor: '#E8F2FF',
  },
  // {
  //   id: 10,
  //   title: 'Inner Wear',
  //   image: 'https://cdn-icons-png.flaticon.com/512/415/415748.png',
  //   bgColor: '#E8F2FF',
  // },{
  //   id: 11,
  //   title: 'Sleep Wear',
  //   image: require('../../assets/images/cate1.png'),
  //   bgColor: '#E8F2FF',
  // }
  // ,{
  //   id: 12,
  //   title: 'Sports Wear',
  //   image: require('../../assets/images/cate1.png'),
  //   bgColor: '#E8F2FF',
  // },
];

const Separator = () => <View style={styles.separator} />;

const Explore = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductList', { category: item.title });
      }}
      style={[
        styles.card,
        // { backgroundColor: item.bgColor }
      ]}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View
        style={{
          borderBottomColor: '#E0E0E0',
          borderBottomWidth: 0.5,
          paddingBottom: responsive.padding(10),
        }}
      >
        <HeaderHome />
      </View>

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
          ListHeaderComponent={() => (
            <View style={{ height: responsive.height(16) }} />
          )}
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
    // paddingTop: responsive.padding(16),
    // paddingBottom: 30,
  },
  listContent: {
    paddingHorizontal: responsive.padding(16),
    // paddingBottom: responsive.padding(16),
  },
  separator: {
    width: 10,
  },
  card: {
    flex: 1,
    borderRadius: responsive.width(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsive.margin(16),
    backgroundColor: '#F4F4F4',
    maxWidth: '47%',
    paddingVertical: responsive.padding(16),
    borderWidth: 0.5,
    borderColor: ColorString.secondary,
    // paddingVertical: 20,
  },
  image: {
    width: responsive.width(70),
    height: responsive.height(70),
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
