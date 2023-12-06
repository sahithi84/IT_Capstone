import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";
import { BlackCar, Call, Star, UserProfilelogo } from "../../../svgs";
import { OTPUI } from "../AirportTripsOTPInterface/OTPUI";
import ElapsedTimeTimer from "../../general/ElapsedTimeTimer";
import moment from "moment-timezone";

export function CityScheduledTripUI({ tripData, allData }: any) {
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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            marginBottom: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UserProfilelogo />
          {allData?.provider_info?.[1]?.durationText ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 30,
                borderWidth: 1,
                borderColor: "#00AE5A",
                paddingHorizontal: 10,
                backgroundColor: "black",
                position: "absolute",
                bottom: -15,
              }}
            >
              <Text
                style={{
                  color: "yellow",
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                }}
              >
                {allData?.provider_info?.[1]?.durationText}
              </Text>
            </View>
          ) : null}
        </View>

        {allData?.provider_info?.[0]?.first_name &&
        allData?.provider_info?.[0]?.last_name ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              justifyContent: "center",
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                color: "#00AE5A",
                fontSize: 14,
                fontFamily: "Poppins-Medium",
              }}
            >
              {`${allData?.provider_info?.[0]?.first_name} ${allData?.provider_info?.[0]?.last_name}`}
            </Text>
          </View>
        ) : null}

        {allData?.provider_info?.[0]?.rate ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
              paddingHorizontal: 10,
            }}
          >
            <Star />
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontFamily: "Poppins-Medium",
                paddingLeft: 5,
              }}
            >
              {allData?.provider_info?.[0]?.rate}
            </Text>
          </View>
        ) : null}
        {allData?.provider_info?.[0]?.phone ? (
          <TouchableOpacity
            onPress={handlePhonePress}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Call />
          </TouchableOpacity>
        ) : null}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 12,
        }}
      >
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <OTPUI otp={tripData?.confirmation_code} />
        </View>

        {allData?.serviceInfo?.[0]?.service_type_name ? (
          <View style={{ alignItems: "center" }}>
            <BlackCar />
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins-Bold",
                fontSize: 14,
                borderRadius: 10,
                paddingHorizontal: 7,
                paddingVertical: 5,
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
              }}
            >
              {
                allData?.provider_info?.[0]?.vehicle_detail?.find(
                  (vehicle: any) => vehicle.is_selected === true
                )?.plate_no
              }
            </Text>
          </View>
        ) : null}
      </View>

      {tripData?.server_start_time_for_schedule ? (
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 12,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins-Light",
                fontSize: 14,
                borderRadius: 10,
                paddingVertical: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Please wait for{" "}
            </Text>

            <ElapsedTimeTimer
              utcTimestamp={tripData?.server_start_time_for_schedule}
            />
          </View>
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins-Light",
              fontSize: 14,
              borderRadius: 10,
              paddingVertical: 5,
            }}
          >
            Pickup At:{" "}
            {moment(tripData?.server_start_time_for_schedule).format(
              "DD MMM 'YY hh:mm a"
            )}
          </Text>
        </View>
      ) : null}

      {tripData?.total ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
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
            ₹ {tripData?.total}
          </Text>
        </View>
      ) : null}
    </ScrollView>
  );
}
