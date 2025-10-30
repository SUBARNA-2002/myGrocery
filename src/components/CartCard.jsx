import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { responsive } from '../constants/Responsive';
import { fontFamily } from '../utils/font';
import { ColorString } from '../theme/AppColor';

const CartCard = () => {
  return (
    <View
      style={{
        position: 'relative',
        flexDirection: 'row',
        gap: responsive.width(16),
        borderBottomWidth: 1,
        borderColor: '#E2E2E2',
        borderRadius: 8,
        padding: responsive.padding(16),
        backgroundColor: '#fff',
      }}
    >
      <View>
        <Image
          source={require('../../assets/images/cate1.png')}
          style={styles.Image}
        />
      </View>
      <View>
        <Text style={styles.title}>Lining Maroon Shirt</Text>
        <Text style={styles.subtitle}>Men OverSized Hoodies</Text>
        <View style={styles.sizeRow}>
          <View style={styles.sizeContainer}>
            <Text style={styles.sizeLabel}>Size</Text>
            <Text
              style={{
                fontSize: responsive.font(12),
                fontWeight: fontFamily.light,
                color: ColorString.black,
              }}
            >
              M
            </Text>
          </View>
          <View style={styles.sizeContainer}>
            <Text style={styles.sizeLabel}>Quantity</Text>
            <Text
              style={{
                fontSize: responsive.font(12),
                fontWeight: fontFamily.light,
                color: ColorString.black,
              }}
            >
              1
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingTop: responsive.padding(10),
            flexDirection: 'row',
            gap: responsive.width(8),
          }}
        >
          <Text
            style={{
              fontSize: responsive.font(14),
              fontFamily: fontFamily.bold,
              color: ColorString.primary,
            }}
          >
            ₹1500
          </Text>
          <Text
            style={{
              fontSize: responsive.font(14),
              textDecorationLine: 'line-through',
              fontFamily: fontFamily.regular,
              color: '#888',
            }}
          >
            ₹1500
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.dltstyle}>
        <Text style={{ color: '#fff', fontSize: responsive.font(12) }}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  Image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: responsive.font(14),
    fontWeight: fontFamily.regular,
    color: '#000',
    paddingBottom: responsive.padding(2),
  },
  subtitle: {
    fontSize: responsive.font(12),
    fontWeight: fontFamily.light,
    color: '#888',
  },
  sizeRow: {
    flexDirection: 'row',
    gap: responsive.width(10),
    paddingTop: responsive.padding(10),
  },
  sizeLabel: {
    fontSize: responsive.font(12),
    fontWeight: fontFamily.light,
    color: '#888',
    // paddingBottom: responsive.padding(4),
  },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive.width(8),
    backgroundColor: '#F6F7F9',
    paddingHorizontal: responsive.padding(8),
    paddingVertical: responsive.padding(4),
    borderRadius: 6,
  },
  dltstyle: {
    position: 'absolute',
    top: responsive.padding(10),
    right: responsive.padding(10),
    backgroundColor: '#a52424ee',
    width: responsive.width(24),
    height: responsive.width(24),
    borderRadius: responsive.width(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
