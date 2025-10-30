/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { LeftChevelon, Logo } from '../../assets/SvgConstants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useSignUpMutation } from '../redux/services/authApi';
import { ColorString } from '../theme/AppColor';
import { responsive } from '../constants/Responsive';
import { fontFamily } from '../utils/font';
import Btn from '../components/Btn';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [register, { isLoading, isError }] = useSignUpMutation();

  const handleSignup = () => {
    // Add your signup API call here
    // register({ name, email, password });
    navigation.navigate('HomeTab');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorString.white}
        translucent={false}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
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

          {/* Signup Title */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsive.width(10),
              marginBottom: responsive.height(10),
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: responsive.height(30),
                height: responsive.height(30),
                borderRadius: responsive.padding(8),
                backgroundColor: ColorString.secondary,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <LeftChevelon fill={ColorString.primary} />
            </TouchableOpacity>
            <Text style={styles.title}>Sign Up</Text>
          </View>

          {/* Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor={'#00000080'}
          />

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor={'#00000080'}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="numeric"
            placeholderTextColor={'#00000080'}
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

          {/* Confirm Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor={'#00000080'}
            secureTextEntry
          />

          {/* Signup Button */}
          <View
            style={{
              marginTop: responsive.height(10),
            }}
          >
            <Btn title="Sign Up" onPress={handleSignup} />
          </View>

          {/* Login Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.signupLink}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: responsive.padding(16),
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: responsive.height(30),
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: responsive.font(20),
    fontFamily: fontFamily.bold,
    color: ColorString.primary,
    // marginBottom: responsive.height(20),
  },
  subtitle: {
    fontSize: 16,
    color: ColorString.secondary,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: responsive.height(40),
    borderColor: '#969696',
    borderBottomWidth: 1,

    // paddingLeft: responsive.padding(15),
    marginBottom: responsive.height(15),
    fontSize: responsive.font(14),
    color: '#333',
  },
  loginButton: {
    width: '100%',
    height: responsive.height(40),
    backgroundColor: ColorString.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsive.height(20),
    marginTop: responsive.height(10),
  },
  loginButtonText: {
    fontSize: responsive.font(16),
    color: '#fff',
    fontFamily: fontFamily.bold,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsive.height(10),
  },
  signupText: {
    fontSize: responsive.font(14),
    color: '#555',
    fontFamily: fontFamily.regular,
  },
  signupLink: {
    fontSize: responsive.font(14),
    color: ColorString.primary,
    fontFamily: fontFamily.bold,
  },
});
