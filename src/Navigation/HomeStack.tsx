import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Screens/HomeScreen';
import {ICarouselItem} from '../Components/CarouselItem';
import {DetailScreen} from '../Screens/DetailScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
  DetailScreen: ICarouselItem;
};

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home Screen'}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={data => {
          return {
            title: data.route.params.title,
          };
        }}
      />
    </Stack.Navigator>
  );
};
