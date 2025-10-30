/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Arrow, Logo } from '../../assets/SvgConstants';
import { ColorString } from '../theme/AppColor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { responsive } from '../constants/Responsive';

const OnBording = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/images/Splash.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Logo />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          position: 'absolute',
          bottom: insets.bottom + responsive.height(80),
        }}
      >
        <View
          style={{
            height: responsive.height(55),
            width: responsive.height(55),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: ColorString.white,
            borderRadius: responsive.padding(50),
          }}
        >
          <View
            style={{
              height: responsive.height(35),
              width: responsive.height(35),
              padding: responsive.padding(10),
              backgroundColor: ColorString.primary,
              borderRadius: responsive.padding(50),
            }}
          >
            <Arrow />
          </View>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default OnBording;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: ColorString.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    color: ColorString.white,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  button: {
    paddingBottom: 40,
  },
});
