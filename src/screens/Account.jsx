/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ColorString } from '../theme/AppColor';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../redux/reducer/AuthSlice';
import { useNavigation } from '@react-navigation/native';
import { RightChevelon } from '../../assets/SvgConstants';

const Account = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
    navigation.reset({ index: 0, routes: [{ name: 'Auth' }] });
  };

  const options = [
    { id: 1, title: 'Orders' },
    { id: 2, title: 'Customer Care' },
    {
      id: 3,
      title: 'Invite Friends & Earn',
      sub: 'You get ₹100 SuperCash for every friend',
    },
    {
      id: 4,
      title: 'AJIO Wallet',
      sub: 'Add Gift Card | Manage rewards and refunds',
    },
    { id: 5, title: 'Saved Cards' },
    { id: 6, title: 'My Rewards' },
    { id: 7, title: 'Address' },
    { id: 8, title: 'Notifications' },
  ];

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {`${user?.firstName?.[0] || 'S'}${user?.lastName?.[0] || 'K'}`}
            </Text>
          </View>
          <View style={styles.profileInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.nameText}>
                {`${user?.firstName || 'SUBARNA'} ${user?.lastName || 'SUTAR'}`}
              </Text>
              <TouchableOpacity>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.emailText}>
              {user?.email || 'sovonsutarsutar123@gmail.com'}
            </Text>
            <Text style={styles.phoneText}>{user?.phone || '7077786090'}</Text>
          </View>
        </View>

        {/* Option List */}
        <View style={styles.optionContainer}>
          {options.map(item => (
            <TouchableOpacity key={item.id} style={styles.optionRow}>
              <View>
                <Text style={styles.optionTitle}>{item.title}</Text>
                {item.sub && <Text style={styles.optionSub}>{item.sub}</Text>}
              </View>
              <RightChevelon fill={'#000'} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
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
    backgroundColor: '#F6F7F9',
  },
  profileSection: {
    backgroundColor: '#EEF1F4',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  avatarText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },
  profileInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  editText: {
    color: '#007AFF',
    fontSize: 14,
    marginLeft: 8,
  },
  emailText: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
  },
  phoneText: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
  },
  optionContainer: {
    marginTop: 8,
    backgroundColor: '#fff',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderColor: '#E5E5E5',
  },
  optionTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  optionSub: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },
  logoutBtn: {
    backgroundColor: ColorString.primary,
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 25,
    marginBottom: 30,
  },
  logoutText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
