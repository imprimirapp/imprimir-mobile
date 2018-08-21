import React from 'react';
import { View, Text, WebView, ScrollView } from 'react-native';
import { Container } from 'native-base';
import styles  from './styles/tabStyle';

import ViewShadow from '../../../../widgets/ViewShadow';

const generalTab = props => (
  <Container style={styles.container}>
    <ViewShadow>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>¡Felicidades!</Text>
        <WebView source={{html:"<p style='text-align:justify;font-size:14px;margin:0'> Sequi praesentium perspiciatis cupiditate quasi recusandae consectetur. Odio optio dignissimos voluptatem ipsa quidem. Doloremque eligendi facere quae. Omnis enim quibusdam est modi. Repellendus dolor itaque sequi facere qui omnis ducimus.</p>"}}  />
      </View>
    </ViewShadow>
  </Container>
);


export default generalTab;