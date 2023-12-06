import { ScrollView, View } from "react-native";
import React, { memo } from "react";
import { CancelTripButton } from "../CancelTrip/Button";
import { CityRegularTripUI } from "./RegularTripUI";
import { CityScheduledTripUI } from "./ScheduledTripUI";

function CityTripsOTPInterface({ tripData, allData }: any) {
  return (
    <View
      style={{
        width: "100%",
        paddingTop: 24,
        paddingBottom: 42,
        backgroundColor: "#263238",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <ScrollView contentContainerStyle={{ paddingVertical: 0 }}>
        <View style={{}}>
          {!tripData?.is_schedule_trip ? (
            <CityRegularTripUI tripData={tripData} allData={allData} />
          ) : null}
          {tripData?.is_schedule_trip ? (
            <CityScheduledTripUI tripData={tripData} allData={allData} />
          ) : null}
          <CancelTripButton
            wrapperStyle={{ position: "relative", paddingTop: 24 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export const MemoizedCityTripsOTPInterface = memo(CityTripsOTPInterface);
