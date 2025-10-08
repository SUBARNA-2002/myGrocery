/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BannerCard = () => {
  return (
    <View style={styles.conatiner}>
      <Image
        source={require('../../assets/images/pulses.png')}
        style={{ width: 70, height: 70 }}
        resizeMode="contain"
      />

      <Text style={styles.title}>Pulses</Text>
    </View>
  )
}

export default BannerCard

const styles = StyleSheet.create({
  conatiner: {
    padding: 12,
    backgroundColor: '#F8A44B80',
    width: 200,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
})