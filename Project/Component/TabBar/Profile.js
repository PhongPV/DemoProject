import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Profile extends Component{
    static navigationOptions = {
        tabBarIcon: () => (
          <Image
            source={require('../../Images/profile.png')}
          />
        ),
      };
    render(){
        return(
            <View>
                <Text>Profile</Text>
            </View>
        );
    }
}