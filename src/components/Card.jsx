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

const Card = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Product-Details')}
    >
      <Image
        source={require('../../assets/images/banana.png')}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>Organic Bananas</Text>
        <Text style={styles.subtitle}>7pcs, Priceg</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4,
        // borderWidth:1
        }}>
        <StarIcon />
        <Text style={{
          color:'#888',
          fontSize:12,
          fontWeight:'500'
        }}>4.6(12.3k)</Text>
      </View>
      <View style={{
        marginVertical:responsive.padding(6),
        paddingHorizontal:responsive.padding(6),
        paddingVertical:responsive.padding(2),
        backgroundColor: ColorString?.secondary,
        borderRadius: 4,
        alignSelf:'flex-start',
      }}>
        <Text>10% OFF</Text>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <Text style={styles.price}>$4.99</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#888',
              textDecorationLine: 'line-through',
            }}
          >
            $7.99
          </Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <PlusIcon />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        <BookMarkIcon width={24} height={24} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    width: 160,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    position: 'relative',
  },
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
    fontWeight: '500',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // borderWidth: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
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
