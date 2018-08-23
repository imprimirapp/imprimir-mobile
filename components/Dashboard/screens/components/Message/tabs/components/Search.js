import React from 'react';
import { Item, Button, Icon, Input } from 'native-base';

import ViewShadow from '../../../../../widgets/ViewShadow';

import styles from '../../styles/BuzonTabStyle';



const Search = props => (
  <ViewShadow >
    <Item style={styles.searchField}>
      <Input   placeholder="Buscar..." />
      <Button transparent style={styles.searchButton}>
        <Icon name="ios-search" />
      </Button>
    </Item>
  </ViewShadow>
);

export default Search;
