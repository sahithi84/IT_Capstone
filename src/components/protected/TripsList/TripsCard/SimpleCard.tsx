/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, memo} from 'react';
import {Card} from '../../../general/Card';
import {CallCustomer} from './CallCustomer';
import Button from '../../../general/Button';
import {themes} from '../../../../theme';
import CancellationReasonForm from './CancellationReasonForm';
import CountdownTimer from '../../../general/CountDownTimer';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import StickyTripTypeLabel from './StickyTripTypeLabel';
import {DriverGroupForm} from '../../CreateTrip/DriverGroupForm';
import {EditTrip} from './EditTrip';
import {getPrefillablePaymentType} from '../../../../utils/getPrefillablePaymentType';
import ElapsedTimeTimer from '../../../general/ElapsedTimeTimer';
import {CancelButton} from './CancelButton';

const SimpleCard = ({
  tripData,
  handleCancelTrip,
  showCancelReason,
  handleAssignTrip,
  tripCategoryTitle,
  tripKey,
  handleToggleDriversForm,
  showDriversForm,
  navigation,
}: any) => {
  const [dontShowAssign, setDontShowAssign] = useState(false);

  const handleViewTripDetails = () => {
    // @ts-ignore
    navigation.navigate('Protected', {
      screen: 'SingleTripDetails',
      params: {
        tripData: tripData,
        tripId: tripData?._id,
        drawerId: 'RightDrawer',
        tripCategoryTitle: tripCategoryTitle,
        tripKey: tripKey,
      },
    });
  };

  return (
    <Card
      style={{
        backgroundColor: '#E2F6E5',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <TouchableOpacity
        onPress={handleViewTripDetails}
        style={{
          position: 'absolute',
          top: 30,
          right: 0,
          paddingVertical: 5,
          paddingHorizontal: 15,
          borderBottomLeftRadius: 7,
          zIndex: 100,
        }}>
        <Icon name="eye" size={20} color="black" />
      </TouchableOpacity>

      {tripKey === 'request_list' ? (
        <EditTrip tripData={tripData} navigation={navigation} />
      ) : null}
      <StickyTripTypeLabel tripData={tripData} />

      <View
        style={{
          flexDirection: 'row',
          gap: 9,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#A7C586',
            borderRadius: 20,
            width: 38,
            height: 38,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 13,
              color: 'black',
            }}>
            {tripData?.unique_id}
          </Text>
        </View>
        <View>
          <Text style={styles.userEmail}>
            Customer Name:{' '}
            <Text style={{fontWeight: '600'}}>
              {/* @ts-ignore */}
              {tripData?.user_detail?.first_name} {/* @ts-ignore */}
              {tripData?.user_detail?.last_name}
            </Text>
          </Text>
          {/* <Text style={styles.stateText}>Driver State: {state}</Text> */}

          <Text style={styles.addressText}>
            {/* @ts-ignore */}
            {tripData?.destination_address}
          </Text>

          {/* @ts-ignore */}
          {tripData?.confirmation_code ? (
            <View style={{paddingTop: 5}}>
              {/* <Text style={styles.idText}>OTP:</Text> */}
              <Text style={[styles.idText, {fontWeight: '500'}]}>
                {/* @ts-ignore */}
                OTP: {tripData?.confirmation_code}
              </Text>
            </View>
          ) : null}

          {/* @ts-ignore */}
          {tripData?.typename || tripData?.city_type_detail ? (
            <>
              <Text style={[styles.addressText, {marginTop: 5}]}>
                {/* @ts-ignore */}
                {tripData?.typename || tripData?.city_type_detail?.typename}
              </Text>
            </>
          ) : null}

          <Text style={[styles.userEmail, {paddingTop: 7}]}>
            Booked by:{' '}
            <Text style={{fontWeight: '600'}}>
              {/* @ts-ignore */}
              {tripData?.dispatcher_details?.first_name} {/* @ts-ignore */}
              {tripData?.dispatcher_details?.last_name}
            </Text>
          </Text>
          <Text style={[styles.userEmail, {paddingTop: 7}]}>
            Payment Mode:{' '}
            <Text style={{fontWeight: '600'}}>
              {/* @ts-ignore */}
              {getPrefillablePaymentType({paymentMode: tripData?.payment_mode})}
            </Text>
          </Text>
          {tripData?.server_start_time_for_schedule ? (
            <>
              <Text
                style={{
                  ...themes.fontSizes.small,
                  color: 'black',
                  paddingVertical: 7,
                }}>
                Pickup At:{' '}
                {moment(tripData?.server_start_time_for_schedule).format(
                  "DD MMM 'YY hh:mm a",
                )}
              </Text>
              <CountdownTimer
                utcTimestamp={tripData?.server_start_time_for_schedule}
                onNegative={() => {
                  setDontShowAssign(true);
                }}
              />
              <ElapsedTimeTimer
                utcTimestamp={tripData?.server_start_time_for_schedule}
              />
            </>
          ) : null}
        </View>
      </View>

      <View style={{}}>
        <CallCustomer
          style={{marginTop: 12}}
          // @ts-ignore
          phoneNumber={tripData?.user_detail?.phone}
        />
        <CancelButton tripKey={tripKey} handleCancelTrip={handleCancelTrip} />
        {showCancelReason ? (
          <CancellationReasonForm
            // @ts-ignore
            tripData={tripData}
          />
        ) : null}

        {/* @ts-ignore */}
        {tripKey === 'request_list' &&
        tripData?.is_schedule_trip === true &&
        !dontShowAssign ? (
          <>
            <Button
              buttonStyles={styles.assignRideButton}
              onPress={handleToggleDriversForm}
              textStyles={{
                color: 'black',
                fontWeight: '400',
                textAlign: 'center',
                ...themes.fontSizes.small,
              }}>
              Assign Trip
            </Button>
          </>
        ) : null}

        {showDriversForm ? (
          <>
            <DriverGroupForm
              containerStyle={{marginTop: 12}}
              existingData={{
                service_type_id: tripData?.service_type_id,
                latitude: tripData?.sourceLocation?.[0],
                longitude: tripData?.sourceLocation?.[1],
              }}
            />
            <Button
              buttonStyles={styles.assignRideButton}
              onPress={handleAssignTrip}
              textStyles={{
                color: 'black',
                fontWeight: '400',
                textAlign: 'center',
                ...themes.fontSizes.small,
              }}>
              Assign Now
            </Button>
          </>
        ) : null}
      </View>
    </Card>
  );
};

export default memo(SimpleCard);

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 16,
  },
  firstHalf: {},
  idText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    // paddingBottom: 12,
  },
  stateText: {
    fontSize: 14,
    color: 'gray',
  },
  secondHalf: {
    alignItems: 'flex-end',
  },
  pickupText: {
    fontSize: 14,
    color: 'green',
    width: 82,
  },
  viewDetailButton: {
    backgroundColor: '#7529f6',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginTop: 12,
  },
  viewDetailButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    paddingBottom: 6,
  },
  userEmail: {
    fontSize: 13,
    color: '#000',
    fontWeight: '400',
  },
  cancelButton: {
    backgroundColor: '#FDD7D7',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    width: '100%',
    marginTop: 7,
  },
  assignRideButton: {
    backgroundColor: '#03D7D7',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    width: '100%',
    marginTop: 7,
  },
  cancelButtonText: {
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
  },
  addressTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#111',
    paddingBottom: 12,
  },
  addressText: {
    fontSize: 12,
    color: '#333',
  },
});
