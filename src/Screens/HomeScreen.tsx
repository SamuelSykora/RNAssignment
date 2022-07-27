import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Carousel, ICarousel} from '../Components/Carousel';
import {getData} from '../getData';

export interface ICarousels {
  carousels?: ICarousel[] | null;
}

export const HomeScreen = () => {
  const [carousels, setCarousels] = useState<ICarousels>();

  useEffect(() => {
    (async () => {
      setCarousels(await getData());
    })();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.carouselsContainer}>
          {carousels?.carousels?.map((item, carouselIndex) => (
            <Carousel value={item} key={'carousel' + carouselIndex} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  carouselsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});
