import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Chat extends Component{
    static navigationOptions = {
        tabBarIcon: () => (
          <Image
            style={{width:40,height:40}}
            source={require('../../Images/chat.png')}
          />
        ),
      };
    render(){
        return(
            <View>
                <Text>Chat</Text>
            </View>
        );
    }
}