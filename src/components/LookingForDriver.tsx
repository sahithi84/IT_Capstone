import { View, Text, ScrollView } from "react-native";
import React from "react";
import { CancelTripButton } from "./protected/CancelTrip/Button";
// @ts-ignore
import Video from "react-native-video";
import { useSocketWithoutNavigation } from "../hooks/createTripWithOTP/useSocket";

export default function LookingForDriver() {
  useSocketWithoutNavigation();

  return (
    <View
      style={{
        backgroundColor: "#263238",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingBottom: 42,
      }}
    >
      <ScrollView>
        <Text
          style={{
            fontFamily: "Poppins-Light",
            fontSize: 14,
            paddingTop: 25,
            color: "#EEEEEE",
            textAlign: "center",
          }}
        >
          Looking for driver located nearest your location
        </Text>
        <Video
          source={require("../assets/looking4driver.mp4")}
          resizeMode="cover"
          controls={false}
          style={{ width: "100%", height: 150, marginTop: 20 }}
          repeat={true}
        />
      </ScrollView>
      <CancelTripButton
        wrapperStyle={{
          marginHorizontal: "auto",
          width: "100%",
        }}
      />
    </View>
  );
}
