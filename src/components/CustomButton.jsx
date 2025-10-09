/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ title, onPress = () => {}, bgColor, color,borderColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          borderWidth: borderColor ? 1 : 0,
          borderColor: borderColor ? borderColor : 'transparent',
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: color,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    minWidth: '90%',
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
