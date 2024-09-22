module.exports = function (api) {
  api.cache(true);
  const plugins = [
    ['react-native-worklets-core/plugin'],
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanFaces'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
  ];
  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
    plugins,
  };
};
