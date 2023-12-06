/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { TextInput, Text, View } from "react-native";
import { themes } from "../theme";

export function InputField({
  label = "",
  value = "",
  onChange = () => {},
  errorComponent = <></>,
  leftIcon = <></>,
  rightIcon = <></>,
  labelStyles = {},
  inputWrapperStyle = {},
  inputBoxContainerStyle = {},
  errorMessageStyle = {},
  style = {},
  keyboardType = "default",
  multiline = false,
  // @ts-ignore
  maxLength,
  placeholderTextColor,
  editable = true,
  ...rest
}: any) {
  return (
    <View style={{ ...inputWrapperStyle }}>
      {label && typeof label === "string" ? (
        <Text style={{ color: "black", paddingBottom: 5, ...labelStyles }}>
          {label}
        </Text>
      ) : (
        label
      )}

      <View
        style={[
          styles.inputContainer,
          inputBoxContainerStyle,
          {
            ...themes.fontSizes.small,
          },
        ]}
      >
        {leftIcon}
        <TextInput
          maxLength={maxLength}
          value={value}
          // @ts-ignore
          keyboardType={keyboardType}
          onChangeText={onChange}
          editable={editable}
          placeholderTextColor={placeholderTextColor || "#515151"}
          style={{
            ...themes.fontSizes.small,
            color: "black",
            height: 35,
            width: "100%",
            paddingHorizontal: 12,
            ...style,
          }}
          multiline={multiline}
          {...rest}
        />
        {rightIcon}
      </View>
      <View style={[errorMessageStyle]}>{errorComponent}</View>
    </View>
  );
}

const styles = {
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
};
