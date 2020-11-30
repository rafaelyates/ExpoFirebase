import { DarkTheme, DefaultTheme } from '@react-navigation/native';

declare type Theme = typeof DefaultTheme;

const lightTheme: Theme = {
  ...DefaultTheme,
};

const darkTheme: Theme = {
  ...DarkTheme,
};

export default (dark = false): Theme => {
  const theme = dark ? darkTheme : lightTheme;

  return {
    ...theme,
    dark,
  };
};
