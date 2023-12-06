import { View } from "react-native";
import React from "react";
import { CalenderIcon } from "../../../svgs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useCreateTripWithOtp } from "../../../hooks/createTripWithOTP/useCreateTripWithOtp";
import { DateTimePicker } from "../../general/DateTimePicker";

export function ScheduleTripBookingButton() {
  const {
    open,
    handleRideLater,
    handleConfirmPickDate,
    setOpen,
    selectedDate,
  } = useCreateTripWithOtp();
  return (
    <View style={{ flex: 1 / 4, alignItems: "flex-end" }}>
      <DateTimePicker
        // @ts-ignore
        onConfirm={handleConfirmPickDate}
        onCancel={() => {
          setOpen(false);
        }}
        date={selectedDate}
        modal={true}
        open={open}
        minuteInterval={5}
        minimumDate={new Date()}
      />

      <TouchableOpacity onPress={handleRideLater}>
        <CalenderIcon />
      </TouchableOpacity>
    </View>
  );
}
