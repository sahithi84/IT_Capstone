/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { View, TouchableOpacity, ActivityIndicator, Text } from "react-native";
import { useTheme } from "../../theme";
import { Timer } from "./Timer";

export function ResendOtpTimer({
  type,
  callBack = () => {},
  requestingOtp = false,
  timerSeconds = 15,
  label,
  disable = false,
  ...props
}: any) {
  const [timerActive, setTimerActive] = useState(true);
  const theme = useTheme();

  const handleResendOtp = async () => {
    setTimerActive(false);
    try {
      const result = await callBack();
      if (result) {
        setTimerActive(true);
      }
    } catch (error) {}
  };
  const labelText = (label: any) => {
    const labelTextArray = label?.split("");
    const labeltextWrappedWithTextElement = labelTextArray?.map(
      (text: any, idx: any) => {
        return (
          <Text key={idx} style={{ color: theme.colors.bodyGray }}>
            {text}
          </Text>
        );
      }
    );
    return labeltextWrappedWithTextElement;
  };
  return (
    <View style={{ marginBottom: 25, ...props.wrapperStyles }}>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {!timerActive &&
          (label ? (
            labelText(label)
          ) : (
            <Text style={{ color: theme.colors.bodyGray }}>
              Didn’t receive a OTP?
            </Text>
          ))}
        {!timerActive &&
          (requestingOtp ? (
            <ActivityIndicator color={theme.colors.primaryOrange} />
          ) : (
            <TouchableOpacity
              disabled={disable}
              onPress={() => handleResendOtp()}
            >
              <Text
                style={{
                  color: theme.colors.primaryOrange800,
                  textDecorationLine: "underline",
                  marginLeft: 4,
                }}
              >
                Resend OTP
              </Text>
            </TouchableOpacity>
          ))}
      </View>
      {timerActive ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: theme.colors.bodyGray }}>
            Resend verification code in{" "}
          </Text>
          <Timer
            initialMinute={0}
            initialSeconds={timerSeconds}
            setEnableResendOtp={() => {}}
            active={timerActive}
            afterDone={() => {
              setTimerActive(false);
            }}
          />
        </View>
      ) : null}
    </View>
  );
}
