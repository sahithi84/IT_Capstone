import { View } from "react-native";
import React from "react";
import { Button } from "../../Button";
import { useCreateTripWithOtp } from "../../../hooks/createTripWithOTP/useCreateTripWithOtp";

export function BookVehicleButton({ selectedVehicle }: any) {
  const { handleCreateRegularTrip, isTripCreating } = useCreateTripWithOtp();

  return (
    <View
      style={{
        flex: 3 / 4,
      }}
    >
      <Button
        color={selectedVehicle?.isSelected ? "#00AE5A" : "#737373"}
        wrapperStyle={{
          width: "100%",
          borderRadius: 200,
          height: 50,
          borderWidth: 1,
          borderColor: "white",
        }}
        title={`Book ${selectedVehicle?.vehicleName}`}
        textStyles={{
          color: "black",
          fontFamily: "Poppins-Medium",
          fontSize: 16,
          lineHeight: 30,
        }}
        disabledColor="#737373"
        onPress={handleCreateRegularTrip}
        disabled={selectedVehicle?.isSelected === false}
        processing={isTripCreating}
      />
    </View>
  );
}
