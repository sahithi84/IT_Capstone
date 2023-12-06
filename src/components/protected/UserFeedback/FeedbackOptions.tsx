import { View, Text } from "react-native";
import React, { useState } from "react";
import { themes } from "../../../theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export function FeedbackOptions({
  allOptions,
  handleUserSelectedFeedbackOption,
}: any) {
  return (
    <View
      style={{
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexBasis: 200,
        gap: 13,
        paddingTop: 24,
      }}
    >
      {allOptions?.map((userFeedbackOption: any) => (
        <TouchableOpacity
          key={userFeedbackOption.title}
          onPress={() =>
            handleUserSelectedFeedbackOption(userFeedbackOption.title)
          }
        >
          <Text
            style={{
              color: userFeedbackOption.isSelected
                ? "white" // Change color for selected options
                : themes.colors.text,
              borderWidth: 1,
              borderColor: "white",
              textAlign: "center",
              borderRadius: 23,
              padding: 12,
              ...themes.fontSizes.small,
              paddingHorizontal: 24,
              fontFamily: "Poppins-Light",
              backgroundColor: userFeedbackOption.isSelected
                ? "green" // Change background color for selected options
                : "transparent",
            }}
          >
            {userFeedbackOption.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
