/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  
  View,
  Animated,
  
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ColorString } from '../theme/AppColor';
import HeaderHome from '../components/HeaderHome';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import BannerCard from '../components/BannerCard';
import { responsive } from '../constants/Responsive';
import {
  
  LoacationIcon,
} from '../../assets/SvgConstants';
const Home = () => {
  const[selectSection,setSelectSection]=React.useState('New Arrivals');
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { width: SCREEN_WIDTH } = Dimensions.get('window');
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const BANNER_IMAGE_HEIGHT = 350;
  const BANNER_CONTAINER_PADDING_BOTTOM = 18;
  
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
    // translateY removed (not used) — we use partsOpacity/translate for collapsing

    // scale up when pulling down (negative scroll) - keep this on image
    const scale = scrollY.interpolate({
      inputRange: [-150, 0],
      outputRange: [1.3, 1],
      extrapolate: 'clamp',
    });

    // opacity for parts that should disappear when scrolled
    const partsOpacity = scrollY.interpolate({
      inputRange: [0, BANNER_IMAGE_HEIGHT / 2, BANNER_IMAGE_HEIGHT],
      outputRange: [1, 0.3, 0],
      extrapolate: 'clamp',
    });

    const partsTranslate = scrollY.interpolate({
      inputRange: [0, BANNER_IMAGE_HEIGHT],
      outputRange: [0, -30],
      extrapolate: 'clamp',
    });

    return (
      <View
        style={{
          backgroundColor: ColorString.headerColor,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          // transform: [{ translateY }],
        }}
      >
        {/* <Animated.View style={{ paddingTop: insets.top, opacity: partsOpacity }}>
          <HeaderHome />
        </Animated.View> */}
        {/* Pincode */}
        <Animated.View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: responsive.padding(16),
            paddingBottom: responsive.padding(12),
            opacity: partsOpacity,
            transform: [{ translateY: partsTranslate }],
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <LoacationIcon />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#000',
              }}
            >
              Pincode | 754220
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#000',
            }}
          >
            Change
          </Text>
        </Animated.View>
        {/* Section Tab (converted to FlatList) */}
        <View style={{ }}>
          {/** Tabs data */}
          {/** Using FlatList for better performance and selection handling */}
          {(() => {
            const tabs = ['New Arrivals', 'Price Drop', 'Men', 'Women', 'Kids', 'Electronics'];
            return (
              <FlatList
                data={tabs}
                horizontal
                nestedScrollEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, idx) => `${item}-${idx}`}
                contentContainerStyle={styles.sectionTabContainer}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => setSelectSection(item)}>
                    <Text style={[
                      styles.sectionTabTitle,
                      selectSection === item && {
                        borderBottomWidth: 2,
                        borderBottomColor: ColorString.primary,
                        color: ColorString.primary,
                      },
                    ]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            );
          })()}
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
            source={require('../../assets/images/BigBanner.png')}
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
      </View>
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
        paddingTop: insets.top,
      }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorString.secondary}
        // translucent
      />
       <View style={{
          paddingBottom: responsive.padding(12),
          // shadowOpacity: 0.2,
          // shadowRadius: 2,
          // elevation: 2,
          // shadowColor: '#000',
          // backgroundColor:'red'
       }}>
          <HeaderHome />
        </View>
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

const styles = StyleSheet.create({
  sectionTabContainer:{
    flexDirection: 'row',
    gap: responsive.width(10),
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
  marginBottom: responsive.padding(14),
  paddingHorizontal: responsive.width(16),
  // remove flex so horizontal list can scroll
  },
  sectionTabTitle:{
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    // paddingRight: responsive.width(15),
    // backgroundColor: '#F5F5F5',
    paddingVertical: responsive.padding(5),
    marginRight: responsive.width(12),
    // borderRadius: responsive.padding(20),
  }
});
