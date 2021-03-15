import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Text, View } from 'react-native';

import { Spacer } from '../../../components/Spacer';
// import { Text } from '../../../components/Typography';
import star from '../../../../assets/star';
import open from '../../../../assets/openNow';
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
  Title,
  TextError,
  RatingText,
} from './Restaurant-info-Card-styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
    noOfRatings,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={2}>
      <View>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={18}
                height={18}
              />
            ))}
            {/* <RatingText>{`(${noOfRatings} reviews)`}</RatingText> */}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <TextError variant="error">CLOSED TEMPORARILY</TextError>
            )}

            {!isClosedTemporarily && isOpenNow && (
              <SvgXml xml={open} width={20} height={20} />
            )}

            {!isClosedTemporarily && icon && (
              <Spacer position="left" size="medium">
                <Icon source={{ uri: icon }} />
              </Spacer>
            )}
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
