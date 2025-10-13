/* eslint-disable react-native/no-inline-styles */
import { Text, View } from 'react-native';
import React from 'react';
import { AvtarUserIcon, FavouriteIcon } from '../../assets/SvgConstants';
import { useSelector } from 'react-redux';

const HeaderHome = () => {
  const {user} = useSelector(state => state.auth)
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Good Morning';
    if (hour >= 12 && hour < 17) return 'Good Afternoon';
    if (hour >= 17 && hour < 21) return 'Good Evening';
    return 'Good Night';
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#53B175',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AvtarUserIcon width={50} height={50} fill="#53B175" />
          </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#000000DE',
            }}
          >
            {getGreeting()}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#000000DE',
            }}
          >
           {user?.firstName || 'User'}
          </Text>
        </View>
      </View>
      <View>
        <FavouriteIcon width={24} height={24} fill="#53B175" />
      </View>
    </View>
  );
};

export default HeaderHome;
