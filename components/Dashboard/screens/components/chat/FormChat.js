import React from 'react';
import { View, Text } from 'react-native';
import { Form, Input, Item, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles/FormChatStyles';


const FormChat = props => (
  <View style={styles.formChat}>
    <Button transparent  style={[styles.button, styles.buttonFile]}>
      <Icon solid style={styles.icon}  name="paperclip"/>
    </Button>

    <Form style={styles.form}>
        <Input style={styles.fieldChat} placeholder="Escribe tu mensaje" />
    </Form>

    <Button transparent  style={[styles.button, styles.buttonSend]}>
      <Icon solid  style={styles.icon}  name="paper-plane"/>
    </Button>

  </View>
);


export default FormChat;