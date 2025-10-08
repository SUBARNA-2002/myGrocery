/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ColorString } from '../theme/AppColor';
import HeaderHome from '../components/HeaderHome';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import BannerCard from '../components/BannerCard';
const Home = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const HeaderSection = () => {
    return (
      <View>
        <HeaderHome />
        {/* searchBar */}
        <View style={{ padding: 16 }}>
          <TextInput
            placeholder="Search Store"
            style={{
              borderWidth: 1,
              borderColor: ColorString.disableBtnColor,
              borderRadius: 15,
              backgroundColor: '#F2F3F2',
              paddingHorizontal: 10,
            }}
          />
        </View>
      </View>
    );
  };
  const BannerSection = () => {
    return (
      <View style={{ paddingHorizontal: 16 }}>
        <Image
          source={require('../../assets/images/banner.png')}
          style={{
            width: '100%',
            height: 130,
            borderRadius: 10,
          }}
          resizeMode="cover"
        />
      </View>
    );
  };
  const ExclusiveSection = () => {
    return (
      <View>
        {/* Exclusive section */}
        <SectionHeader
          title="Exclusive Offer"
          onPress={() => navigation.navigate('SignIn')}
        />
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <Card />}
            contentContainerStyle={{
              paddingVertical: 16,
              paddingLeft: 16,
              paddingRight: 16,
            }}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          />
        </View>
      </View>
    );
  };

  const BestSellingSection = () => {
    return (
      <View>
        {/* Best Selling */}
        <SectionHeader title="Best Selling" />
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <Card />}
            contentContainerStyle={{
              paddingVertical: 16,
              paddingLeft: 16,
              paddingRight: 16,
            }}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          />
        </View>
      </View>
    );
  };

  const GrocerySection = () => {
    return (
      <View>
        {/* Grocery */}
        <SectionHeader title="Groceries" />
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <BannerCard />}
            contentContainerStyle={{
              paddingVertical: 16,
              paddingLeft: 16,
              paddingRight: 16,
            }}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          />
        </View>
      </View>
    );
  };

  const data = [
    {
      key: 'header',
      render: HeaderSection,
    },
    {
      key: 'banner',
      render: BannerSection,
    },
    {
      key: 'exclusive',
      render: ExclusiveSection,
    },
    {
      key: 'bestselling',
      render: BestSellingSection,
    },  
    {
      key: 'banner-2nd',
      render: BannerSection,
    },
    {
      key: 'grocery',
      render: GrocerySection,
    },
  ]

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ColorString.white,
        paddingTop: insets.top,
      }}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <item.render />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 50 }} />}
      />

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
