/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RedMapPin, YellowMapPin} from '../../../../svgs';
import LineDivider from '../../../general/LineDivider';

export const TripDetails = ({tripData}: any) => {
  const {provider_detail, vehicle_detail, source_address, destination_address} =
    tripData;

  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <YellowMapPin />
          <Text style={[styles.addressText, {fontSize: 16, fontWeight: '500'}]}>
            Pickup Location
          </Text>
        </View>
        <Text style={[styles.addressText, {fontWeight: '300'}]}>
          {source_address}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <RedMapPin />
          <Text style={[styles.addressText, {fontSize: 16, fontWeight: '500'}]}>
            Drop Location
          </Text>
        </View>
        <Text style={[styles.addressText, {fontWeight: '300'}]}>
          {destination_address}
        </Text>
      </View>

      {provider_detail ? (
        <>
          <LineDivider color="black" style={{marginBottom: 24}} />

          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>Driver Details</Text>
            <Text style={styles.userEmail}>
              {provider_detail?.first_name} {provider_detail?.last_name}
            </Text>
            <Text style={styles.userEmail}>{provider_detail?.email}</Text>
            <Text style={styles.userEmail}>{provider_detail?.phone}</Text>
          </View>
        </>
      ) : null}
      {vehicle_detail ? (
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>Vehicle Details</Text>
          <Text style={styles.userEmail}>
            Vehicle Number: {vehicle_detail?.[0]?.plat_no}
          </Text>
          <Text style={styles.userEmail}>
            Model: {vehicle_detail?.[0]?.model}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userInfoContainer: {
    marginBottom: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    paddingBottom: 6,
  },
  userEmail: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
  },
  addressContainer: {
    marginBottom: 14,
  },
  addressText: {
    fontSize: 14,
    color: '#000',
    paddingBottom: 12,
  },
});
