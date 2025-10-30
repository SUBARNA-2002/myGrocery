import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CartIcon } from '../../assets/SvgConstants';
import { ColorString } from '../theme/AppColor';
import { responsive } from '../constants/Responsive';
import { fontFamily } from '../utils/font';
const Btn = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.addToCart} onPress={onPress}>
      {/* <CartIcon height={20} fillColor={ColorString.white} /> */}
      <Text
        style={{
          fontSize: responsive.font(14),
          fontFamily: fontFamily.bold,
          color: ColorString.white,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  addToCart: {
    backgroundColor: ColorString?.primary,
    flexDirection: 'row',
    alignItems: 'center',

    gap: responsive.padding(6),
    borderWidth: 0.5,
    borderColor: ColorString.primary,
    justifyContent: 'center',
    height: responsive.height(40),
    borderRadius: responsive.padding(5),
  },
});
