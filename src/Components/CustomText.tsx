import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

export const CustomText = ({style, ...rest}: TextProps) => {
  return <Text style={[style, styles.text]} {...rest} />;
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
