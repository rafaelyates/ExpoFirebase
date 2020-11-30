import { configureFonts, DarkTheme, DefaultTheme } from 'react-native-paper';

declare type Fonts = typeof DefaultTheme.fonts;
declare type Theme = typeof DefaultTheme;

const fonts: Fonts = {
  ...DefaultTheme.fonts,
  medium: {
    fontFamily: 'ibm-plex-sans-medium',
    fontWeight: '500',
  },
  regular: {
    fontFamily: 'ibm-plex-sans-regular',
    fontWeight: '400',
  },
  light: {
    fontFamily: 'ibm-plex-sans-light',
    fontWeight: '300',
  },
  thin: {
    fontFamily: 'ibm-plex-sans-thin',
    fontWeight: '100',
  },
};

const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

export default (dark = false): Theme => {
  const theme = dark ? darkTheme : lightTheme;

  return {
    ...theme,
    dark,
    roundness: 2,
    fonts: configureFonts({
      default: fonts,
      android: fonts,
      ios: fonts,
    }),
  };
};
