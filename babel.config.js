module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~/components': './src/components',
          '~/configs': './src/configs',
          '~/constants': './src/constants',
          '~/hooks': './src/hooks',
          '~/routes': './src/routes',
          '~/styles': './src/styles',
          '~/screens': './src/screens',
          '~/utils': './src/utils',
          '~/contexts': './src/contexts',
          '~/pages': './src/pages',
          '~/assets': './src/assets',
          '~/features': './src/features',
          '~/services': './src/services',
          '~/app': './src/app',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
