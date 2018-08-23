import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from '../../styles/historyStyle';


const history = [
  {
    img:'https://s3.amazonaws.com/uifaces/faces/twitter/geran7/128.jpg',
    userName:'Maria Jose',
    message:'Lorem ipsum dolor sit amet const.',
    key:'0'
  },
  {
    img:'https://s3.amazonaws.com/uifaces/faces/twitter/nateschulte/128.jpg',
    userName:'Maria Jose',
    message:'Lorem ipsum dolor sit amet const.',
    key:'1'
  },
  {
    img:'https://s3.amazonaws.com/uifaces/faces/twitter/rehatkathuria/128.jpg',
    userName:'Maria Jose',
    message:'Lorem ipsum dolor sit amet const.',
    key:'2'
  },
  {
    img:'https://s3.amazonaws.com/uifaces/faces/twitter/craighenneberry/128.jpg',
    userName:'Maria Jose',
    message:'Lorem ipsum dolor sit amet const.',
    key:'3'
  },

]


const History = props => (
    <View style={styles.contentHistory}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <FlatList
          data={history}
          horizontal={true}
          renderItem={({item}) => (
              <View style={styles.history}>
                <TouchableOpacity>
                  <Image style={styles.imgUser} source={{uri:item.img}} />
                  <Text style={styles.userName}>{item.userName}</Text>
                </TouchableOpacity>
              </View>
          )}
        />
        <View style={styles.history}>
          <TouchableOpacity>
            <Button transparent style={styles.button}>
              <Icon name="plus"/>
            </Button>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
);





export default History;