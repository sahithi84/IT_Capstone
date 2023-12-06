import { View } from "react-native";
import React from "react";
import { SourceLocationDropdown } from "../CreateTrip/SourceLocationDropdown";
import { DestinationLocationDropdown } from "../CreateTrip/DestinationLocationDropdown";
import { DottedVerticalLine } from "../../../svgs";

export const PickupAndDropInputData = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        gap: 12,
        borderWidth: 1,
        borderColor: "#E0DFE0",
        borderRadius: 15,
        paddingHorizontal: 25,
        paddingTop: 23,
        elevation: 10,
        marginTop: 13,
      }}
    >
      <SourceLocationDropdown />
      <View
        style={{
          marginLeft: "auto",
          height: 1,
          width: "90%",
          backgroundColor: "#E0DFE0",
        }}
      />
      <View style={{ position: "absolute", top: 50, left: 29 }}>
        <DottedVerticalLine />
      </View>
      <DestinationLocationDropdown />
    </View>
  );
};
