import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Navigation } from './src/infrastructure/navigation/index';
import * as firebase from 'firebase';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';

import { RestaurantsContextProvider } from './src/services/restaurant.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouriteContextProvider } from './src/services/favourite/favourite.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: 'AIzaSyCcIpqf143kG76T5ll9T-4jW9L-o7lZX2U',
  authDomain: 'meals2go-40969.firebaseapp.com',
  projectId: 'meals2go-40969',
  storageBucket: 'meals2go-40969.appspot.com',
  messagingSenderId: '1098426604195',
  appId: '1:1098426604195:web:6284d4dc281a569dafbd16',
};
// Initialize Firebase
if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <FavouriteContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouriteContextProvider>
      </AuthenticationContextProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
