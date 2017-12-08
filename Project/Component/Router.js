import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import Login from './Login';
import Register from './Register';
export const StackNavigation = StackNavigator({
    Login:{
        screen: Login
    },
    Home: {
        screen: Home,
    },
    Register: {
        screen: Register
    }
});