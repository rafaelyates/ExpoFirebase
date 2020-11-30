'use strict';

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['expo'],
    plugins: ['styled-components', 'react-native-paper/babel'],
  };
};
