import React, { createContext, useState, useEffect, useContext } from 'react';
import { LocationContext } from './location/location.context';
import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurant.services';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const { location } = useContext(LocationContext);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const retrieveRestaurants = async (loc) => {
    try {
      setIsLoading(true);
      setRestaurants([]);
      setTimeout(async () => {
        const response = await restaurantsRequest(loc);
        const restaurantsList = await restaurantsTransform(response);
        setIsLoading(false);
        setRestaurants(restaurantsList);
      }, 2000);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
