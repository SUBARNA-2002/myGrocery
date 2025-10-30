import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HeaderHome from '../components/HeaderHome';
import { ColorString } from '../theme/AppColor';
import CartCard from '../components/CartCard';
import { fontFamily } from '../utils/font';
import { responsive } from '../constants/Responsive';
import { CouponSvg } from '../../assets/SvgConstants';
import Btn from '../components/Btn';
const Cart = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: ColorString.screenColor }}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <HeaderHome title="My Cart" back />
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.cardContainer}>
          <CartCard />
          <CartCard />
        </View>
        <View
          style={{
            padding: responsive.padding(16),
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsive.width(6),
              paddingBottom: responsive.padding(8),
            }}
          >
            <CouponSvg height={18} width={18} />
            <Text style={styles.couponText}>Apply Coupon</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: ColorString.secondary,
              borderRadius: responsive.padding(5),
              alignItems: 'center',
              paddingRight: responsive.padding(10),
            }}
          >
            <TextInput
              placeholder="Enter Code"
              style={styles.textInput}
              // keyboardType="numeric"
              placeholderTextColor={'#30303090'}
            />
            <Text
              style={{
                color: ColorString.primary,
                fontSize: responsive.font(12),
                fontWeight: '600',
              }}
            >
              Apply
            </Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View
          style={{ padding: responsive.padding(16), gap: responsive.height(8) }}
        >
          <Text style={styles.orderTitle}>Order Payment Details</Text>
          <View style={styles.OrderRow}>
            <Text style={styles.orderSubtitle}>Order Amount</Text>
            <Text style={styles.orderSubtitle}>₹22,000</Text>
          </View>
          <View style={styles.OrderRow}>
            <Text style={styles.orderSubtitle}>Order Saving</Text>
            <Text style={styles.orderSubtitle}>-₹800</Text>
          </View>
          <Text style={styles.orderSubtitle}>Conveinence Fee</Text>
          <View
            style={[
              styles.OrderRow,
              {
                paddingLeft: responsive.padding(10),
              },
            ]}
          >
            <Text style={styles.orderSubtitle}>Delivery Fee</Text>
            <Text style={styles.orderSubtitle}>₹99.00</Text>
          </View>
          <View
            style={[
              styles.OrderRow,
              {
                paddingLeft: responsive.padding(10),
              },
            ]}
          >
            <Text style={styles.orderSubtitle}>Platform Fee</Text>
            <Text style={styles.orderSubtitle}>₹99.00</Text>
          </View>
          <View
            style={[
              styles.OrderRow,
              {
                borderTopWidth: 0.5,
                borderTopColor: '#E0E0E0',
                paddingTop: responsive.padding(8),
              },
            ]}
          >
            <Text
              style={[
                styles.orderSubtitle,
                {
                  fontFamily: fontFamily.bold,
                  color: ColorString.black,
                  fontSize: responsive.font(12),
                },
              ]}
            >
              Order Total
            </Text>
            <Text
              style={[
                styles.orderSubtitle,
                {
                  fontFamily: fontFamily.bold,
                  color: ColorString.black,
                  fontSize: responsive.font(12),
                },
              ]}
            >
              ₹21,000
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: responsive.padding(16),
          backgroundColor: ColorString.white,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Btn title={'Checkout'} />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  header: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    backgroundColor: ColorString.headerColor,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 1,
  },
  cardContainer: {
    // flex: 1,
  },
  couponText: {
    fontSize: responsive.font(14),
    fontFamily: fontFamily.bold,
    color: ColorString.black,
  },
  textInput: {
    flex: 1,
    marginRight: responsive.padding(20),
    paddingVertical: responsive.padding(14),
    color: ColorString.primary,
    paddingHorizontal: responsive.padding(10),
    fontSize: responsive.font(12),
  },
  separator: {
    height: responsive.height(4),
    backgroundColor: ColorString.secondary,
    // marginTop: responsive.margin(16),
  },
  OrderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderTitle: {
    fontSize: responsive.font(14),
    fontFamily: fontFamily.bold,
    color: ColorString.black,
  },
  orderSubtitle: {
    fontSize: responsive.font(12),
    fontFamily: fontFamily.regular,
    color: '#444',
  },
});
