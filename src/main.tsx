import React from 'react';
import { useColorScheme } from 'react-native-appearance';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';
import { DefaultTheme as StyledTheme, ThemeProvider } from 'styled-components/native';

import Routes from './routes';
import { store } from './state';
import { getNavigationStyles, getPaperStyles } from './styles';

export default function Main() {
  const colorScheme = useColorScheme();

  const isDarkMode = colorScheme === 'dark';
  const stBarStyle = isDarkMode ? 'light' : 'dark';

  const styledTheme: StyledTheme = {
    mode: colorScheme,
  };

  const paperTheme = getPaperStyles(isDarkMode);
  const routesTheme = getNavigationStyles(isDarkMode);

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={styledTheme}>
        <PaperProvider theme={paperTheme}>
          <SafeAreaProvider>
            <Routes theme={routesTheme} />
            <StatusBar style={stBarStyle} />
          </SafeAreaProvider>
        </PaperProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
