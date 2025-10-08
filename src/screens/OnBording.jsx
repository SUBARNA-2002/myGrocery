/* eslint-disable react-native/no-inline-styles */
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Logo } from '../../assets/SvgConstants';
import { ColorString } from '../theme/AppColor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const OnBording = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/images/onbording.png')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: insets.bottom,
        }}
      >
        <View
          style={{
            paddingBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Logo />
        </View>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>to our store</Text>
        <Text style={styles.subTitle}>
          Get your groceries in as fast as two minute
        </Text>
        <View style={styles.button}>
          <CustomButton
            title="Get Started"
            onPress={() => navigation.navigate('SignIn')}
            bgColor={ColorString.primary}
            color={ColorString.white}
          />
        </View>
      </View>
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
