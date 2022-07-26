import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {HomeStackParamList} from '../Navigation/HomeStack';
import {RouteProp} from '@react-navigation/native';

interface IDetailScreenProps {
  route: RouteProp<HomeStackParamList, 'DetailScreen'>;
}

export const DetailScreen = (props: IDetailScreenProps) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{props.route.params.title}</Text>
        <Image
          source={{uri: props.route.params.posterUrl ?? ''}}
          style={{height: 400, width: '100%'}}
        />
        <View style={styles.infoContainer}>
          <View style={styles.timeRow}>
            <Text style={{marginHorizontal: 10}}>
              {props.route.params.year}
            </Text>
            {!!props.route.params.duration && (
              <Text>{props.route.params.duration} min.</Text>
            )}
          </View>
          {props.route.params.genres.length !== 0 && (
            <Text>Genres: {props.route.params.genres.join(', ')}</Text>
          )}
          {!!props.route.params.director && (
            <Text>Directed by: {props.route.params.director}</Text>
          )}
          {!!props.route.params.actors && (
            <Text>Starring: {props.route.params.actors}</Text>
          )}
          <Text>{props.route.params.plot}</Text>
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
    maxWidth: '95%',
  },
  title: {
    marginLeft: 25,
  },
  timeRow: {
    display: 'flex',
    flexDirection: 'row',
  },
});
