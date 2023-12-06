import { View, Text } from "react-native";
import React from "react";
import { themes } from "../../../theme";
import { Profile, Star } from "../../../svgs";

export function UserProfileCardInUserFeedback({ driverName, rating }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 13,
        paddingTop: 20,
        paddingBottom: 24,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 13 }}>
        <View style={{}}>
          <Profile />
        </View>
        <Text
          style={{
            color: themes.colors.background,
            ...themes.fontSizes.medium,
            fontFamily: "Poppins-Bold",
          }}
        >
          {driverName}
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <View style={{}}>
          <Star />
        </View>
        <Text
          style={{
            color: themes.colors.background,
            ...themes.fontSizes.medium,
            fontFamily: "Poppins-Bold",
          }}
        >
          {parseFloat(rating)?.toFixed(1)}
        </Text>
      </View>
    </View>
  );
}
