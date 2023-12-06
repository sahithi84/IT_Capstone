import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { RentalCarsDetails } from "../VehicleTypes/RentalCarsDetails";
import { BookVehicleButton } from "./BookVehicleButton";
import { RentalButtonGroup } from "./RentalButtonGroup";
import { VehicleTypesList } from "../VehicleTypesList";
import { ScheduleTripBookingButton } from "../ScheduledTripButton";
import PromoCodeUI from "./PromoCodeUI";
import { useCreateTripWithOtp } from "../../../hooks/createTripWithOTP/useCreateTripWithOtp";
import { createTripFormStore } from "../../../mobx/withOtpTripStates";

export function VehicleSelectionsTab({
  tabOptions,
  handleSelectTabOption,
  selectedVehicle,
  loading,
  reorderedVehicleTypes,
  handleSelect,
}: any) {
  const [selectedCarRental, setSelectedCarRental] = useState(null);

  const { setFormField } = createTripFormStore;
  const handleSelectCarRental = (option: any) => {
    setFormField("carrentalids", option?._id);
    setSelectedCarRental(option);
  };
  return (
    <>
      <View style={{ flexDirection: "row", width: "100%" }}>
        {tabOptions?.map((tabOption: any, index: any) => {
          return (
            <TouchableOpacity
              onPress={() => handleSelectTabOption(tabOption?.title)}
              key={index}
              style={{
                flex: 1 / 2,
                height: 40,
                backgroundColor: tabOption?.isSelected ? "#00AE5A" : "#263238",
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: index === 0 ? 13 : 0,
                borderTopRightRadius: index === 1 ? 13 : 0,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "Poppins-ExtraBold",
                  textAlign: "center",
                }}
              >
                {tabOption?.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{
          gap: 12,
          padding: 10,
          paddingBottom:
            tabOptions?.find((option: any) => option?.isSelected === true)
              ?.title === "Now"
              ? 50
              : 200,
        }}
      >
        {tabOptions?.find((option: any) => option?.isSelected === true)
          ?.title === "Now" ? (
          <>
            <VehicleTypesList
              loading={loading}
              reorderedVehicleTypes={reorderedVehicleTypes}
              handleSelect={handleSelect}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                paddingBottom: 12,
                paddingTop: 20,
                backgroundColor: "#263238",
                width: "100%",
                zIndex: 10,
              }}
            ></View>
          </>
        ) : (
          <>
            <Text
              style={{
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: 20,
                fontFamily: "JackeyOne-Regular",
              }}
            >
              Select Package
            </Text>

            {selectedVehicle?.carRentalList?.map((option: any, index: any) => {
              const isSelected = option === selectedCarRental;
              return (
                <RentalCarsDetails
                  option={option}
                  key={index}
                  isSelected={isSelected}
                  handleSelect={handleSelectCarRental}
                />
              );
            })}
          </>
        )}
      </ScrollView>
      {tabOptions?.find((option: any) => option?.isSelected === true)?.title ===
      "Now" ? (
        <>
          <PromoCodeUI />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 24,
              paddingTop: 16,
              paddingBottom: 24,
              gap: 12,
            }}
          >
            <BookVehicleButton selectedVehicle={selectedVehicle} />
            <ScheduleTripBookingButton />
          </View>
        </>
      ) : (
        <RentalButtonGroup selectedRentalData={selectedCarRental} />
      )}
    </>
  );
}
