import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import { Container } from 'native-base';
import styles from './styles/chatViewStyles';


const ChatView = props => (
  <View style={styles.chatView}>
    {console.log(props)}
    <ScrollView>
      <View style={styles.contentMessage}>
        <View style={[styles.message, styles.messageReceived]}>
          <Text style={styles.textMessage}>Lorem ipsum sit amet, cons</Text>
        </View>
        <Text style={styles.hour}>2:57 pm</Text>
      </View>

      <View style={[styles.contentMessage,styles.contentSend]}>
        <View style={[styles.message,styles.messageSend]}>
          <Text style={styles.textMessage}>Lorem ipsum sit amet, cons</Text>
        </View>
        <Text style={[styles.hour,styles.hourSend]}>3:03 pm</Text>
      </View>

      <View style={[styles.contentMessage,styles.contentSend]}>
        <View style={[styles.message,styles.messageSend]}>
          <Text style={styles.textMessage}>Lorem ipsum sit amet, cons</Text>
        </View>
        <Text style={[styles.hour,styles.hourSend]}>3:04 pm</Text>
      </View>

    </ScrollView>
  </View>
);


export default ChatView;