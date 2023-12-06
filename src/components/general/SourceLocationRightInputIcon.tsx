import { TouchableOpacity } from "react-native";
import React from "react";
import { RoundedCloseIcon } from "../../svgs";

export default function SourceLocationRightInputIcon({ searchRef }: any) {
  return (
    <TouchableOpacity
      onPress={() => {
        // @ts-ignore
        searchRef?.current?.clear();
      }}
      style={{
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        position: "absolute",
        right: 7,
        top: 7,
        backgroundColor: "white",
      }}
    >
      <RoundedCloseIcon />
    </TouchableOpacity>
  );
}
