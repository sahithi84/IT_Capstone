/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

export function Card({children, style}: any) {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        marginVertical: 8,
        elevation: 3,
        ...style,
      }}>
      {children}
    </View>
  );
}
