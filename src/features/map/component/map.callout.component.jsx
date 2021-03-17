import React from 'react';
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from '../../../components/CompactResturantInfo';

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};
