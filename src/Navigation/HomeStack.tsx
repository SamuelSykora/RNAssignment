import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Screens/HomeScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
