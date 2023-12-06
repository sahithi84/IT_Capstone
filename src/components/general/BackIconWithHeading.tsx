/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer

const BackIconWithTitle = ({title, navigation}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 18,
        paddingHorizontal: 24,
        paddingBottom: 12,
      }}>
      <TouchableOpacity
        onPress={() => {
          if (!navigation) {
            return;
          }
          // @ts-ignore
          navigation.replace('Protected', {screen: 'Dashboard'});
        }}
        style={{
          backgroundColor: 'white',
          borderRadius: 25,
          height: 40,
          width: 40,
          alignItems: 'center',
          justifyContent: 'center',
          left: -10,
        }}
        hitSlop={{left: 50, right: 50, top: 50, bottom: 50}}>
        <Icon name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          paddingLeft: 16,
          color: 'black',
          left: -15,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default BackIconWithTitle;
