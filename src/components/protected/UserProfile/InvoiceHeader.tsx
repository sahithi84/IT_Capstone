import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { File, WhiteArrow } from "../../../svgs";
import { themes } from "../../../theme";

export function InvoiceHeader() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        paddingTop: 30,
        justifyContent: navigation.canGoBack() ? "center" : "space-between",
        backgroundColor: "#263238",
      }}
    >
      {navigation.canGoBack() ? (
        <TouchableOpacity
          // @ts-ignore
          onPress={() => (navigation.canGoBack() ? navigation.pop() : null)}
        >
          <WhiteArrow />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <View style={{ paddingTop: 24, justifyContent: "center" }}>
        <Text
          style={{
            color: themes.colors.primary,
            ...themes.fontSizes.medium,
            lineHeight: 21,
            fontFamily: "Poppins-Light",
            textAlign: "center",
          }}
        >
          Details
        </Text>
        <Text
          style={{
            color: themes.colors.background,
            ...themes.fontSizes.heading4,
            fontFamily: "JockeyOne-Regular",
            textAlign: "center",
            paddingBottom: 10,
          }}
        >
          Invoice
        </Text>
        <View
          style={{
            paddingBottom: 29,
          }}
        >
          <File />
        </View>
      </View>
      <View />
    </View>
  );
}
