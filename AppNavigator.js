import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Category from "./screens/Category";
import Categories from "./screens/Categories";

const AppNavigator = createStackNavigator({
    Categories: {
        screens: Categories
    },
    Category: {
        screens: Category
    }
})

export default AppNavigator;