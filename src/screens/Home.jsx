/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ColorString } from '../theme/AppColor';
import HeaderHome from '../components/HeaderHome';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import BannerCard from '../components/BannerCard';
import SearchBar from '../components/SearchBar';
import { responsive } from '../constants/Responsive';
import { BookMarkIcon } from '../../assets/SvgConstants';
const Home = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { width: SCREEN_WIDTH } = Dimensions.get('window');
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const BANNER_IMAGE_HEIGHT = 130;
  const BANNER_CONTAINER_PADDING_BOTTOM = 18;
  const BANNER_TOTAL_HEIGHT =
    BANNER_IMAGE_HEIGHT + BANNER_CONTAINER_PADDING_BOTTOM;
  // const HeaderSection = () => {
  //   return (
  //     <View
  //       style={{
  //         backgroundColor: ColorString.headerColor,
  //         paddingTop: insets.top,
  //       }}
  //     >
  //       <HeaderHome />
  //       {/* searchBar */}
  //       <View style={styles.searchContainer}>
  //         <TextInput
  //           placeholder="Search Store"
  //           style={styles.searchInput}
  //           placeholderTextColor={'#A0A0A0'}
  //         />
  //       </View>
  //     </View>
  //   );
  // };
  // Combined header + animated banner (parallax)
  const HeaderBanner = () => {
    // translate slower than scroll for parallax effect (apply to whole header)
    const translateY = scrollY.interpolate({
      inputRange: [0, BANNER_TOTAL_HEIGHT],
      outputRange: [0, -BANNER_TOTAL_HEIGHT / 2],
      extrapolate: 'clamp',
    });

    // scale up when pulling down (negative scroll) - keep this on image
    const scale = scrollY.interpolate({
      inputRange: [-150, 0],
      outputRange: [1.3, 1],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={{
          backgroundColor: ColorString.headerColor,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          transform: [{ translateY }],
        }}
      >
        <View
          style={{
            paddingTop: insets.top,
          }}
        >
          <HeaderHome />
          <View
            style={{
              flexGrow: 1,
              paddingTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 15,

            }}
          >
            <SearchBar from={'HomeScreen'} />
            <TouchableOpacity style={{
              borderWidth:1,
              borderColor:ColorString?.primary,
              borderRadius:10,
              padding:10,
              marginRight:16,
              height:responsive.height(40),
              width:responsive.width(50),
              justifyContent:'center',
              alignItems:'center'
            }}>
              <BookMarkIcon/>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 16,
            paddingBottom: BANNER_CONTAINER_PADDING_BOTTOM,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            overflow: 'hidden',
          }}
        >
          <Animated.Image
            source={require('../../assets/images/banner.png')}
            style={{
              width: SCREEN_WIDTH - 32,
              height: BANNER_IMAGE_HEIGHT,
              borderRadius: 10,
              transform: [{ scale }],
              alignSelf: 'center',
            }}
            resizeMode="cover"
          />
        </View>
      </Animated.View>
    );
  };
  const ExclusiveSection = () => {
    return (
      <View
        style={{
          backgroundColor: ColorString.white,
        }}
      >
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
              fontSize: 18,
              fontWeight: '600',
              paddingBottom: 6,
            }}
          >
            Deal of the Day
          </Text>
          <Text
            style={{
              color: ColorString.white,
              fontSize: 14,
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
              fontSize: 14,
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
  const OfferSection = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          backgroundColor: ColorString.white,
          borderRadius: 10,
          justifyContent: 'space-between',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 4,
          marginHorizontal: 16,
          marginVertical: 10,
          padding: 16,
        }}
      >
        <View>
          <Image
            source={require('../../assets/images/offer.png')}
            style={{
              width: '75',
              height: 75,
              resizeMode: 'cover',
              marginBottom: 10,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#000',
              paddingBottom: 6,
            }}
          >
            Special Offers
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#808488',
            }}
          >
            We make sure you get the offer you need at best prices
          </Text>
        </View>
      </View>
    );
  };
  const SaleSection = () => {
    return (
      <View
        style={{
          backgroundColor: ColorString.white,
          borderRadius: 10,
          marginHorizontal: 16,
          marginVertical: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 4,
        }}
      >
        <Image
          source={require('../../assets/images/sale.png')}
          style={{
            width: '100%',
            height: 150,
            resizeMode: 'cover',
            marginVertical: 10,
            paddingHorizontal: 16,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 16,
            marginBottom: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: '#000',
                paddingBottom: 5,
              }}
            >
              New Arrivals{' '}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#808488',
              }}
            >
              Summer’ 25 Collections
            </Text>
          </View>
          <View>
            <Text
              style={{
                padding: 10,
                paddingHorizontal: 16,
                borderRadius: 8,
                backgroundColor: '#F83758',
                fontSize: 14,
                fontWeight: '600',
                color: ColorString.white,
              }}
            >
              View all
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const data = [
    // {
    //   key: 'header',
    //   render: HeaderSection,
    // },
    // banner is now part of the list header (HeaderBanner)
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
      key: 'sale',
      render: SaleSection,
    },
    {
      key: 'bestselling',
      render: BestSellingSection,
    },
    {
      key: 'offer',
      render: OfferSection,
    },
    {
      key: 'grocery',
      render: GrocerySection,
    },

    // {
    //   key: 'banner-2nd',
    //   render: BannerSection,
    // },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ColorString.screenColor,
        // paddingTop: insets.top,
      }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorString.secondary}
        translucent
      />
      <AnimatedFlatList
        data={data}
        keyExtractor={item => item.key}
        renderItem={({ item }) => <item.render />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 50 }} />}
        ListHeaderComponent={<HeaderBanner />}
        // wire scroll to animated value for parallax
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
