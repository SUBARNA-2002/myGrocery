/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SectionHeader = ({ title,onPress }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#000000DE',
        }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: '#53B175',
            fontWeight: 'semi-bold',
            fontSize: 16,
            textDecorationLine: 'underline',
          }}
        >
          See all
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({});
