import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { ColorString } from '../theme/AppColor';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Splash = () => {
  const navigation = useNavigation();
  const { user, token } = useSelector(state => state.auth || {});

  useEffect(() => {
    // Show splash briefly then redirect based on auth
    const t = setTimeout(() => {
      if (user || token) {
        // go to App stack
        navigation.reset({ index: 0, routes: [{ name: 'App' }] });
      } else {
        // go to Auth stack
        navigation.reset({ index: 0, routes: [{ name: 'Auth' }] });
      }
    }, 800);

    return () => clearTimeout(t);
  }, [navigation, user, token]);

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
