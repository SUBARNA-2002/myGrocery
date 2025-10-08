/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPixel, heightPixel, fontPixel } from '../Utils/Utility'; // optional if you’re using pixel scaling

const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../../assets/images/banana.png')}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>Organic Bananas</Text>
        <Text style={styles.subtitle}>7pcs, Priceg</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>$4.99</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    width: 160,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,

  },
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
    fontWeight: '500',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  addBtn: {
    backgroundColor: '#4CAF50',
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
