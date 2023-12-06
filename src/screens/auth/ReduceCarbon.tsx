import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SkipIcon } from "../../svgs";
import { useNavigation } from "@react-navigation/native";
import { SkipButton } from "../../components/intro/Skip";
// @ts-ignore
import Video from "react-native-video";
import AuthScreenWrapper from "../../components/hoc/AuthWrapper";

export default function ReduceCarbon() {
  const navigation = useNavigation();
  const handleGoForward = () => {
    // @ts-ignore
    navigation.navigate("Auth", {
      screen: "JoinNow",
    });
  };
  return (
    <AuthScreenWrapper
      wrapperStyles={{
        alignItems: "center",
        paddingHorizontal: 29,
        paddingTop: 30,
      }}
    >
      <View></View>
      <Video
        source={require("../../assets/carbonfootprints.mp4")}
        resizeMode="contain"
        controls={false}
        style={{
          width: "100%",
          height: 350,
          // marginTop: 50,
          // backgroundColor: "red",
        }}
        repeat={true}
      />
      <View style={{ marginTop: 29 }}>
        <Text
          style={{
            fontFamily: "JockeyOne-Regular",
            textAlign: "center",
            color: "#000000",
            fontSize: 25,
          }}
        >
          ...and mostly reduce carbon footprints
        </Text>
        {/* <Text
          style={{
            textAlign: "center",
            color: "#5B5B5B",
            fontSize: 14,
            fontFamily: "Poppins-Regular",
          }}
        >
          Duis rutrum sem sit amet augue gravida fermentum. Praesent commodo
          tortor porta purus fermentum, vel rhoncus turpis porttitor.
        </Text> */}
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 60,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <SkipButton />
        <TouchableOpacity onPress={handleGoForward}>
          <SkipIcon />
        </TouchableOpacity>
      </View>
    </AuthScreenWrapper>
  );
}
