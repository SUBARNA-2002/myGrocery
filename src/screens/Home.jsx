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
  ImageBackground,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// useNavigation removed (not used in this screen)
import { ColorString } from '../theme/AppColor';
import HeaderHome from '../components/HeaderHome';
import Card from '../components/Card';
import { responsive } from '../constants/Responsive';
import { LoacationIcon } from '../../assets/SvgConstants';
import Carousel from '../components/Carousel';
const Home = () => {
  const [selectSection, setSelectSection] = React.useState('New Arrivals');
  const insets = useSafeAreaInsets();
  const { width: SCREEN_WIDTH } = Dimensions.get('window');
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const BANNER_IMAGE_HEIGHT = 350;
  const BANNER_CONTAINER_PADDING_BOTTOM = 18;
  const pocketItems = [
    {
      id: 1,
      title: 'Trousers',
      price: '₹999',
      image: require('../../assets/images/photo.jpeg'),
    },
    {
      id: 2,
      title: 'Jeans',
      price: '₹1999',
      image: require('../../assets/images/photo2.jpeg'),
    },
    {
      id: 3,
      title: 'Shorts',
      price: '₹599',
      image: require('../../assets/images/photo3.jpeg'),
    },
    {
      id: 4,
      title: 'Sweatshirts',
      price: '₹499',
      image: require('../../assets/images/photo3.jpeg'),
    },
    {
      id: 5,
      title: 'Jeans',
      price: '₹1999',
      image: require('../../assets/images/photo2.jpeg'),
    },
  ];
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: responsive.padding(16),
            paddingBottom: responsive.padding(9),
            borderBottomWidth: 1,
            borderBottomColor: '#CBD5E4',
            marginTop: responsive.padding(9),

            // opacity: partsOpacity,
            // transform: [{ translateY: partsTranslate }],
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <LoacationIcon fill={ColorString.primary} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: ColorString.textSecondary,
              }}
            >
              Pincode | 754220
            </Text>
          </View>
          {/* <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: ColorString.primary,
            }}
          >
            Change
          </Text> */}
        </View>
        {/* Section Tab (converted to FlatList) */}
        <View style={{}}>
          {/** Tabs data */}
          {/** Using FlatList for better performance and selection handling */}
          {(() => {
            const tabs = [
              'New Arrivals',
              'Price Drop',
              'Men',
              'Women',
              'Kids',
              'Electronics',
            ];
            return (
              <FlatList
                data={tabs}
                horizontal
                nestedScrollEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, idx) => `${item}-${idx}`}
                contentContainerStyle={styles.sectionTabContainer}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => setSelectSection(item)}
                  >
                    <Text
                      style={[
                        styles.sectionTabTitle,
                        selectSection === item && {
                          fontWeight: '400',
                          // borderBottomWidth: 2,
                          // borderBottomColor: ColorString.primary,
                          color: ColorString.primary,
                        },
                      ]}
                    >
                      {item}
                    </Text>
                    <Text
                      style={{
                        paddingRight: 8,
                        color:
                          selectSection === item ? ColorString.primary : '#000',
                      }}
                    >
                      |
                    </Text>
                  </TouchableOpacity>
                )}
              />
            );
          })()}
        </View>
        {/* Carousel banner */}
        <View
          style={
            {
              // marginTop: responsive.padding(10),
              // borderWidth: 1,
            }
          }
        >
          <Carousel />
        </View>
      </View>
    );
  };

  const PocketFrinedly = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.card}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <View style={styles.textContainer}>
          <Text style={styles.priceText}>Under {item.price}</Text>
          <Text style={styles.titleText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <View style={styles.pocketContainer}>
        <Text style={styles.header}>Pocket Friendly Bargain!</Text>
        <Text style={styles.subHeader}>Where style matches savings</Text>

        <FlatList
          data={pocketItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  const GridSection = () => {
    const data = [
      {
        id: 1,
        image: require('../../assets/images/grid.jpg'),
      },
      {
        id: 2,
        image: require('../../assets/images/grid2.jpg'),
      },
      {
        id: 3,
        image: require('../../assets/images/grid3.jpg'),
      },
      {
        id: 4,
        image: require('../../assets/images/grid4.jpg'),
      },
      {
        id: 5,
        image: require('../../assets/images/grid5.jpg'),
      },
      {
        id: 6,
        image: require('../../assets/images/grid6.jpg'),
      },
      {
        id: 7,
        image: require('../../assets/images/grid7.jpg'),
      },
      {
        id: 8,
        image: require('../../assets/images/grid2.jpg'),
      },
      {
        id: 9,
        image: require('../../assets/images/grid3.jpg'),
      },
    ];
    return (
      <ImageBackground
        source={require('../../assets/images/bannerBg.png')}
        style={{
          paddingTop: responsive.padding(16),
          backgroundColor: '#c5a674ff',
          marginTop: responsive.padding(20),
          borderWidth: 5,
          borderColor: '#7A570A',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#ffffffff',
            textAlign: 'center',
          }}
        >
          ENTER THE BRANDVERSE
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#ecececff',
            textAlign: 'center',
            marginTop: responsive.padding(4),
            // marginBottom: responsive.padding(10),
          }}
        >
          Choose The Vibe
        </Text>
        <View
          style={{
            paddingVertical: responsive.padding(16),
          }}
        >
          <FlatList
            data={data}
            numColumns={3}
            keyExtractor={item => item.id.toString()}
            gap={responsive.width(12)}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              paddingHorizontal: responsive.padding(8),
            }}
            contentContainerStyle={{ paddingBottom: 8 }}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flex: 1,
                  marginHorizontal: responsive.width(6),
                  alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: '#00000022',
                  // marginBottom: responsive.height(12),
                }}
              >
                <View
                  style={{
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: responsive.height(100),
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      height: responsive.height(100),
                      width: responsive.width(100),
                      borderRadius: 8,
                    }}
                    resizeMode="cover"
                  />
                </View>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    );
  };
  const NewArrival = () => {
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
      <View
        style={{
          paddingTop: responsive.padding(16),
          backgroundColor: '#fff',
          // paddingHorizontal: responsive.width(16),
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#000',
            textAlign: 'left',
            paddingHorizontal: responsive.width(16),
          }}
        >
          NEW ARRIVALS
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#777',
            marginTop: responsive.padding(4),
            paddingHorizontal: responsive.width(16),
          }}
        >
          Fresh Styles Just For You
        </Text>
        {/* Grid of new arrivals */}
        <View>
          <FlatList
            data={newArrivalData}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: responsive.padding(16) }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Card data={item} />}
            ListHeaderComponent={() => (
              <View style={{ width: responsive.width(16) }} />
            )}
            ListFooterComponent={() => (
              <View style={{ width: responsive.width(16) }} />
            )}
            ItemSeparatorComponent={() => (
              <View style={{ width: responsive.width(16) }} />
            )}
          />
        </View>
      </View>
    );
  };
  const TrendReport = () => {
    return (
      <View
        style={[
          { marginTop: responsive.padding(10), backgroundColor: '#403F69' },
        ]}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#fff',
            textAlign: 'center',
            paddingTop: responsive.padding(16),
          }}
        >
          TREND REPORT
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: '#E3B550',
            textAlign: 'center',
            paddingTop: responsive.padding(4),
          }}
        >
          Fall 2025
        </Text>
        <ImageBackground
          source={require('../../assets/images/trendReport.png')}
          style={{
            width: SCREEN_WIDTH,
            height: responsive.height(300),
            marginTop: responsive.padding(12),
            justifyContent: 'flex-end',
            alignItems: 'right',
            borderWidth: 1,
          }}
          resizeMode="cover"
        >
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: responsive.font(18),
                fontWeight: '700',
                textAlign: 'right',
                // backgroundColor: 'rgba(0,0,0,0.4)',
                paddingHorizontal: responsive.padding(8),
                paddingVertical: responsive.padding(8),
              }}
            >
              TREND REPORT
            </Text>
            <Text
              style={{
                padding: responsive.padding(8),
                color: '#fff',
                fontSize: responsive.font(16),
                fontWeight: '600',
                textAlign: 'right',
                borderWidth: 1,
                borderColor: '#fff',
                marginHorizontal: responsive.padding(16),
                marginBottom: responsive.padding(16),
                alignSelf: 'flex-end',
              }}
            >
              SHOP NOW
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };
  const Footer = () => {
    return (
      <View
        style={{
          marginTop: responsive.padding(10),
          padding: responsive.padding(16),
          alignItems: 'center',
          backgroundColor: '#8F9FB8',
        }}
      >
        <Text
          style={{
            fontSize: responsive.font(16),
            fontWeight: '400',
            color: ColorString.primary,
            textAlign: 'center',
            paddingBottom: responsive.padding(4),
          }}
        >
          Always on. Never off-trend
        </Text>
        <Text
          style={{
            fontSize: responsive.font(14),
            fontWeight: '400',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          Finley crafted.
        </Text>
      </View>
    );
  };

  const data = [
    {
      key: 'pocketFriendly',
      render: PocketFrinedly,
    },
    {
      key: 'gridSection',
      render: GridSection,
    },
    {
      key: 'newArrival',
      render: NewArrival,
    },
    {
      key: 'trendReport',
      render: TrendReport,
    },
    {
      key: 'newArrival2',
      render: NewArrival,
    },
    {
      key: 'footer',
      render: Footer,
    },
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
        // translucent
      />
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: responsive.padding(12),
          backgroundColor: ColorString.screenColor,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 2,
          zIndex: 1,
        }}
      >
        <HeaderHome />
      </View>
      <AnimatedFlatList
        data={data}
        keyExtractor={item => item.key}
        renderItem={({ item }) => <item.render />}
        showsVerticalScrollIndicator={false}
        // ListFooterComponent={<View style={{ height: 50 }} />}
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
  sectionTabContainer: {
    flexDirection: 'row',

    gap: responsive.width(10),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CBD5E4',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
    // marginBottom: responsive.padding(10),
    paddingHorizontal: responsive.width(16),
    // remove flex so horizontal list can scroll
  },
  sectionTabTitle: {
    fontSize: responsive.font(16),
    fontWeight: '300',
    color: '#000',
    // paddingRight: responsive.width(15),
    // backgroundColor: '#F5F5F5',
    paddingVertical: responsive.padding(10),
    marginRight: responsive.width(12),
    textTransform: 'uppercase',
    // borderRightWidth: 1,

    // borderRadius: responsive.padding(20),
  },
  card: {
    backgroundColor: '#fff',
    // borderRadius: 12,
    marginRight: responsive.width(16),
    overflow: 'hidden',
    width: responsive.width(130),
    // elevation: 2,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
    borderWidth: 0.5,
    borderColor: ColorString.secondary,
  },
  image: {
    width: '100%',
    height: responsive.height(130),
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
  },
  priceText: {
    color: '#777',
    fontSize: 13,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  pocketContainer: {
    paddingHorizontal: responsive.padding(16),
    backgroundColor: '#fff',
  },
  header: {
    fontSize: responsive.font(18),
    fontWeight: '700',
    color: '#000',
    paddingBottom: responsive.padding(2),
  },
  subHeader: {
    color: '#777',
    marginBottom: 15,
  },
});
