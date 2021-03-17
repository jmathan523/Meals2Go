import React, { useState, useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { set } from 'react-native-reanimated';
import styled from 'styled-components';
import { LocationContext } from '../../../services/location/location.context';

const SearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  top: 10px;
  z-index: 3;
  width: 100%;
`;

export const SearchBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBarContainer>
      <Searchbar
        placeholder="Search"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchBarContainer>
  );
};
