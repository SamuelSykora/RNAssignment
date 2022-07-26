import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HomeStackParamList} from '../Navigation/HomeStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

export interface ICarouselItem {
  id: number;
  title: string;
  year: string;
  duration: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string | null;
}

interface ICarouselItemProps {
  value: ICarouselItem;
}

export const CarouselItem = (props: ICarouselItemProps) => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen', props.value)}>
        <Text>{props.value.title}</Text>
        <Image
          source={{uri: props.value.posterUrl ?? ''}}
          style={styles.customImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 5,
  },
  customImage: {
    width: 50,
    height: 100,
  },
});
