import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  TextInput
} from 'react-native';
export default class Home extends Component<{}> { 
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../../Images/home.png')}
      />
    ),
  };
  render() {     
    return (
      <View>
          <Text>Home</Text>
      </View>
    );
  }
}

