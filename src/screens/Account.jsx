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
import { ColorString } from '../theme/AppColor';
import { AboutIcon, DeliveryAddressIcon, HelpIcon, MyDetailsIcon, NotoficationIcon, OrderIcon, RightChevelon } from '../../assets/SvgConstants';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../redux/reducer/AuthSlice';
import { useNavigation } from '@react-navigation/native';

const options = [
  { id: 1, title: 'Orders', icon: <OrderIcon  /> },
  { id: 2, title: 'My Details', icon:<MyDetailsIcon fill={ColorString.black} /> },
  { id: 3, title: 'Delivery Address', icon:<DeliveryAddressIcon /> },
  // { id: 4, title: 'Payment Methods', icon: '💰' },
  // { id: 5, title: 'Promo Cord', icon: '🏷️' },
  { id: 6, title: 'Notifications', icon:<NotoficationIcon fill={ColorString.black} /> },
  { id: 7, title: 'Help', icon:<HelpIcon fill={ColorString.black} /> },
  { id: 8, title: 'About', icon:<AboutIcon fill={ColorString.black} /> },
];

const Account = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {user} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutUser());
    navigation.reset({ index: 0, routes: [{ name: 'Auth' }] });
  }
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}
      >
        <View style={{ flex: 1 }}>
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/men/32.jpg',
              }}
              style={styles.profileImage}
            />
            <View style={styles.profileTextContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.profileName}>{`${user?.firstName || ''} ${user?.lastName || ''}`.trim() || 'User'}</Text>
                <Text style={styles.editIcon}>✏️</Text>
              </View>
              <Text style={styles.email}>{user?.email}</Text>
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
              {/* <Text style={styles.arrow}> */}
              <View>
                <RightChevelon fill={ColorString.black} />
              </View>
              {/* </Text> */}
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
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
    backgroundColor: ColorString.screenColor,
    paddingHorizontal: 16,
    // paddingTop: 20,
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
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  editIcon: {
    marginLeft: 6,
    fontSize: 14,
  },
  email: {
    fontSize: 16,
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
    paddingVertical: 16,
    borderBottomWidth: 0.7,
    borderBottomColor: '#E2E2E2',
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
    fontSize: 18,
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
    backgroundColor: ColorString.primary,
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
    color: ColorString.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
