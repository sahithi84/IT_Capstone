import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function MapSearchResultListItem({ title, address }: any) {
  return (
    <View
      style={{
        left: 12,
      }}
    >
      <Text style={styles.result}>{title}</Text>
      <Text style={styles.result}>{address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  result: {
    fontSize: 12,
    color: "black",
    fontFamily: "Poppins-Light",
  },
});
