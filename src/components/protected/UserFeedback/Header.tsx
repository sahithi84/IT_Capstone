import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Arrow, ProfileIcon } from "../../../svgs";
import { themes } from "../../../theme";
import { useNavigation } from "@react-navigation/native";

export function UserFeedbackHeader() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    // @ts-ignore
    navigation.canGoBack() ? navigation.pop() : null;
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <TouchableOpacity onPress={handleGoBack} style={{ left: -24 }}>
        <Arrow />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            color: themes.colors.text,
            ...themes.fontSizes.medium,
            lineHeight: 21,
            fontFamily: "Poppins-Light",
            textAlign: "center",
          }}
        >
          Source Destination
        </Text>
        <Text
          style={{
            color: themes.colors.text,
            ...themes.fontSizes.heading4,
            lineHeight: 34,
            textAlign: "center",
            fontFamily: "JockeyOne-Regular",
          }}
        >
          Share feedback
        </Text>
      </View>
      <View style={{ left: 14 }}>
        <ProfileIcon />
      </View>
    </View>
  );
}
