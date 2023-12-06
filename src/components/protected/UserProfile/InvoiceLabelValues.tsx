import { View, Text } from "react-native";
import React, { useCallback } from "react";

export function InvoiceLabelValues({
  invoiceTripData,
  getInvoiceLabelValue = () => {},
}: any) {
  const fullLabel = useCallback(
    (key: string) => key?.split("_")?.join(" "),
    []
  );
  return (
    <View>
      {invoiceTripData?.map(([key]: any, index: any) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                flex: 1 / 2,
                color: "#000000",
                fontSize: 14,
                fontFamily: "Poppins-Light",
              }}
            >
              {fullLabel(key)?.[0]?.toUpperCase() +
                fullLabel(key)?.slice(1)?.toLowerCase()}
            </Text>
            <Text
              style={{
                flex: 1 / 2,
                textAlign: "right",
                color: "#000000",
                fontSize: 14,
                fontFamily: "Poppins-Light",
              }}
            >
              {getInvoiceLabelValue(key)}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
