/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import { CashIcon, CheckOutIcon, LoacationIcon, PromoCodeIcon } from '../../assets/SvgConstants';
import { useNavigation } from '@react-navigation/native';
const Checkout = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    }]}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
       <Header title = 'Checkout'/>

        {/* --- Delivery Address --- */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconTitleRow}>
              <View style={styles.iconContainer}>
                <LoacationIcon  />
              </View>
              <Text style={styles.cardTitle}>Delivery Address</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.linkText}>Change</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.cardText}>
            42, Park Street, Kolkata, West Bengal - 700016
          </Text>
        </View>

        {/* --- Payment Method --- */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconTitleRow}>
              <View style={styles.iconContainer}>
                {/* <Icon name="card-outline" size={20} color="#2ECC71" /> */}
                <CashIcon  />
              </View>
              <Text style={styles.cardTitle}>Payment Method</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.linkText}>Change</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.paymentOption}>
            {/* <CashIcon /> */}
            <View>
              <Text style={styles.paymentText}>Visa Classic</Text>
              <Text style={styles.paymentSub}>**** 1234</Text>
            </View>
          </View>
        </View>

        {/* --- Promo Code --- */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconTitleRow}>
              <View style={styles.iconContainer}>
                <PromoCodeIcon  />
              </View>
              <Text style={styles.cardTitle}>Promo Code</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.linkText}>Apply</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.cardText}>No promo code applied</Text>
        </View>

        {/* --- Order Summary --- */}
        <View style={styles.card}>
          <View style={styles.iconTitleRow}>
            <View style={styles.iconContainer}>
              <CheckOutIcon  />
              {/* <Icon name="receipt-outline" size={20} color="#2ECC71" /> */}
            </View>
            <Text style={styles.cardTitle}>Order Summary</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>$12.96</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>$1.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Discount</Text>
            <Text style={[styles.summaryValue, { color: '#2ECC71' }]}>- $0.50</Text>
          </View>
          <View style={[styles.summaryRow, styles.summaryTotalRow]}>
            <Text style={styles.summaryTotalText}>Total</Text>
            <Text style={styles.summaryTotalPrice}>$13.46</Text>
          </View>
        </View>
      </ScrollView>

      {/* --- Place Order Button --- */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.placeOrderBtn} onPress={() => navigation.navigate('Payment-Success')}>
          <Text style={styles.placeOrderText}>Place Order</Text>
          <View style={styles.amountTag}>
            <Text style={styles.amountText}>$13.46</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    // paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal:16,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconContainer: {
    backgroundColor: '#EAFBF0',
    padding: 6,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  linkText: {
    color: '#2ECC71',
    fontWeight: '600',
    fontSize: 13,
  },
  cardText: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
  },
  paymentText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  paymentSub: {
    fontSize: 12,
    color: '#777',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#777',
  },
  summaryValue: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  summaryTotalRow: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  summaryTotalText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  summaryTotalPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2ECC71',
  },
  bottomContainer: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderTopWidth: 0.8,
    borderColor: '#eee',
  },
  placeOrderBtn: {
    backgroundColor: '#2ECC71',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    shadowColor: '#2ECC71',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  placeOrderText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  amountTag: {
    backgroundColor: '#27AE60',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  amountText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
