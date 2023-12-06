import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const getCardStyles = ({ isSelected = false }) => {
  return {
    color: isSelected ? "white" : "#00AE5A",
    backgroundColor: isSelected ? "#00AE5A" : "transparent",
  };
};

export function RentalCarsDetails({
  isSelected = false,
  option,
  handleSelect = () => {},
}: any) {
  return (
    <TouchableOpacity
      onPress={() => handleSelect(option)}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        paddingBottom: 10,
        paddingHorizontal: 24,
        paddingVertical: 10,
        gap: 70,
        borderWidth: 1,
        borderColor: getCardStyles({ isSelected })?.color,
        backgroundColor: getCardStyles({ isSelected })?.backgroundColor,
      }}
    >
      <View style={{ flex: 1 / 2 }}>
        {/* <Text
          style={{
            color: getCardStyles({ isSelected })?.color,
            fontFamily: "Poppins-Medium",
            textAlign: "center",
          }}
        >
          {option?.Place}
        </Text> */}
        <Text
          style={{
            color: getCardStyles({ isSelected })?.color,
            fontFamily: "Poppins-Medium",
            textAlign: "center",
            fontSize: 16,
          }}
        >
          {option?.typename}
        </Text>
        {/* <Text
          style={{
            fontFamily: "Poppins-Medium",
            textAlign: "center",
            fontSize: 13,
            color: getCardStyles({ isSelected })?.color,
          }}
        >
          {option?.rentTimeInMins}
        </Text> */}
      </View>

      <View style={{ paddingTop: 18, flex: 1 / 2 }}>
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins-Bold",
            textAlign: "center",
            fontSize: 24,
          }}
        >
          ₹ {option?.base_price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
