import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Call, Star, UserProfilelogo } from "../../../svgs";
import { useSocketWithoutNavigation } from "../../../hooks/createTripWithOTP/useSocket";

export function ProfileCard({ allData, handlePhonePress }: any) {
  useSocketWithoutNavigation();
  return (
    <>
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

      <Text
        style={{
          color: "#00AE5A",
          fontSize: 14,
          fontFamily: "Poppins-Medium",
          textAlign: "center",
        }}
      >
        {`${allData?.provider_info?.[0]?.first_name} ${allData?.provider_info?.[0]?.last_name}`}
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={handlePhonePress}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Call />
        </TouchableOpacity>
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
            {parseFloat(allData?.provider_info?.[0]?.rate)?.toFixed(1)}
          </Text>
        </View>
      </View>
    </>
  );
}
