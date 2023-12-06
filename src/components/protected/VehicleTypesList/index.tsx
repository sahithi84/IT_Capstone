import { View } from "react-native";
import React from "react";
import { VehicleTypeCard } from "../VehicleTypes/VehicleTypeCard";
import { SkeletonItem } from "../../general/SkeletonItem";

export const VehicleTypesList = ({
  loading,
  reorderedVehicleTypes,
  handleSelect,
}: any) => {
  return loading ? (
    <View style={{ marginTop: 0 }}>
      {Array.from({ length: 10 }).map((_, index) => (
        <View key={index} style={{ marginBottom: 0 }}>
          <SkeletonItem />
        </View>
      ))}
    </View>
  ) : (
    <View style={{ gap: 14 }}>
      {reorderedVehicleTypes?.map((option: any, index: any) => {
        return (
          <VehicleTypeCard
            allData={option}
            things={option?.things}
            icon={option?.icon}
            vehicleId={option?.vehicleId}
            key={index}
            vehicleName={option?.vehicleName}
            selected={option?.isSelected}
            distance={option?.distance}
            tripTime={option?.time}
            estimatedPrice={option?.estimatedPrice}
            handleSelect={handleSelect}
          />
        );
      })}
    </View>
  );
};
