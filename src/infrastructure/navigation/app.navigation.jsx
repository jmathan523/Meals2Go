import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaContainer } from '../../../src/components/SafeAreaView';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantStackNavigator } from './restaurant.navigation';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: 'ios-restaurant-sharp',
  Map: 'map',
  Settings: 'ios-settings-sharp',
};

const screenOptions = ({ route }) => {
  let iconName = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({ size, color }) => {
      return <Ionicons name={iconName} color={color} size={size} />;
    },
  };
};

const Map = () => (
  <SafeAreaContainer>
    <Text>Map</Text>
  </SafeAreaContainer>
);
const Setting = () => (
  <SafeAreaContainer>
    <Text>Settings</Text>
  </SafeAreaContainer>
);

export const AppNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantStackNavigator} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  </NavigationContainer>
);
