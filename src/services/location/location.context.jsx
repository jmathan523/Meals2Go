import React, { useState, createContext, useEffect } from 'react';

import { locationRequest, locationTransform } from './location.services';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('san francisco');
  const [location, setLocation] = useState(null);
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSearch = async (searchkeyword) => {
    setIsLocationLoading(true);
    setKeyword(searchkeyword);
    if (!searchkeyword.length) return;
    try {
      const response = await locationRequest(searchkeyword.toLowerCase());
      const result = await locationTransform(response);
      setIsLocationLoading(false);
      setLocation(result);
    } catch (err) {
      setIsLocationLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    onSearch(keyword);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        location,
        error,
        isLocationLoading,
        keyword,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
