import React from 'react';
import { Item, Button, Icon, Input } from 'native-base';

import ViewShadow from '../../../../../widgets/ViewShadow';

import styles from '../../styles/BuzonTabStyle';
import styled from 'styled-components';



const Search = props => (
  <ViewShadow >
    <Item style={styles.searchField}>
      <Input style={styles.field}  placeholder="Buscar..." />
      <Button transparent style={styles.searchButton}>
        <Icon style={styles.icon} name="ios-search" />
      </Button>
    </Item>
  </ViewShadow>
);

export default Search;
