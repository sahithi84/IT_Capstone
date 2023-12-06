import { ScrollView, View } from "react-native";
import React, { memo } from "react";
import { AirportRegularTripUI } from "./RegularTripUI";
import { AirportScheduledTripUI } from "./ScheduledTripUI";
import { CancelTripButton } from "../CancelTrip/Button";

function AirportTripsOTPInterface({ tripData }: any) {
  return (
    <View
      style={{
        width: "100%",
        paddingTop: 24,
        backgroundColor: "#263238",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 42,
      }}
    >
      <ScrollView>
        <View>
          {!tripData?.is_schedule_trip ? (
            <AirportRegularTripUI tripData={tripData} />
          ) : null}

          {tripData?.is_schedule_trip ? (
            <AirportScheduledTripUI tripData={tripData} />
          ) : null}

          <CancelTripButton
            wrapperStyle={{ position: "relative", paddingTop: 24 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export const MemoizedAirportTripsOTPInterface = memo(AirportTripsOTPInterface);
