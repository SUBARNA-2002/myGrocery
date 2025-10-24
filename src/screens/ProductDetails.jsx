/* eslint-disable react/no-unstable-nested-components */
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { ColorString } from '../theme/AppColor';
import HeaderHome from '../components/HeaderHome';
import { responsive } from '../constants/Responsive';
import ListCard from '../components/ListCard';
import {
  CartIcon,
  CashIcon,
  FavouriteIcon,
  ReturnExchange,
} from '../../assets/SvgConstants';
import { TextInput } from 'react-native-gesture-handler';

const ProductDetails = () => {
  const insets = useSafeAreaInsets();
  const detailData = [
    {
      id: 1,
      image: require('../../assets/images/detail1.jpeg'),
    },
    {
      id: 2,
      image: require('../../assets/images/detail2.jpeg'),
    },
    {
      id: 3,
      image: require('../../assets/images/detail3.jpeg'),
    },
  ];
  const size = [
    {
      id: 1,
      title: 'XS',
    },
    {
      id: 2,
      title: 'S',
    },
    {
      id: 3,
      title: 'M',
    },
    {
      id: 4,
      title: 'L',
    },
    {
      id: 5,
      title: 'XL',
    },
  ];
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <View style={styles.headerWrapper}>
        <HeaderHome back />
      </View>
      <ScrollView>
        <View
          style={{
            position: 'relative',
          }}
        >
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={detailData}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ width: responsive.width(10) }} />
            )}
            renderItem={({ item }) => (
              <View style={styles.cardWrapper}>
                <Image source={item.image} style={styles.image} />
              </View>
            )}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: responsive.width(16),
              right: responsive.width(16),
              height: responsive.height(35),
              width: responsive.height(35),
              backgroundColor: '#fafafa76',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FavouriteIcon fillColor={'transparent'} strokeColor={'white'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: responsive.padding(4),
            gap: responsive.padding(5),
            backgroundColor: '#70a5ba6b',
          }}
        >
          <FavouriteIcon height={20} width={20} />
          <Text
            style={{
              fontSize: responsive.font(14),
              color: '#4b3b3bff',
            }}
          >
            7.2k shoppers wishlisted in last 30 days
          </Text>
        </View>
        <View
          style={{
            padding: responsive.padding(16),
          }}
        >
          <Text style={styles.title}>
            Men Regular Fit Shacket with Patch Pocket
          </Text>
          <Text
            style={{
              fontSize: responsive.font(12),
              color: '#3A3A3A90',
              fontWeight: '400',
            }}
          >
            Men Oversized Hoodies
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: responsive.padding(10),
              gap: responsive.padding(8),
            }}
          >
            <Text style={styles.price}>₹2499</Text>
            <Text
              style={{
                fontSize: responsive.font(14),
                color: '#30303090',
                textDecorationLine: 'line-through',
                textDecorationColor: 'gray',
                fontWeight: '400',
              }}
            >
              ₹3000
            </Text>
            <Text
              style={{
                color: '#2f8a41ff',
                fontSize: responsive.font(14),
                fontWeight: '500',
              }}
            >
              69% off
            </Text>
          </View>
          <Text
            style={{
              fontSize: responsive.size(10),
              color: '#313131',
              fontWeight: '400',
              paddingTop: responsive.padding(3),
            }}
          >
            Price incl. of all taxes
          </Text>
          {/* Size Section */}
          <View
            style={{
              paddingTop: responsive.padding(16),
            }}
          >
            <Text style={styles.sizeTitle}>Select Size</Text>
            <View>
              <FlatList
                horizontal
                data={size}
                ItemSeparatorComponent={() => (
                  <View style={{ width: responsive.width(16) }} />
                )}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.textContainer}>
                    <Text style={styles.size}>{item?.title}</Text>
                  </View>
                )}
              />
            </View>
          </View>
          {/* Pin Code */}
          <View
            style={{
              marginTop: responsive.padding(20),
            }}
          >
            <Text style={styles.sizeTitle}>Delivery & Return Details</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: responsive.padding(10),
                backgroundColor: '#3f677645',
                borderRadius: responsive.padding(5),
                alignItems: 'center',
                paddingRight: responsive.padding(10),
              }}
            >
              <TextInput
                placeholder="Pin Code"
                style={styles.textInput}
                keyboardType="numeric"
                maxLength={6}
                placeholderTextColor={'#30303090'}
              />
              <Text
                style={{
                  color: '#1f68c1ff',
                  fontSize: responsive.font(12),
                  fontWeight: '500',
                }}
              >
                Check
              </Text>
            </View>
            <View
              style={{
                marginTop: responsive.padding(20),
                borderWidth: 0.5,
                padding: responsive.padding(16),
                borderRadius: responsive.padding(5),
                borderColor: '#30303030',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: responsive.padding(10),
                }}
              >
                <ReturnExchange height={20} width={20} />
                <Text style={styles.exchangeTitle}>
                  10 day Return and Exchange
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: responsive.padding(10),
                  paddingTop: responsive.padding(15),
                }}
              >
                <CashIcon />
                <Text style={styles.exchangeTitle}>COD available</Text>
              </View>
            </View>
          </View>

          {/* Product Deatils */}
          <View
            style={{
              marginTop: responsive.padding(20),
            }}
          >
            <Text style={styles.sizeTitle}>Details</Text>
            <Text style={styles.description}>
              Make your holiday gathering a little less formal in this casual
              jacket, made from 100% cotton. Keeping you center stage, this
              light gray Relaxed fit piece elevates your outerwear collection to
              a new level.
            </Text>
            <Text
              style={[
                styles.sizeTitle,
                {
                  paddingTop: responsive.padding(10),
                },
              ]}
            >
              Fit
            </Text>
            <Text style={styles.description}>Relaxed Fit</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          styles.footerComponent,
          {
            paddingBottom: insets.bottom + responsive.padding(5),
          },
        ]}
      >
        <View style={styles.addToCart}>
          <CartIcon height={20} />
          <Text
            style={{
              fontSize: responsive.font(14),
              fontWeight: '400',
            }}
          >
            Buy Now
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorString.white,
  },
  headerWrapper: {
    paddingBottom: responsive.padding(10),
  },
  cardWrapper: {
    flex: 1,
  },
  image: {
    width: responsive.height(260),
    height: responsive.height(350),
    resizeMode: 'cover',
  },
  title: {
    fontSize: responsive.font(14),
    color: ColorString.black,
    fontWeight: '500',
    paddingBottom: responsive.padding(3),
  },
  price: {
    fontSize: responsive.font(14),
    color: ColorString.black,
    fontWeight: '500',
  },
  sizeTitle: {
    fontSize: responsive.font(14),
    fontWeight: '500',
    color: '#303030',
  },
  textContainer: {
    width: responsive.width(40),
    height: responsive.height(27),
    borderWidth: 0.5,
    borderRadius: responsive.padding(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsive.padding(10),
  },
  size: {
    fontSize: responsive.font(14),
    color: '#303030',
  },
  footerComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive.padding(10),
    paddingHorizontal: responsive.padding(16),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
    paddingTop: responsive.padding(10),
  },
  addToCart: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: responsive.padding(6),
    borderWidth: 0.5,
    borderColor: '#30303090',
    justifyContent: 'center',
    height: responsive.height(35),
    borderRadius: responsive.padding(5),
  },
  textInput: {
    flex: 1,
    marginRight: responsive.padding(20),
    paddingVertical: responsive.padding(14),
    color: '#1f68c1ff',
    paddingHorizontal: responsive.padding(10),
    fontSize: responsive.font(12),
  },
  exchangeTitle: {
    fontSize: responsive.font(14),
    color: '#303030',
    fontWeight: '600',
  },
  description: {
    fontSize: responsive.font(12),
    color: '#303030',
    fontWeight: '400',
    paddingTop: responsive.padding(5),
  },
});
