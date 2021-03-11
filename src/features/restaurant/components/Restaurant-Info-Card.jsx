import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'CKs Bakery',
    icon,
    photos = [
      'https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1005&q=80',
    ],
    isOpenNow = true,
    isClosedTemporarily,
    address = '40/3 Arunachalam street Chindatripet',
    rating = 4,
  } = restaurant;
  return (
    <Card elevation={5}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.text}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cover: {
    padding: 16,
    backgroundColor: 'transparent',
  },
  text: {
    padding: 16,
  },
});
