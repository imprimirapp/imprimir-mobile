import React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { Button } from 'native-base';
import { withNavigation } from 'react-navigation';

import ViewShadow from '../../../../../widgets/ViewShadow';
import styles from '../../styles/messageStyle';

const Message = props => (
  <ViewShadow>
    <Button style={styles.contentMessage} transparent onPress={() => props.navigation.navigate('conversation')}>
      <View style={styles.message} >
        <Image style={styles.img} source={require('../../../../../../../assets/images/user_profile.jpg')} />
        <View style={styles.infoMessage}>
          <Text style={styles.nameUser}>{props.userName}</Text>
          <Text style={styles.messageDescription}>{props.message}</Text>
        </View>
      </View>
    </Button>
  </ViewShadow>
);

export default withNavigation(Message);