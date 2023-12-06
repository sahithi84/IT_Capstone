import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {themes} from '../../theme';

export const ErrorText = ({errorText = ''}) => {
  return <Text style={styles.errorText}>{errorText}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    top: 18,
    ...themes.fontSizes.small,
    zIndex: -1,
  },
});
