import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import ListScreen from '../screens/ListScreen';
import AddScreen from '../screens/AddScreen';

const tabNavigator = createBottomTabNavigator({
  ListScreen,
  AddScreen
});

tabNavigator.path = '';

export default tabNavigator;
