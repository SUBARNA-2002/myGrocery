/* eslint-disable react-native/no-inline-styles */
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  AvtarUserIcon,
  CartIcon,
  FavouriteIcon,
  LeftChevelon,
  LoacationIcon,
  NotificationIcon,
  RightChevelon,
} from '../../assets/SvgConstants';
import { useSelector } from 'react-redux';
import { responsive } from '../constants/Responsive';
import { ColorString } from '../theme/AppColor';
import SearchBar from './SearchBar';

const HeaderHome = ({ title, back = false }) => {
  const navigation = useNavigation();
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
      {title || back ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // gap: responsive.width(20),
          }}
        >
          {back && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                paddingRight: responsive.padding(20),
              }}
            >
              <LeftChevelon fill={ColorString.black} />
            </TouchableOpacity>
          )}
          <Text
            style={{
              fontSize: responsive.font(20),
              fontWeight: '700',
              color: ColorString.black,
            }}
          >
            {title}
          </Text>
        </View>
      ) : (
        <SearchBar from={'HomeScreen'} />
      )}
      {/* </View> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: responsive.width(20),
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
