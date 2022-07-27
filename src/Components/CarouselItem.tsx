import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {HomeStackParamList} from '../Navigation/HomeStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {CustomText as Text} from './CustomText';

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
        <Image
          source={{uri: props.value.posterUrl ?? ''}}
          style={styles.image}
        />
        <Text style={styles.text}>{props.value.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 10,
    maxWidth: 100,
  },
  image: {
    resizeMode: 'contain',
    width: 100,
    height: 180,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
