/* eslint-disable react-native/no-inline-styles */
import {BaseToast} from 'react-native-toast-message';
import {StyleSheet, Text, View} from 'react-native';
import { responsive } from '../constants/Responsive';


export const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={[
        styles.baseToast,
        {
          borderLeftColor: 'green',
          backgroundColor: '#e0ffe0',
          height: 40,
          borderColor: 'green',
          borderWidth: 0.5,
        },
      ]}
      contentContainerStyle={styles.ph15}
      text1Style={styles.successToastText}
    />
  ),

  error: props => (
    <BaseToast
      {...props}
      style={[
        styles.baseToast,
        {
          borderLeftColor: 'red', backgroundColor: '#ffe0e0',
          height: responsive.height(40),
          borderColor: 'red',
          borderWidth: 0.5,
        },
      ]}
      contentContainerStyle={styles.ph15}
      text1Style={styles.errorToastText}
    />
  ),

  commonToast: ({text1, props}) => (
    <View
      style={[
        styles.commonToastContainer,
        {backgroundColor: props?.bgColor || '#000'},
      ]}>
      <Text style={styles.toastText}>{text1}</Text>
    </View>
  ),

  infoToast: ({text1}) => (
    <View style={styles.infoToastContainer}>
      <Text style={styles.toastText}>{text1}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  baseToast: {
    borderRadius: responsive.width(10),
  },
  successToastText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'green',
    textAlign: 'center',
  },
  errorToastText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'red',
  },
  commonToastContainer: {
    width: '90%',
    borderRadius: responsive.width(10),
    padding: 12,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  infoToastContainer: {
    width: '90%',
    backgroundColor: '#68B4DF',
    borderRadius: responsive.width(10),
    padding: 12,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ph15: {
    paddingHorizontal: 15,
  },
  toastText: {

    fontSize: responsive.width(15),
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
});