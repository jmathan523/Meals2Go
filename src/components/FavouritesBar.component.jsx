import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from '../components/CompactResturantInfo';
import { Spacer } from './Spacer';

const FavouriteBarWrapper = styled.View`
  padding-left: 16px;
  padding-bottom: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) return null;
  return (
    <FavouriteBarWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((favourite) => (
          <Spacer key={favourite.placeId} position="left" size="medium">
            <TouchableOpacity
              onPress={() =>
                onNavigate('RestaurantDetail', {
                  restaurant: favourite,
                })
              }
            >
              <CompactRestaurantInfo restaurant={favourite} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouriteBarWrapper>
  );
};
