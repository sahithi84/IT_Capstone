/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "../../../general/Card";
import Button from "../../../general/Button";
import { themes } from "../../../../theme";
import moment from "moment";
import CountdownTimer from "../../../general/CountDownTimer";
import CancellationReasonForm from "../TripsCard/CancellationReasonForm";
import { TripDetails } from "../TripsCard/TripDetails";
import { CallCustomer } from "../TripsCard/CallCustomer";
import StickyTripTypeLabel from "../TripsCard/StickyTripTypeLabel";
import { DriverGroupForm } from "../../CreateTrip/DriverGroupForm";
import { useGetTripFareAmount } from "../../../../hooks/trips/useGetTripFareAmount";
import { EditTrip } from "../TripsCard/EditTrip";
import { getPrefillablePaymentType } from "../../../../utils/getPrefillablePaymentType";
import ElapsedTimeTimer from "../../../general/ElapsedTimeTimer";
import { CancelButton } from "../TripsCard/CancelButton";

const SingleTripView = ({
  tripData,
  pickupAt,
  handleCancelTrip,
  handleAssignTrip,
  showCancelReason,
  tripKey,
  handleToggleDriversForm,
  showDriversForm,
  navigation,
}: any) => {
  const { fareEstimate } = useGetTripFareAmount({ tripData });

  const [dontShowAssign, setDontShowAssign] = useState(false);

  return (
    <Card
      style={{
        position: "relative",
        paddingTop: 0,
        paddingHorizontal: 0,
        overflow: "hidden",
      }}
    >
      <StickyTripTypeLabel
        tripData={tripData}
        style={{
          position: "relative",
          padding: 7,
          borderBottomLeftRadius: 0,
        }}
        textStyle={{ fontSize: 14, textAlign: "center" }}
      />
      {tripKey === "request_list" ? (
        <EditTrip
          style={{ top: 30 }}
          tripData={tripData}
          navigation={navigation}
          triggerFrom="single_trip_detail"
        />
      ) : null}

      <View style={{ padding: 16 }}>
        <View style={styles.topHeader}>
          <View style={styles.firstHalf}>
            <Text style={styles.idText}>Trip ID:</Text>
            <Text style={[styles.idText, { fontWeight: "500" }]}>
              {tripData?.unique_id}
            </Text>

            {/* <Text style={styles.stateText}>Driver State: {state}</Text> */}
            {/* @ts-ignore */}
            {tripData?.confirmation_code ? (
              <View style={{ paddingTop: 5 }}>
                <Text style={styles.idText}>OTP:</Text>
                <Text style={[styles.idText, { fontWeight: "500" }]}>
                  {/* @ts-ignore */}
                  {tripData?.confirmation_code}
                </Text>
              </View>
            ) : null}
            {/* @ts-ignore */}
            {tripData?.typename || tripData?.city_type_detail ? (
              <>
                <Text style={[styles.addressText, { marginTop: 5 }]}>
                  {/* @ts-ignore */}
                  {tripData?.typename || tripData?.city_type_detail?.typename}
                </Text>
              </>
            ) : null}

            <Text style={[styles.userEmail, { paddingTop: 7 }]}>
              Booked by:{" "}
              <Text style={{ fontWeight: "600" }}>
                {/* @ts-ignore */}
                {tripData?.dispatcher_details?.first_name} {/* @ts-ignore */}
                {tripData?.dispatcher_details?.last_name}
              </Text>
            </Text>
            <Text style={[styles.userEmail, { paddingTop: 7 }]}>
              Payment Mode:{" "}
              <Text style={{ fontWeight: "600" }}>
                {/* @ts-ignore */}
                {getPrefillablePaymentType({
                  paymentMode: tripData?.payment_mode,
                })}
              </Text>
            </Text>
            {tripData?.server_start_time_for_schedule ? (
              <>
                <Text
                  style={{
                    ...themes.fontSizes.small,
                    color: "black",
                    paddingVertical: 7,
                  }}
                >
                  Pickup At:{" "}
                  {moment(tripData?.server_start_time_for_schedule).format(
                    "DD MMM 'YY hh:mm a"
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

          <View style={styles.secondHalf}>
            <View
              style={{
                backgroundColor: "#DCF3C0",
                paddingVertical: 3,
                paddingHorizontal: 12,
                borderRadius: 3,
              }}
            >
              <Text style={[styles.pickupText, { fontWeight: "300" }]}>
                PICK UP:
              </Text>
              <Text
                style={[styles.pickupText, { fontSize: 12, fontWeight: "400" }]}
              >
                {pickupAt}
              </Text>
            </View>

            <CancelButton
              tripKey={tripKey}
              handleCancelTrip={handleCancelTrip}
            />

            {/* @ts-ignore */}
            {tripKey === "request_list" &&
            tripData?.is_schedule_trip === true &&
            !dontShowAssign ? (
              <Button
                buttonStyles={styles.assignRideButton}
                onPress={handleToggleDriversForm}
                textStyles={styles.cancelButtonText}
              >
                Assign Trip
              </Button>
            ) : null}
          </View>
        </View>
        {showCancelReason ? (
          <CancellationReasonForm
            // @ts-ignore
            tripData={tripData}
          />
        ) : null}
        {showDriversForm ? (
          <>
            <DriverGroupForm
              containerStyle={{ marginTop: 12 }}
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
                color: "black",
                fontWeight: "400",
                textAlign: "center",
                ...themes.fontSizes.small,
              }}
            >
              Assign Now
            </Button>
          </>
        ) : null}

        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.userName}>Price Details</Text>
          <Text style={styles.userEmail}>
            {/* @ts-ignore */}
            Distance:{" "}
            {tripData?.fare_estimate_info?.distance
              ? parseFloat(tripData?.fare_estimate_info?.distance)?.toFixed(1) +
                " km"
              : parseFloat(fareEstimate?.distance)?.toFixed(1) + " km"}
          </Text>
          <Text style={styles.userEmail}>
            {/* @ts-ignore */}
            Time:{" "}
            {tripData?.fare_estimate_info?.time
              ? parseFloat(tripData?.fare_estimate_info?.time)?.toFixed(1) +
                " min"
              : parseFloat(fareEstimate?.time)?.toFixed(1) + " min"}
          </Text>
          <Text style={styles.userEmail}>
            {/* @ts-ignore */}
            Fare:{" "}
            {`₹ ${
              // @ts-ignore
              tripData?.fare_estimate_info?.estimated_fare
                ? tripData?.payment_mode === 3
                  ? 0
                  : parseFloat(
                      tripData?.fare_estimate_info?.estimated_fare
                    )?.toFixed(1)
                : parseFloat(fareEstimate?.estimated_fare)?.toFixed(1)
            }`}
          </Text>
          {/* <Text style={styles.userEmail}>
            Price Per Kilometer: {`₹ ${tripData?.price_per_unit_distance}`}
          </Text> */}
        </View>
        <View
          style={{
            paddingVertical: 12,
            borderTopWidth: 1,
            borderColor: "grey",
            marginTop: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 25,
          }}
        >
          <View style={{}}>
            <Text style={styles.userName}>Customer Details</Text>
            <Text style={styles.userEmail}>
              {/* @ts-ignore */}
              {tripData?.user_detail?.first_name} {/* @ts-ignore */}
              {tripData?.user_detail?.last_name}
            </Text>
            {/* <Text style={styles.userEmail}>{tripData?.user_detail?.email}</Text> */}
            <Text style={styles.userEmail}>
              {/* @ts-ignore */}
              {tripData?.user_detail?.phone}
            </Text>
          </View>
          <CallCustomer
            phoneNumber={tripData?.user_detail?.phone}
            style={{ alignSelf: "center" }}
          />
        </View>

        <View>
          <TripDetails tripData={tripData} />
        </View>
      </View>
    </Card>
  );
};

export default SingleTripView;

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
  },
  firstHalf: {},
  idText: {
    fontSize: 14,
    fontWeight: "400",
    color: "black",
    // paddingBottom: 12,
  },
  stateText: {
    fontSize: 14,
    color: "gray",
  },
  secondHalf: {
    alignItems: "flex-end",
    marginTop: 16,
  },
  pickupText: {
    fontSize: 14,
    color: "green",
    width: 82,
  },
  viewDetailButton: {
    backgroundColor: "#7529f6",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginTop: 12,
  },
  viewDetailButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  userName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
    paddingBottom: 6,
  },
  userEmail: {
    fontSize: 13,
    color: "#000",
    fontWeight: "400",
  },
  cancelButton: {
    backgroundColor: "#FDD7D7",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    width: "100%",
    marginTop: 7,
  },
  assignRideButton: {
    backgroundColor: "#03D7D7",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    width: "100%",
    marginTop: 7,
  },
  cancelButtonText: {
    color: "black",
    fontWeight: "400",
    textAlign: "center",
  },
  addressTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#111",
    paddingBottom: 12,
  },
  addressText: {
    fontSize: 13,
    color: "#333",
  },
});
