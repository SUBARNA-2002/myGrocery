/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPixel, heightPixel, fontPixel } from '../Utils/Utility'; // optional if you’re using pixel scaling
import { useNavigation } from '@react-navigation/native';
import {
  BookMarkIcon,
  FavouriteIcon,
  PlusIcon,
  StarIcon,
} from '../../assets/SvgConstants';
import { ColorString } from '../theme/AppColor';
import { responsive } from '../constants/Responsive';
import { fontFamily } from '../utils/font';

const Card = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Product-Details')}
    >
      <Image source={data?.image} style={styles.image} />
      <View style={{ padding: responsive.padding(8) }}>
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {data?.title}
          </Text>
          <Text style={styles.subtitle}>Shirt Polo</Text>
        </View>
        <View style={styles.footer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <Text style={styles.price}>₹{data?.price}</Text>
            <Text
              style={{
                fontSize: responsive.font(12),
                fontFamily: fontFamily.regular,
                color: '#888',
                textDecorationLine: 'line-through',
              }}
            >
              ₹{data?.originalPrice}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        <FavouriteIcon
          width={24}
          height={24}
          strokeColor={ColorString?.primary}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    // borderRadius: 12,
    borderWidth: 0.5,
    borderColor: ColorString?.secondary,
    width: responsive.width(140),

    // padding: 14,
    // width: responsive.width(140),
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 6,
    // elevation: 3,
    position: 'relative',
  },
  image: {
    // justifyContent: 'center',
    // alignSelf: 'center',
    width: responsive.width(140),
    height: responsive.height(140),
    resizeMode: 'cover',
    // marginBottom: 8,
  },
  title: {
    fontSize: responsive.font(14),
    fontFamily: fontFamily.regular,
    color: '#000',
    // marginBottom: 4,
  },
  subtitle: {
    fontSize: responsive.font(12),
    color: '#888',
    fontFamily: fontFamily.light,
    marginBottom: 8,
    paddingTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // borderWidth: 1,
  },
  price: {
    fontSize: responsive.font(12),
    fontFamily: fontFamily.regular,
    color: '#000',
  },
  addBtn: {
    // backgroundColor: '#4CAF50',
    width: responsive.width(30),
    height: responsive.width(30),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: ColorString?.primary,
  },
  plus: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
