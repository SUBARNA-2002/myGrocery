/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { ColorString } from '../theme/AppColor';
import { SearchIcon } from '../../assets/SvgConstants';
import { responsive } from '../constants/Responsive';
import { fontFamily } from '../utils/font';

const SearchBar = ({ from }) => {
  return (
    <View
      style={[
        styles.searchContainer,
        from === 'HomeScreen' ? { flex: 1 } : { flexGrow: 0, marginBottom: 20 },
      ]}
    >
      <TextInput
        placeholder="Search Store"
        style={styles.searchInput}
        placeholderTextColor={'#A0A0A0'}
      />
      <SearchIcon fillColor={'#A0A0A0'} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    // backgroundColor: ColorString.secondary,

    backgroundColor: '#F5F5F5',
    borderRadius: responsive.padding(8),
    paddingHorizontal: 15,
    height: responsive.height(38),
    justifyContent: 'space-between',
    // marginBottom: 20,
    // marginHorizontal: 16,
    // borderWidth: 0.5,
    // borderColor: ColorString?.primary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    // flex: 1,
    // flexGrow: 1,
  },
  searchInput: {
    fontSize: responsive.font(14),
    color: '#000',
    flex: 1,
    fontFamily: fontFamily.regular,
  },
});
