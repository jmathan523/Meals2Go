import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/Restaurant-Info-Card';
import { Spacer } from '../../../components/Spacer';
import {
  RestaurantList,
  RestaurantListPage,
  Progressbar,
} from './RestaurantScreen-styles';
import { SafeAreaContainer } from '../../../components/SafeAreaView';
import { RestaurantsContext } from '../../../services/restaurant.context';
import { SearchBar } from '../components/SearchBar.component';
import { LocationContext } from '../../../services/location/location.context';

export const RestaurantScreen = ({ navigation }) => {
  const { isLocationLoading } = useContext(LocationContext);
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  const renderRestaurantList = () => {
    if (isLoading || isLocationLoading) {
      return (
        <Progressbar animating={true} color={Colors.red800} size="large" />
      );
    } else {
      return (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    singleRestaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      );
    }
  };

  return (
    <SafeAreaContainer>
      <SearchBar />
      <RestaurantListPage>{renderRestaurantList()}</RestaurantListPage>
    </SafeAreaContainer>
  );
};
