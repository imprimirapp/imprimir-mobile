import React from 'react';
import { View, Text, ScrollView, ProgressBarAndroid } from 'react-native';
import { Container } from 'native-base';
import * as Progress from 'react-native-progress';

import ViewShadow from '../../../../widgets/ViewShadow';
import styles from './styles/tabStyle';



const ActivityTab = props => (
  <Container>
    <ScrollView>
      <Container style={styles.container}>
        <ViewShadow>
          <View style={styles.boxActivity}>
            <Text style={styles.boxTitle}>¡Verifica tu Correo Electrónico!</Text>
            <Text style={styles.boxDescription}>Dignissimos incidunt suscipit minima. Et corporis ipsam. Quis aperiam soluta quibusdam tempore aperiam.</Text>
            <Text style={styles.points}>+10 Pts</Text>
          </View>
        </ViewShadow>
      </Container>
    </ScrollView>

    <View style={styles.progress}>
        <Text style={styles.progressPoints}>10/100pts</Text>
        <View style={styles.contentProgress}>
          <Progress.Bar
            progress={0.2}
            width={310}
            height={15}
            color='#008EDF'
            style={{
              backgroundColor:'#ccc',
              borderWidth:0
            }}
          />
        </View>
        <Text>Ya casi eres Nivel Junior... ¡Sigue así!</Text>
    </View>
  </Container>
);


export default ActivityTab;