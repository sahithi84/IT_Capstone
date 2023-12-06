import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export function SkipButton() {
  const navigation = useNavigation();

  const handleSkip = () => {
    // @ts-ignore
    navigation.navigate("Auth", {
      screen: "JoinNow",
    });
  };
  return (
    <TouchableOpacity onPress={handleSkip}>
      <Text
        style={{
          marginTop: 20,
          color: "#959595",
          fontFamily: "Poppins-Medium",
        }}
      >
        Skip
      </Text>
    </TouchableOpacity>
  );
}
