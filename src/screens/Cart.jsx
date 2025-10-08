/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const cartItems = [
  {
    id: 1,
    title: 'Bell Pepper Red',
    subtitle: '1kg, Price',
    price: '$4.99',
    image: 'https://cdn-icons-png.flaticon.com/512/766/766083.png',
  },
  {
    id: 2,
    title: 'Egg Chicken Red',
    subtitle: '4pcs, Price',
    price: '$1.99',
    image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  },
  {
    id: 3,
    title: 'Organic Bananas',
    subtitle: '12kg, Price',
    price: '$3.00',
    image: 'https://cdn-icons-png.flaticon.com/512/415/415733.png',
  },
  {
    id: 4,
    title: 'Ginger',
    subtitle: '250gm, Price',
    price: '$2.99',
    image: 'https://cdn-icons-png.flaticon.com/512/766/766020.png',
  },
  {
    id: 1,
    title: 'Bell Pepper Red',
    subtitle: '1kg, Price',
    price: '$4.99',
    image: 'https://cdn-icons-png.flaticon.com/512/766/766083.png',
  },
  {
    id: 2,
    title: 'Egg Chicken Red',
    subtitle: '4pcs, Price',
    price: '$1.99',
    image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  },
  {
    id: 3,
    title: 'Organic Bananas',
    subtitle: '12kg, Price',
    price: '$3.00',
    image: 'https://cdn-icons-png.flaticon.com/512/415/415733.png',
  },
  {
    id: 4,
    title: 'Ginger',
    subtitle: '250gm, Price',
    price: '$2.99',
    image: 'https://cdn-icons-png.flaticon.com/512/766/766020.png',
  },
];

const Cart = () => {
  const insets = useSafeAreaInsets();
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityBtn}>
            <Text style={styles.quantityText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>1</Text>
          <TouchableOpacity style={styles.quantityBtn}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity>
          <Text style={styles.remove}>×</Text>
        </TouchableOpacity>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, {
      paddingTop: insets.top,
    }]}>
      <Text style={styles.header}>My Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <View style={styles.priceTag}>
            <Text style={styles.priceText}>$12.96</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 0.8,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  quantityBtn: {
    width: 30,
    height: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '500',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  remove: {
    fontSize: 20,
    color: '#999',
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 5,
  },
  footer: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopWidth: 0.8,
    borderColor: '#eee',
  },
  checkoutBtn: {
    backgroundColor: '#2ECC71',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  priceTag: {
    backgroundColor: '#27AE60',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  priceText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
