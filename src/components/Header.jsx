/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LeftChevelon } from '../../assets/SvgConstants';
import { ColorString } from '../theme/AppColor';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
        marginBottom: 16,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          left: 16,
          top: 0,
          bottom: 0,
          justifyContent: 'center',
          elevation: 1,
          zIndex: 1,
        }}
      >
          <LeftChevelon fill={ColorString.black} />
      </TouchableOpacity>

      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
});
