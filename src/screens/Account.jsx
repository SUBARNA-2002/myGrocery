/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const options = [
  {id: 1, title: 'Orders', icon: '📦'},
  {id: 2, title: 'My Details', icon: '💳'},
  {id: 3, title: 'Delivery Address', icon: '📍'},
  {id: 4, title: 'Payment Methods', icon: '💰'},
  {id: 5, title: 'Promo Cord', icon: '🏷️'},
  {id: 6, title: 'Notifications', icon: '🔔'},
  {id: 7, title: 'Help', icon: '❓'},
  {id: 8, title: 'About', icon: 'ℹ️'},
];

const Account = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {
      paddingTop: insets.top,
    }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 40}}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/men/32.jpg',
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileTextContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.profileName}>Afsar Hossen</Text>
              <Text style={styles.editIcon}>✏️</Text>
            </View>
            <Text style={styles.email}>lmshuvo97@gmail.com</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Options List */}
        {options.map(item => (
          <TouchableOpacity key={item.id} style={styles.optionRow}>
            <View style={styles.optionLeft}>
              <Text style={styles.icon}>{item.icon}</Text>
              <Text style={styles.optionText}>{item.title}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutIcon}>↩️</Text>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 65,
    height: 65,
    borderRadius: 32,
    marginRight: 12,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  editIcon: {
    marginLeft: 6,
    fontSize: 14,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.7,
    borderBottomColor: '#f1f1f1',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    marginRight: 14,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  arrow: {
    fontSize: 22,
    color: '#aaa',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 25,
  },
  logoutIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  logoutText: {
    color: '#2ECC71',
    fontSize: 16,
    fontWeight: '600',
  },
});
