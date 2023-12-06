import { View } from "react-native";
import React from "react";

import {
  DriverIcon,
  LugguageIcon,
  MedicalIcon,
  WaterBottleIcon,
} from "../../svgs";

export function VehicleSafetyImages() {
  return (
    <View style={{ flexDirection: "row", gap: 2, alignItems: "flex-end" }}>
      <View>
        <WaterBottleIcon />
      </View>
      <View>
        <DriverIcon />
      </View>
      <View>
        <MedicalIcon />
      </View>
      <View>
        <LugguageIcon />
      </View>
    </View>
  );
}
