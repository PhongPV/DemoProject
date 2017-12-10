import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Notify extends Component{
    static navigationOptions = {
        tabBarIcon: () => (
          <Image
            source={require('../../Images/notify.png')}
          />
        ),
      };
    render(){
        return(
            <View>
                <Text>Notify</Text>
            </View>
        );
    }
}