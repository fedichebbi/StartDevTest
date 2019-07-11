import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Planets from './Planets';
import Details from './Details';
const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Details: {screen: Details},
  Planets: {screen: Planets}
});

const App = createAppContainer(MainNavigator);

export default App;
