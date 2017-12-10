import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Favorite extends Component{
    static navigationOptions = {
        tabBarIcon: () => (
          <Image
            source={require('../../Images/favorite.png')}
          />
        ),
      };
    render(){
        return(
            <View>
                <Text>Favorite</Text>
            </View>
        );
    }
}