/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {themes} from '../../../../theme';

export default function StickyTripTypeLabel({
  tripData,
  style = {},
  textStyle = {},
}: any) {
  return (
    <>
      {tripData?.is_schedule_trip === true ? (
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: 'orange',
            padding: 5,
            borderBottomLeftRadius: 7,
            zIndex: 100,
            ...style,
          }}>
          <Text
            style={{...themes.fontSizes.small, color: 'black', ...textStyle}}>
            Scheduled Trip
          </Text>
        </View>
      ) : (
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: '#f43434d0',
            padding: 5,
            borderBottomLeftRadius: 7,
            ...style,
          }}>
          <Text
            style={{...themes.fontSizes.small, color: 'white', ...textStyle}}>
            Immediate Trip
          </Text>
        </View>
      )}
    </>
  );
}
