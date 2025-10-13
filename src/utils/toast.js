import Toast from 'react-native-toast-message';

const showToast = (status, message, position = 'bottom', props = {}, visibilityTime = 2000) => {
  Toast.show({
    type: status, // Matches the type from toastConfig
    text1: message,
    position,
    visibilityTime,
    props,
  });
};

// ✅ Show Success Toast
const showSuccessToast = (message, position = 'bottom', visibilityTime = 2000) => {
  showToast('success', message, position, { bgColor: 'green' }, visibilityTime);
};

// ✅ Show Error Toast
const showErrorToast = (message, position = 'bottom', visibilityTime = 2000) => {
  showToast('error', message, position, { bgColor: 'red' }, visibilityTime);
};

// ✅ Show Custom Toast (With Any Background Color)
const showCustomToast = (message, bgColor = 'blue', position = 'bottom', visibilityTime = 2000) => {
  showToast('commonToast', message, position, { bgColor }, visibilityTime);
};

export {showSuccessToast, showErrorToast, showCustomToast };