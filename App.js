import React from 'react';
import { StatusBar } from 'react-native';

import { RestaurantScreen } from './src/features/restaurant/screens/RestaurantScreen';

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <StatusBar style="auto" />
    </>
  );
}
