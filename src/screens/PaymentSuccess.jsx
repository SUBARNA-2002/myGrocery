/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PaymentSuccessIcon } from '../../assets/SvgConstants';

const PaymentSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Success Icon */}
      <View style={styles.circleContainer}>
        <View style={styles.checkCircle}>
          <Text style={styles.checkMark}>✓</Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Your Order has been accepted</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Your items have been placed and are on their way to being processed
      </Text>

      {/* Track Order Button */}
      <TouchableOpacity
        style={styles.trackBtn}
        onPress={() => navigation.navigate('TrackOrder')}
      >
        <Text style={styles.trackBtnText}>Track Order</Text>
      </TouchableOpacity>

      {/* Back to Home */}
      <TouchableOpacity onPress={() => navigation.navigate('HomeTab')}>
        <Text style={styles.backText}>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  circleContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  checkCircle: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  trackBtn: {
    backgroundColor: '#4CAF50',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  trackBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
});
