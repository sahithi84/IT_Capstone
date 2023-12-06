import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SkipIcon } from "../../svgs";
import { useNavigation } from "@react-navigation/native";
import { SkipButton } from "../../components/intro/Skip";
// @ts-ignore
import Video from "react-native-video";
import AuthScreenWrapper from "../../components/hoc/AuthWrapper";

export default function SafetyCertified() {
  const navigation = useNavigation();
  const handleGoForward = () => {
    // @ts-ignore
    navigation.navigate("Auth", {
      screen: "ReduceCarbon",
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
      {/* <View style={{ marginTop: 100 }}>
        <SafetyCertifiedImg />
      </View> */}
      <Video
        source={require("../../assets/saftey.mp4")}
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
      <Text
        style={{
          textAlign: "center",
          color: "#000000",
          fontSize: 24,
          fontFamily: "JockeyOne-Regular",
          paddingTop: 30,
        }}
      >
        100% safety certified
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
      <View
        style={{
          flexDirection: "row",
          marginTop: 100,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View>
          <SkipButton />
        </View>
        <TouchableOpacity onPress={handleGoForward}>
          <SkipIcon />
        </TouchableOpacity>
      </View>
    </AuthScreenWrapper>
  );
}
