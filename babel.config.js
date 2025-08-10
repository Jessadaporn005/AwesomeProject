// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',              // ต้องมี เพื่อให้ expo-router สร้างโมดูลพิเศษ (_ctx)
      'react-native-reanimated/plugin', // ต้องอยู่ "อันสุดท้าย" เสมอ
    ],
  };
};
