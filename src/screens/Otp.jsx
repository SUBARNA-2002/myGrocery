/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LeftChevelon, RightChevelon } from '../../assets/SvgConstants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
// import Icon from "react-native-vector-icons/Ionicons";

const Otp = () => {
  const [code, setCode] = useState('');
  const insets = useSafeAreaInsets();
  const navigation = useNavigation()

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor:'white'
      }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableOpacity onPress={() => {
          navigation.goBack()
        }} style={styles.header}>
          <LeftChevelon />
        </TouchableOpacity>

        <Text style={styles.title}>Enter your 4-digit code</Text>

        <Text style={styles.label}>Code</Text>

        <TextInput
          style={styles.input}
          value={code}
          onChangeText={setCode}
          keyboardType="number-pad"
          maxLength={4}
          placeholder="- - - -"
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity>
          <Text style={styles.resend}>Resend Code</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{
              name: 'HomeTab'
            }],
          });
        }} style={styles.nextBtn}>
          <RightChevelon />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 10,
    padding: 10,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 20,
    color: '#000',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 22,
    letterSpacing: 20,
    textAlign: 'center',
    paddingVertical: 10,
    color: '#000',
  },
  resend: {
    marginTop: 20,
    color: 'green',
    fontSize: 16,
  },
  nextBtn: {
    backgroundColor: 'green',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 40,
  },
});
