import { View, Text } from "react-native";
import React, { useMemo } from "react";

export function OTPUI({ otp }: any) {
  const finalOtp = useMemo(
    () => (otp && `${otp}`?.length === 3 ? `0${otp}` : otp),
    [otp]
  );
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {`${finalOtp}`?.split("")?.map((otpDigit: any, index: any) => {
        return (
          <View
            key={index}
            style={{
              borderRadius: 2,
              paddingHorizontal: 5,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              marginRight: 4,
              borderColor: "#00AE5A",
            }}
          >
            <Text
              key={index}
              style={{
                color: "white",
                fontFamily: "postnobillscolombo-bold",
                fontSize: 14,
                lineHeight: 21,
                top: 2,
              }}
            >
              {otpDigit}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
