import React, { Component } from 'react';
import { View, Text, Image, TextInput, Dimensions } from 'react-native';
import {TabBarNavigation} from './TabBar/TabBarRouter';

const { width, height } = Dimensions.get('window');

export default class Tabbar extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{backgroundColor:'red', shadowOpacity: 1 ,shadowRadius: 3,
                shadowColor:'gray',
                flexDirection:'row',
                shadowOffset: {
                    height: 1,
                    width: 1
                },elevation: 3}}>
                    <TextInput style={{width: width-40}}/>
                    <Image style={{width:40, height: 40, borderRadius:20,justifyContent:'center',}} source={require('../Images/avatar.png')}/>
                </View>
                <TabBarNavigation/>
            </View>           
        );
    }
}