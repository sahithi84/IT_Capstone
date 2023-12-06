import { View, Text } from "react-native";
import React from "react";
import { OTPUI } from "./OTPUI";
import { SalesCounter } from "../../../svgs/SalesCounter";

// 4 digit otp
export function AirportScheduledTripUI({ tripData }: any) {
  return (
    <View style={{ paddingHorizontal: 19 }}>
      <View style={{ alignItems: "center" }}>
        <SalesCounter />
      </View>
      <Text
        style={{
          color: "white",
          fontFamily: "Poppins-Medium",
          fontSize: 20,
          textAlign: "center",
          paddingTop: 24,
        }}
      >
        Please proceed to the counter{" "}
      </Text>

      <View
        style={{
          paddingTop: 12,
          paddingBottom: 19,
          flexDirection: "row",
          justifyContent: tripData?.total ? "space-between" : "center",
        }}
      >
        {tripData?.total ? (
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins-Bold",
              fontSize: 12,
              paddingHorizontal: 3,
            }}
          >
            Amount: {`${tripData?.total}`}
          </Text>
        ) : null}
        <View>
          <OTPUI otp={tripData?.confirmation_code} />
        </View>
      </View>
    </View>
  );
}
