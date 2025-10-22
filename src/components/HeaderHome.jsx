/* eslint-disable react-native/no-inline-styles */
import { Text, View } from 'react-native';
import React from 'react';
import {
  AvtarUserIcon,
  CartIcon,
  FavouriteIcon,
  LoacationIcon,
  NotificationIcon,
} from '../../assets/SvgConstants';
import { useSelector } from 'react-redux';
import { responsive } from '../constants/Responsive';
import { ColorString } from '../theme/AppColor';
import SearchBar from './SearchBar';

const HeaderHome = ({ title }) => {
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
        // backgroundColor:'red',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 2,
        // elevation: 2,
        // shadowColor: '#000',
      }}
    >
      {/* <View style={{ flex: 1, }}> */}
      {title ? (
        <Text
          style={{
            fontSize: responsive.font(20),
            fontWeight: '700',
            color: ColorString.black,
          }}
        >
          {title}
        </Text>
      ) : (
        <SearchBar from={'HomeScreen'} />
      )}
      {/* </View> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: responsive.width(16),
          marginLeft: responsive.width(16),
        }}
      >
        <View>
          <FavouriteIcon fillColor={'white'} />
        </View>
        <View>
          <CartIcon fillColor={ColorString?.black} />
        </View>
      </View>
    </View>
  );
};

export default HeaderHome;
