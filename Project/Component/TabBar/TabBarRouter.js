import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Home from './Home';
import Favorite from './Favorite';
import Chat from './Chat';
import Notify from './Notify';
import Profile from './Profile';

const HeaderSearch = ()=>{
    <TextInput
        inlineImageLeft='search_icon'
   />
}

export const TabBarNavigation = TabNavigator({
    Home: {
        screen: Home,
    },
    Favorite: {
        screen: Favorite,
    },
    Chat: {
        screen: Chat,
    },
    Notify: {
        screen: Notify,
    },
    Profile: {
        screen: Profile,
    },
},{
   tabBarPosition: 'bottom',
   tabBarOptions:{
       activeTintColor: '#ffff',
        style: {
            backgroundColor: 'white',
        },
        showIcon: true,
        showLabel: false,
   },
});