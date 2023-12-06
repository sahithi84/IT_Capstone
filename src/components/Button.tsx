/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { themes } from "../theme";

export function Button({
  onPress = () => {},
  wrapperStyle = {},
  title = "",
  textStyles = {},
  processing = false,
  disabled = false,
  disabledColor = "#737373",
  leftIcon = <></>,
  ...rest
}) {
  const disableButton = React.useMemo(() => {
    return processing || disabled;
  }, [processing, disabled]);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: disableButton
          ? disabledColor
          : rest.color || "transparent",
        overflow: "hidden",
        borderRadius: 5,
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...wrapperStyle,
      }}
      disabled={disableButton}
      onPress={onPress}
      // title={title}
      {...rest}
    >
      {leftIcon}
      <Text
        style={{
          textAlign: "center",
          color: disableButton ? "black" : "white",
          ...themes.fontSizes.medium,
          fontWeight: "600",
          ...textStyles,
        }}
      >
        {processing ? "Processing..." : title}
      </Text>
      {/* <RNButton/> */}
    </TouchableOpacity>
  );
}
