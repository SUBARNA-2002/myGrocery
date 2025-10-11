import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { ColorString } from '../theme/AppColor';
import { SearchIcon } from '../../assets/SvgConstants';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
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
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'space-between',
    marginBottom: 20,
    // marginTop: 16,
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderColor: ColorString?.primary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchInput: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
});
