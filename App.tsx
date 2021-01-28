import React, { useCallback, useState } from 'react';
import { initReactI18next } from 'react-i18next';
import { AppearanceProvider } from 'react-native-appearance';
import { enableScreens } from 'react-native-screens';

import AppLoading from 'expo-app-loading';
import { loadAsync } from 'expo-font';
import { getLocalizationAsync } from 'expo-localization';
import { hideAsync } from 'expo-splash-screen';
import firebase from 'firebase';
import i18n, { LanguageDetectorAsyncModule } from 'i18next';

import {
  IBMPlexSans_100Thin,
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
} from '@expo-google-fonts/ibm-plex-sans';

import englishTranslations from './assets/i18n/en.json';
import firebaseConfig from './firebase-web.json';
import Main from './src';

enableScreens();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const fontsLoader = loadAsync({
  'ibm-plex-sans-medium': {
    uri: IBMPlexSans_500Medium,
  },
  'ibm-plex-sans-regular': {
    uri: IBMPlexSans_400Regular,
  },
  'ibm-plex-sans-light': {
    uri: IBMPlexSans_300Light,
  },
  'ibm-plex-sans-thin': {
    uri: IBMPlexSans_100Thin,
  },
});

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => null,
  detect: async (callback) => {
    const lang = await getLocalizationAsync();
    callback(lang.locale);
  },
  cacheUserLanguage: () => null,
};

const translationLoader = i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: englishTranslations },
    },
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  });

const bootstrapConfigs = async (): Promise<void> => {
  await fontsLoader;
  await translationLoader;

  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  await hideAsync();
};

export default function App() {
  const [modulesLoaded, setModulesLoaded] = useState(false);

  const onLoadingComplete = useCallback((): void => {
    setModulesLoaded(true);
  }, []);

  return modulesLoaded ? (
    <AppearanceProvider>
      <Main />
    </AppearanceProvider>
  ) : (
    <AppLoading
      autoHideSplash
      startAsync={bootstrapConfigs}
      onFinish={onLoadingComplete}
      onError={(error) => console.error(error.message)}
    />
  );
}
