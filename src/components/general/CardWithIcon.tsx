import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

export function CardWithIcon({ name, scientificName, description, icon }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        // elevation: 10,
        borderWidth: 1,
        padding: 12,
        flex: 3 / 4,
        borderRadius: 12,
      }}
    >
      <View style={{ flex: 4 / 4 }}>
        <Text
          style={{
            color: "red",
            fontFamily: "Poppins-Medium",
            fontSize: 14,
            // top: 15,
          }}
        >
          Name:
        </Text>

        <Text
          style={{
            color: "green",
            fontFamily: "Poppins-Medium",
            fontSize: 14,
          }}
        >
          {name}
        </Text>

        <Text
          style={{
            color: "red",
            fontFamily: "Poppins-Medium",
            fontSize: 14,
            // top: 10,
          }}
        >
          Scientific Name:
        </Text>

        <Text
          style={{
            color: "green",
            fontFamily: "Poppins-Medium",
            fontSize: 14,
          }}
        >
          {scientificName}
        </Text>
        <Text
          style={{
            color: "red",
            fontFamily: "Poppins-Medium",
            fontSize: 14,
          }}
        >
          Description:
        </Text>
        <Text
          style={{
            color: "green",
            fontFamily: "Poppins-Medium",
            fontSize: 14,
          }}
        >
          {description}
        </Text>
      </View>
      <View style={{ flex: 1.5 / 4 }}>
        <Image
          source={{ uri: icon }}
          style={{ height: 75, width: 75, borderRadius: 50 }}
        />
      </View>
    </View>
  );
}
