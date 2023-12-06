/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {themes} from '../../../../theme';

export const CallCustomer = ({style = {}, phoneNumber = 1234567890}) => {
  const handlePhonePress = () => {
    // @ts-ignore
    if (phoneNumber) {
      // @ts-ignore
      Linking.openURL(`tel:${phoneNumber}`);
    }
  };

  return (
    <>
      <TouchableOpacity
        style={{
          padding: 5,
          borderRadius: 3,
          backgroundColor: '#CCE8F8',
          ...style,
        }}
        onPress={handlePhonePress}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="phone" size={14} color="black" style={{marginRight: 8}} />
          <Text
            style={{
              color: 'black',
              fontWeight: '400',
              ...themes.fontSizes.small,
              maxWidth: 200,
            }}>
            Call Customer
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
