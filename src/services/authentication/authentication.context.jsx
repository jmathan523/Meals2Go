import React, { createContext, useState } from 'react';
import * as firebase from 'firebase';

import { LoginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const isLogin = async () => {
    setIsLoading(true);
    try {
      const response = await LoginRequest(email, password);
      setUser(response.data);
      console.log('RESPONSE:', response);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(true);
      console.log(e);
    }
  };

  return (
    <AuthenticationContext.Provider value={{ user, isLoading, error, isLogin }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
