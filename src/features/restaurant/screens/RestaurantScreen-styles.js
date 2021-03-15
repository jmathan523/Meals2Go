import { View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native-paper';

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantListPage = styled(View)`
  flex: 1;
`;

export const Progressbar = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
