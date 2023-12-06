import { View, Text } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { VehicleSafetyImages } from "../../VehicleInBuildFeatures/VehiclesafetyImages";
import { useSelector } from "react-redux";
import { calculateFinalPriceByPercentage } from "../../../utils/calculateFinalPriceByPercentage";

export function VehicleTypeCard({
  icon = <></>,
  vehicleName,
  tripTime = null,
  selected = false,
  handleSelect = () => {},
  // vehicleId,
  // distance = 0,
  estimatedPrice = 0,
  allData,
}: any) {
  const [promoCodeAppliedAmount, setPromoCodeAppliedAmount] = useState(0);

  const { amountToBeReduce, codeType } = useSelector((state) => {
    // @ts-ignore
    return state?.promoCode?.promoCode;
  });

  useEffect(() => {
    const initialAmount = parseFloat(estimatedPrice)?.toFixed(1);
    console.log(
      "🚀 ~ file: VehicleTypeCard.tsx:31 ~ useEffect ~ amountToBeReduce:",
      amountToBeReduce
    );
    let discountedPrice = 0;
    if (codeType === 1) {
      if (amountToBeReduce) {
        discountedPrice =
          // @ts-ignore
          initialAmount -
          // @ts-ignore
          parseFloat(amountToBeReduce)?.toFixed(1);
        // @ts-ignore
        setPromoCodeAppliedAmount(discountedPrice);
      } else {
        setPromoCodeAppliedAmount(0);
      }
    } else if (codeType === 2) {
      if (amountToBeReduce) {
        // @ts-ignore
        discountedPrice = calculateFinalPriceByPercentage(
          initialAmount,
          amountToBeReduce
        );

        setPromoCodeAppliedAmount(discountedPrice);
      } else {
        setPromoCodeAppliedAmount(0);
      }
    }
  }, [amountToBeReduce]);

  return (
    <TouchableOpacity
      onPress={() => handleSelect(allData)}
      style={{
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "white",
        justifyContent: "space-between",
        flexWrap: "wrap",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 16,
        gap: 5,
        backgroundColor: selected ? "#00AE5A" : "transparent",
      }}
    >
      <View>
        <View>{icon}</View>
        {vehicleName?.toUpperCase() === "EV - LUXE" ? (
          <View
            style={{
              backgroundColor: "#0D5890",
              position: "absolute",
              top: -10,
              right: -40,
              borderRadius: 6,
              padding: 2,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 8,
                width: 70,
                textAlign: "center",
              }}
            >
              Newly Launched
            </Text>
          </View>
        ) : null}
      </View>

      <View>
        <Text
          style={{
            color: selected ? "white" : "#00AE5A",
            fontFamily: "Poppins-Bold",
          }}
        >
          {vehicleName}
        </Text>
        <Text
          style={{
            color: selected ? "white" : "#FFFFFF",
            fontFamily: "Poppins-Light",
          }}
        >
          {tripTime}
        </Text>
      </View>

      <View>
        <VehicleSafetyImages />
      </View>

      <View style={{ flexDirection: "row", gap: 7 }}>
        {estimatedPrice ? (
          <View style={{}}>
            <Text
              style={{
                color: selected ? "white" : "#9a9a9a",
                fontFamily: "Poppins-ExtraBold",
                textDecorationLine: promoCodeAppliedAmount
                  ? "line-through"
                  : "none",
              }}
            >
              ₹ {parseFloat(estimatedPrice)?.toFixed(1)}
            </Text>
          </View>
        ) : null}
        {promoCodeAppliedAmount ? (
          <View style={{}}>
            <Text
              style={{
                color: selected ? "white" : "#ffffff",
                fontFamily: "Poppins-ExtraBold",
              }}
            >
              ₹ {promoCodeAppliedAmount}
            </Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}
