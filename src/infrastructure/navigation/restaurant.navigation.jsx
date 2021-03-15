import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RestaurantScreen } from '../../../src/features/restaurant/screens/RestaurantScreen';
import { RestaurantDetailScreen } from '../../features/restaurant/screens/RestaurantDetailScreen';

const RestaurantsStack = createStackNavigator();

export const RestaurantStackNavigator = () => (
  <RestaurantsStack.Navigator
    headerMode="false"
    // screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
  >
    {/* Component will pass props "navigation" by default to the component*/}
    <RestaurantsStack.Screen name="Restaurants" component={RestaurantScreen} />
    <RestaurantsStack.Screen
      name="RestaurantDetail"
      component={RestaurantDetailScreen}
    />
  </RestaurantsStack.Navigator>
);
