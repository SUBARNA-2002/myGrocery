import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      {/* Image Section */}
      <Image
        source={require('../../assets/images/apple.png')}
        style={styles.productImage}
      />

      {/* Product Details */}
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>Nature Red Apple</Text>
        <Text style={styles.productPrice}>${4.99}</Text>

        {/* Quantity Section */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}kg</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Product Description */}
        <Text style={styles.productDescription}>
          Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May
          Be Good For Your Heart. As Part Of A Healthful And Varied Diet.
        </Text>

        {/* Nutrition Section */}
        <Text style={styles.nutritionTitle}>Nutritions (100g)</Text>
        <Text style={styles.nutritionDetails}>
          Calories: 52, Carbs: 14g, Protein: 0.3g, Fat: 0.2g
        </Text>

        {/* Review Section */}
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewTitle}>Review</Text>
          <Text style={styles.reviewRating}>★★★★★</Text>
        </View>

        {/* Add to Basket Button */}
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('HomeTab', { screen: 'Cart' })}
      >
        <Text style={styles.addButtonText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20, // Increase padding for spacing
  },
  productImage: {
    width: '100%',
    height: 250, // Adjust height to make the image larger
    resizeMode: 'contain',
    borderRadius: 10, // Rounded corners for the image
    marginBottom: 20, // Space between image and product details
  },
  productDetails: {
    marginTop: 15,
    flex: 1,
  },
  productTitle: {
    fontSize: 28, // Larger font size for title
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 24, // Larger price font size
    fontWeight: 'bold',
    color: '#4CAF50',
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, // Increase space between quantity and description
  },
  buttonText: {
    fontSize: 36, // Larger buttons for better touch interaction
    color: '#333',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 25,
    // paddingVertical: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 50, // Circular buttons
    textAlign: 'center',
  },
  quantity: {
    fontSize: 20, // Increase quantity text size
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  productDescription: {
    fontSize: 16, // Increased size for better readability
    color: '#555',
    marginVertical: 20, // Add vertical space around description
    lineHeight: 22, // Increase line height for readability
  },
  nutritionTitle: {
    fontSize: 18, // Larger font size for nutrition title
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  nutritionDetails: {
    fontSize: 16, // Increase nutrition text size
    color: '#555',
    marginBottom: 10,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15, // Add vertical spacing between review and button
  },
  reviewTitle: {
    fontSize: 18, // Increase review title font size
    color: '#333',
    marginRight: 10,
  },
  reviewRating: {
    fontSize: 18, // Larger star rating size
    color: '#FFA500',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    borderRadius: 10, // Round button edges
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Add shadow for Android
  },
  addButtonText: {
    fontSize: 16, // Larger font size for the button
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
