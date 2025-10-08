/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';
import { ColorString } from '../theme/AppColor';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Image
          source={require('../../assets/images/login.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View>
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={styles.title}>Get your groceries </Text>
          <Text
            style={[
              styles.title,
              {
                paddingTop: 0,
              },
            ]}
          >
            with nectar{' '}
          </Text>
          <View style={styles.phoneContainer}>
            <View>
              <Text>91+</Text>
            </View>
            <View>
              <TextInput
                value={phone}
                onChangeText={text => setPhone(text)}
                maxLength={10}
                placeholder="Phone Number"
                placeholderTextColor={'#00000080'}
                keyboardType="numeric"
                style={{
                  marginHorizontal: 16,
                  paddingVertical: 12,
                }}
              />
            </View>
          </View>
          <View style={{ paddingTop: 20, paddingHorizontal: 16 }}>
            <CustomButton
              title="Next"
              bgColor={ColorString.primary}
              color={ColorString.white}
              onPress={() =>
                navigation.navigate('Otp', { phone: phone })
              }
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 16,
    paddingTop: 16,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    borderBottomWidth: 1,
    marginHorizontal: 16,
    borderBottomColor: ColorString.disableBtnColor,
  },
});
