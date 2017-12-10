import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './Login';
import Register from './Register';
import Tabbar from './Tabbar';
export const StackNavigation = StackNavigator({
    Login:{
        screen: Login,     
    },
    Home: {
        screen: Tabbar,
    },
    Register: {
        screen: Register
    }
},{
    navigationOptions:{
        header: null,            
    },
});