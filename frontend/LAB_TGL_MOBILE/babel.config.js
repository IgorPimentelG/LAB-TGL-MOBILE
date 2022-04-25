module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@shared': './src/shared',
            '@store': './src/store',
            '@pages': './src/pages',
            '@routes': './src/routes',
            '@hooks': './src/hooks',
            '@theme': './src/theme'
          }
        },
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
