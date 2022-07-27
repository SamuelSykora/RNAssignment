import React from 'react';
import {CarouselItem, ICarouselItem} from './CarouselItem';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CustomText as Text} from './CustomText';

export interface ICarousel {
  title: string;
  items: ICarouselItem[];
}

interface ICarouselProps {
  value: ICarousel;
}

export const Carousel = (props: ICarouselProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.value.title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.itemsContainer}>
          {props.value.items.map((item, itemIndex) => (
            <CarouselItem value={item} key={'carouselItem' + itemIndex} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
