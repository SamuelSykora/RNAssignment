import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {HomeStackParamList} from '../Navigation/HomeStack';
import {RouteProp} from '@react-navigation/native';
import {CustomText as Text} from '../Components/CustomText';

interface IDetailScreenProps {
  route: RouteProp<HomeStackParamList, 'DetailScreen'>;
}

export const DetailScreen = (props: IDetailScreenProps) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: props.route.params.posterUrl ?? ''}}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.timeRow}>
            <Text style={styles.label}>{props.route.params.year}</Text>
            {!!props.route.params.duration && (
              <Text style={[styles.label, styles.duration]}>
                {props.route.params.duration} min.
              </Text>
            )}
          </View>
          {props.route.params.genres.length !== 0 && (
            <Text>
              <Text style={styles.label}>Genres:</Text>{' '}
              {props.route.params.genres.join(', ')}
            </Text>
          )}
          {!!props.route.params.director && (
            <Text>
              <Text style={styles.label}>Directed by:</Text>{' '}
              {props.route.params.director}
            </Text>
          )}
          {!!props.route.params.actors && (
            <Text>
              <Text style={styles.label}>Starring:</Text>{' '}
              {props.route.params.actors}
            </Text>
          )}
          <Text>
            <Text style={styles.label}>Plot:</Text> {props.route.params.plot}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  infoContainer: {
    width: '90%',
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 400,
  },
  timeRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
  },
  duration: {
    marginLeft: 10,
  },
});
