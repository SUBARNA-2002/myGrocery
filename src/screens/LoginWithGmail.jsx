/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { LeftChevelon, Logo } from '../../assets/SvgConstants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useLoginMutation } from '../redux/services/authApi';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../redux/reducer/AuthSlice';
import { showErrorToast, showSuccessToast } from '../utils/toast';
import { ColorString } from '../theme/AppColor';
import { responsive } from '../constants/Responsive';
import { fontFamily } from '../utils/font';
import Btn from '../components/Btn';
const LoginWithGmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      showErrorToast('Email and Password are required');
      return;
    }
    try {
      const res = await login({ email, password }).unwrap();
      console.log('Login Response', res);
      if (res?.success) {
        dispatch(setUser(res?.user));
        dispatch(setToken(res?.token));
        showSuccessToast(res?.message || 'Login Successful');
        navigation.reset({
          index: 0,
          routes: [{ name: 'App' }],
        });
      }
    } catch (err) {
      console.log('Error in Login', err);
      showErrorToast(err?.data?.message || 'Login Failed');
    }
  };
  const handleGuestLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'App' }],
    });
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ImageBackground
        style={styles.container}
        source={require('../../assets/images/loginBg.png')}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'#F0F3F7'}
          translucent={false}
        />
        {/* Logo Section */}
        <View
          style={[
            styles.logoContainer,
            {
              paddingTop: insets.top,
            },
          ]}
        >
          <Logo fill={ColorString.primary} />
        </View>

        {/* Login Title */}
        {/* <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Enter your email and password</Text> */}

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor={'#747474'}
          autoCapitalize="none"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={'#747474'}
          secureTextEntry
        />

        {/* Forgot Password Link */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        {/* <TouchableOpacity style={styles.loginButton} onPress={handleGuestLogin}>
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Log In</Text>
          )}
        </TouchableOpacity> */}
        <View
          style={{
            marginBottom: responsive.height(10),
          }}
        >
          <Btn
            title={isLoading ? <ActivityIndicator color="#fff" /> : 'Log In'}
            bgColor={ColorString.primary}
            color={ColorString.white}
            onPress={handleGuestLogin}
            disabled={isLoading}
          />
        </View>

        {/* Signup Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <Text style={styles.signupLink}>Signup</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginWithGmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: responsive.padding(16),
    // marginBottom: responsive.height(150),
    justifyContent: 'center',
    // alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: responsive.height(40),
  },
  logo: {
    width: '100%',
    height: 200, // Adjust the size of the logo
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30, // Space after the subtitle
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#969696',
    borderBottomWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  forgotPassword: {
    fontSize: responsive.font(14),
    fontWeight: fontFamily.light,
    color: '#000000',
    textAlign: 'right',
    marginBottom: 30, // Space between forgot password and login button
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: ColorString.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: responsive.font(18),
    color: '#fff',
    fontFamily: fontFamily.bold,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: responsive.font(14),
    color: '#555',
    fontFamily: fontFamily.regular,
  },
  signupLink: {
    fontSize: responsive.font(14),
    color: ColorString.primary,
    fontWeight: fontFamily.bold,
  },
});
