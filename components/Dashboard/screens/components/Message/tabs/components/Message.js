import React from 'react';
import { View, Text, Image } from 'react-native';

import ViewShadow from '../../../../../widgets/ViewShadow';
import styles from '../../styles/messageStyle';

const Message = props => (
  <ViewShadow>
    <View style={styles.message}>
      <Image style={styles.img} source={require('../../../../../../../assets/images/user_profile.jpg')} />
      <View style={styles.infoMessage}>
        <Text style={styles.nameUser}>{props.userName}</Text>
        <Text style={styles.messageDescription}>{props.message}</Text>
      </View>
    </View>
  </ViewShadow>
);

export default Message;