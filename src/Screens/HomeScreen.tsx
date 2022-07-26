import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Carousel, ICarousel} from '../Components/Carousel';

export const HomeScreen = () => {
  const [carousels, setCarousels] = useState<ICarousel[] | null>(null);

  useEffect(() => {
    setCarousels(
      [...Array(10)].map((_, index) => {
        return {
          title: 'Test Carousel ' + index,
          items: [...Array(10)].map((_2, i) => {
            return {
              title: 'Item' + i,
              image: {
                uri: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/3be93e116eea0c595d82c0e80ea234f4_815eafd7-1092-4408-a278-b3497af72254_480x.progressive.jpg?v=1573652484',
              },
            };
          }),
        };
      }),
    );
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.carouselsContainer}>
          {carousels?.map((item, carouselIndex) => (
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
