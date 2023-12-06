/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {AuthContext} from '../../../../App';
import Icon from 'react-native-vector-icons/FontAwesome';
import DispatcherDetails from './DispatcherDetails';

export interface MenuItemInterface {
  label: string;
  onPress: () => void;
}

const menuOptions = [
  // {
  //   name: 'normal',
  //   title: 'Requested Trips',
  //   icon: <Icon name="car" color="black" size={25} />,
  // },
  // {
  //   name: 'accepted',
  //   title: 'Accepted Trips',
  //   icon: <Icon name="car" color="black" size={25} />,
  // },
  // {
  //   name: 'arrived',
  //   title: 'Arrived Trips',
  //   icon: <Icon name="car" color="black" size={25} />,
  // },
  // {
  //   name: 'started',
  //   title: 'Started Trips',
  //   icon: <Icon name="car" color="black" size={25} />,
  // },
  {
    name: 'logout',
    title: 'Logout',
    icon: <Icon name="sign-out" color="black" size={25} />,
  },
];

export const SideBar: React.FC = () => {
  const navigation = useNavigation();
  // @ts-ignore
  const {signOut} = React.useContext(AuthContext);

  const handleSelectOption = (value: string) => {
    switch (value) {
      case 'normal':
        // @ts-ignore
        navigation.navigate('Protected', {
          screen: 'TripsList',
          params: {key: 'request_list', screenHeading: 'Requested Trips'},
        });
        break;
      case 'accepted':
        // @ts-ignore
        navigation.navigate('Protected', {
          screen: 'TripsList',
          params: {
            key: 'accepted_request_list',
            screenHeading: 'Accepted Trips',
          },
        });
        break;
      case 'arrived':
        // @ts-ignore
        navigation.navigate('Protected', {
          screen: 'TripsList',
          params: {key: 'arrived_request_list', screenHeading: 'Arrived Trips'},
        });
        break;
      case 'started':
        // @ts-ignore
        navigation.navigate('Protected', {
          screen: 'TripsList',
          params: {key: 'started_request_list', screenHeading: 'Started Trips'},
        });
        break;
      case 'logout':
        // @ts-ignore
        signOut();

        break;
      default:
        // @ts-ignore
        navigation.navigate('Protected', {
          screen: 'TripsList',
          params: {key: 'request_list', screenHeading: 'Requested Trips'},
        });
    }
  };
  return (
    <View style={{backgroundColor: 'orange', position: 'relative'}}>
      <DispatcherDetails />
      {/* <TouchableHighlight
        underlayColor="grey"
        onPress={() => {
          // @ts-ignore
          navigation.replace('Protected', {screen: 'CreateTripWithoutOTP'});
        }}
        style={{paddingVertical: 12}}>
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            textAlign: 'center',
            fontWeight: '400',
            paddingHorizontal: 14,
          }}>
          Dispatcher Trip Allocation Old Flow (Without OTP)
        </Text>
      </TouchableHighlight> */}
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          paddingTop: 24,
        }}>
        {menuOptions?.map((option, index) => {
          return (
            <TouchableHighlight
              underlayColor="rgba(13, 200, 34, 0.5)"
              onPress={() => {
                handleSelectOption(option.name);
              }}
              style={{paddingVertical: 12, paddingHorizontal: 24}}
              key={index}>
              <View style={{flexDirection: 'row', gap: 12}}>
                {option.icon}
                <Text style={{color: 'black'}}>{option.title}</Text>
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    </View>
  );
};
