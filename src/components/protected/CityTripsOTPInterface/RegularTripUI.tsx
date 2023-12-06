import { View, Text, Linking, ScrollView } from "react-native";
import React from "react";
import { BlackCar, EvsedanCarImg } from "../../../svgs";
import { OTPUI } from "../AirportTripsOTPInterface/OTPUI";
import { ProfileCard } from "./ProfileCard";

export function CityRegularTripUI({ tripData, allData }: any) {
  const handlePhonePress = () => {
    // @ts-ignore
    if (allData?.provider_info?.[0]?.phone) {
      // @ts-ignore
      Linking.openURL(`tel:${allData?.provider_info?.[0]?.phone}`);
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{
        width: "100%",
        paddingHorizontal: 19,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1 / 2 }}>
          <ProfileCard allData={allData} handlePhonePress={handlePhonePress} />
        </View>

        <View style={{ justifyContent: "flex-end", flex: 1 / 2 }}>
          <View style={{ alignSelf: "flex-end" }}>
            {allData?.trip?.service_type_id === "65013c91feeec70bb44d1b74" ? (
              <BlackCar />
            ) : (
              <EvsedanCarImg />
            )}
          </View>
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins-Bold",
              fontSize: 14,
              borderRadius: 10,
              paddingHorizontal: 7,
              textAlign: "right",
            }}
          >
            {`${allData?.serviceInfo?.[0]?.service_type_name}`}
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins-Bold",
              fontSize: 14,
              borderRadius: 10,
              paddingHorizontal: 7,
              paddingVertical: 5,
              textAlign: "right",
            }}
          >
            {
              allData?.provider_info?.[0]?.vehicle_detail?.find(
                (vehicle: any) => vehicle.is_selected === true
              )?.plate_no
            }
          </Text>
          <View style={{}}>
            <OTPUI otp={tripData?.confirmation_code} />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 24,
        }}
      >
        {allData?.trip?.total ? (
          <>
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins-Light",
                fontSize: 14,
                borderRadius: 10,
                paddingVertical: 5,
              }}
            >
              Amount:{" "}
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins-Bold",
                fontSize: 14,
                borderRadius: 10,
                paddingVertical: 5,
              }}
            >
              ₹ {allData?.trip?.total}
            </Text>
          </>
        ) : null}
      </View>
    </ScrollView>
  );
}
