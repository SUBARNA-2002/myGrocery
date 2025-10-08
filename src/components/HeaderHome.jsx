/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FavouriteIcon } from '../../assets/SvgConstants';

const HeaderHome = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: 'black',
            borderRadius: 50,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#000000DE',
            }}
          >
            Good Morning
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#000000DE',
            }}
          >
            Subarna
          </Text>
        </View>
      </View>
      <View>
        <FavouriteIcon width={24} height={24} fill="#53B175" />
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({});
