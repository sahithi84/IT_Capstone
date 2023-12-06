import { View, Text } from "react-native";
import React from "react";
import { Button } from "../../Button";
import { useCreateTripWithOtp } from "../../../hooks/createTripWithOTP/useCreateTripWithOtp";

export function RentalButtonGroup({ selectedRentalData }: any) {
  const { handleCreateRentalTrip, isTripCreating } = useCreateTripWithOtp();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        paddingBottom: 12,
        paddingTop: 20,
        paddingHorizontal: 16,
        backgroundColor: "#263238",
        width: "100%",
        zIndex: 10,
      }}
    >
      <View
        style={{
          paddingTop: 5,
        }}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins-Light",
            textAlign: "left",
            paddingBottom: 5,
          }}
        >
          {`Extra distance charge ${selectedRentalData?.price_per_unit_distance}/km`}
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins-Light",
            paddingBottom: 5,
          }}
        >
          {`Extra minute charge ${selectedRentalData?.price_for_total_time}/min`}
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 30,
            paddingTop: 21,
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            paddingBottom: 12,
          }}
        >
          <Button
            color={"#00AE5A"}
            wrapperStyle={{
              width: "42%",
              borderRadius: 200,
              height: 48,
              borderWidth: 1,
              borderColor: "white",
            }}
            title={"Rent Now"}
            textStyles={{ color: "black" }}
            onPress={handleCreateRentalTrip}
            disabled={selectedRentalData === false}
            processing={isTripCreating}
          />
          {/* <Button
            color={"#737373"}
            wrapperStyle={{
              width: "42%",
              borderRadius: 200,
              height: 48,
              borderWidth: 1,
              borderColor: "white",
            }}
            title={" Cancel"}
            textStyles={{ color: "black" }}
            onPress={async () => {}}
          /> */}
        </View>
      </View>
    </View>
  );
}
