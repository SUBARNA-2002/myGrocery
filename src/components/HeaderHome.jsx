/* eslint-disable react-native/no-inline-styles */
import { Text, View } from 'react-native';
import React from 'react';
import {
  AvtarUserIcon,
  FavouriteIcon,
  LoacationIcon,
  NotificationIcon,
} from '../../assets/SvgConstants';
import { useSelector } from 'react-redux';
import { responsive } from '../constants/Responsive';

const HeaderHome = () => {
  const { user } = useSelector(state => state.auth);
  // const getGreeting = () => {
  //   const hour = new Date().getHours();
  //   if (hour >= 5 && hour < 12) return 'Good Morning';
  //   if (hour >= 12 && hour < 17) return 'Good Afternoon';
  //   if (hour >= 17 && hour < 21) return 'Good Evening';
  //   return 'Good Night';
  // };
  return (
    <View
      style={{
        paddingHorizontal: responsive.width(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingVertical: responsive.padding(16)
      }}
    >
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: responsive.padding(4),
          }}
        >
          <LoacationIcon width={20} height={20} style={{ marginRight: 5 }} />
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#000000' }}>
            Saheed nagar
          </Text>
        </View>
        <Text style={{ fontSize: 14, color: '#7C7C7C', marginTop: 4 }}>
          plot 123, shanti vihar colony
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: responsive.padding(12),
        }}
      >
        <View
          style={{
            // padding:responsive.padding(12),
            width: responsive.width(40),
            height: responsive.width(40),
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#30303033',
            borderRadius: responsive.padding(50),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <NotificationIcon />
        </View>
        <View>
          <AvtarUserIcon width={50} height={50} fill="#53B175" />
        </View>
      </View>
    </View>
  );
};

export default HeaderHome;
