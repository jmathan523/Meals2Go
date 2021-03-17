import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { FavouriteContext } from '../services/favourite/favourite.context';

const FavouriteIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 12px;
  right: 15px;
  z-index: 10;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(
    FavouriteContext
  );
  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteIcon
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? 'heart' : 'hearto'}
        size={18}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteIcon>
  );
};
