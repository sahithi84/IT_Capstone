import { View } from "react-native";
import React from "react";
import { YourLocationIcon } from "../../svgs";

export function SourceLocationLeftInputIcon() {
  return (
    <View
      style={{
        top: 14,
        paddingRight: 7,
      }}
    >
      <YourLocationIcon />
    </View>
  );
}
