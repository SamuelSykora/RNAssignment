import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Carousel, ICarousel} from '../Components/Carousel';
import {getData} from '../API/getData';

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
    <SafeAreaView style={styles.container}>
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
  container: {
    padding: 2,
  },
  carouselsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    marginHorizontal: 5,
  },
});
