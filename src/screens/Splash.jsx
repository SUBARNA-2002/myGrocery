import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { ColorString } from '../theme/AppColor';
import { useNavigation } from '@react-navigation/native';
const Splash = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.conatiner}>
      <View>
        <Text style={styles.title}>My Grocery</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('OnBording')}>
        <Text>v0.0.1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: ColorString.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: ColorString.white,
    fontWeight: 'bold',
  },
});
