import React, { useContext, useState } from 'react';
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
import { FavouriteContext } from '../../../services/favourite/favourite.context';
import { FavouritesBar } from '../../../components/FavouritesBar.component';

export const RestaurantScreen = ({ navigation }) => {
  const { isLocationLoading } = useContext(LocationContext);
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouriteContext);
  const [isToggled, setIsToggled] = useState(false);

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
                    restaurant: item,
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
      <SearchBar
        isFavouritesToggled={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantListPage>{renderRestaurantList()}</RestaurantListPage>
    </SafeAreaContainer>
  );
};
