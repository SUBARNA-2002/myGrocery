module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Reanimated plugin must be present and must be the last plugin.
    // Remove `react-native-worklets/plugin` because it duplicates the
    // reanimated worklet transform and causes a duplicate-plugin error.
    'react-native-reanimated/plugin',
  ]
};
