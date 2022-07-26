import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export interface ICustomImage {
  uri?: string | undefined;
}

export interface ICarouselItem {
  title: string;
  image: ICustomImage;
}

interface ICarouselItemProps {
  value: ICarouselItem;
}

export const CarouselItem = (props: ICarouselItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{props.value.title}</Text>
      <Image source={props.value.image} style={styles.customImage} />
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
