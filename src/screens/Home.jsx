/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
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
      <View
        style={{
          backgroundColor: ColorString.secondary,
        }}
      >
        <HeaderHome />
        {/* searchBar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search Store"
            style={styles.searchInput}
            placeholderTextColor={'#A0A0A0'}
          />
        </View>
      </View>
    );
  };
  const BannerSection = () => {
    return (
      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: 18,
          backgroundColor: ColorString.secondary,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
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
  const DealsOfDay = () => {
    return (
      <View
        style={{
          backgroundColor: '#4392F9',
          padding: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          margin: 16,
          borderRadius: 10,
        }}
      >
        <View>
          <Text
            style={{
              color: ColorString.white,
              fontSize: 25,
              fontWeight: '600',
            }}
          >
            Deal of the Day
          </Text>
          <Text
            style={{
              color: ColorString.white,
              fontSize: 18,
              fontWeight: '400',
            }}
          >
            22h 55m 20s remaining{' '}
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: ColorString.white,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: ColorString.white,
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            View all
          </Text>
          {/* <RightArrow /> */}
        </View>
      </View>
    );
  };
  const AllFeaturedSection = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            marginHorizontal: 16,
            color: '#000000DE',
            marginTop: 10,
          }}
        >
          All Featured
        </Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            paddingVertical: 16,
            paddingLeft: 16,
            paddingRight: 16,
          }}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          renderItem={({ item }) => {
            return (
              <View style={{ alignItems: 'center' }}>
                <View
                  style={{
                    padding: 10,
                    backgroundColor: ColorString?.secondary,
                    borderRadius: 50,
                  }}
                >
                  <Image
                    source={require('../../assets/images/tamato.png')}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 50,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    marginTop: 8,
                  }}
                >
                  Tamato
                </Text>
              </View>
            );
          }}
        />
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
    { key: 'deals', render: DealsOfDay },
    {
      key: 'allfeatured',
      render: AllFeaturedSection,
    },
    {
      key: 'grocery',
      render: GrocerySection,
    },
    {
      key: 'bestselling',
      render: BestSellingSection,
    },
    {
      key: 'banner-2nd',
      render: BannerSection,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ColorString.white,
        paddingTop: insets.top,
      }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorString.secondary}
        translucent
      />
      <FlatList
        data={data}
        keyExtractor={item => item.key}
        renderItem={({ item }) => <item.render />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 50 }} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 16,
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderColor: ColorString?.primary,
  },
  searchInput: {
    fontSize: 16,
    color: '#000',
  },
});
