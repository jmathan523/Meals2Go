import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

import { SafeAreaContainer } from '../../../components/SafeAreaView';
import { Spacer } from '../../../components/Spacer';
import { RestaurantInfoCard } from '../components/Restaurant-Info-Card';
import {
  RestaurantList,
  RestaurantListPage,
} from '../screens/RestaurantScreen-styles';

const Container = styled(View)`
  padding: 16px;
`;
export const RestaurantDetailScreen = ({ route }) => {
  const { singleRestaurant } = route.params;
  return (
    <SafeAreaContainer>
      <Container>
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard restaurant={singleRestaurant} />
        </Spacer>
      </Container>
    </SafeAreaContainer>
  );
};
