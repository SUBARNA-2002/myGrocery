/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { LeftChevelon } from '../../assets/SvgConstants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useLoginMutation } from '../redux/services/authApi';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../redux/reducer/AuthSlice';
import { showErrorToast, showSuccessToast } from '../utils/toast';
import { ColorString } from '../theme/AppColor';
const LoginWithGmail = () => {
  const [email, setEmail] = useState('subarna@gmail.com');
  const [password, setPassword] = useState('hvhvhv');
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
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/login.png')}
          style={styles.logo}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: insets.top,
            left: 10,
          }}
        >
          <LeftChevelon width={50} height={50} fill="#4CAF50" />
        </TouchableOpacity>
      </View>

      {/* Login Title */}
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Enter your email and password</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor={'#00000080'}
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={'#00000080'}
        secureTextEntry
      />

      {/* Forgot Password Link */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.loginButtonText}>Log In</Text>
        )}
      </TouchableOpacity>

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
    </View>
  );
};

export default LoginWithGmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  logoContainer: {
    position: 'relative',
    marginBottom: 30, // Space between logo and form
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
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#007BFF',
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
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 14,
    color: '#555',
  },
  signupLink: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
