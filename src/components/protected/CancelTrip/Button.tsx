import { View } from "react-native";
import React, { useMemo } from "react";
import { Button } from "../../Button";
import { useTheme } from "../../../theme";
import { useCancelTripFunctions } from "../../../hooks/cancelTrip/useCancelTripFunctions";
import { CancellationReason } from "../../CancellationReason";
import { useSelector } from "react-redux";
import _ from "lodash";

export function CancelTripButton({ wrapperStyle = {} }: any) {
  const { openModal, setOpenModal } = useCancelTripFunctions();

  const tripData = useSelector((state) => {
    // @ts-ignore
    return state?.trip;
  });

  const isDriverTripStarted = useMemo(
    () => _.get(tripData, "trip.is_provider_status") === 6,
    [tripData]
  );

  const theme = useTheme();

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <>
      <CancellationReason
        visible={openModal}
        onClose={() => setOpenModal(false)}
      />
      {!isDriverTripStarted ? (
        <View
          style={{
            paddingHorizontal: 19,
            justifyContent: "center",
            ...wrapperStyle,
          }}
        >
          <Button
            color={"#00AE5A"}
            wrapperStyle={{
              borderRadius: 29,
              paddingHorizontal: 36,
            }}
            title="Cancel Trip"
            onPress={handleOpenModal}
            textStyles={{
              ...theme.fontSizes.heading5,
              fontFamily: "Poppins-Medium",
            }}
          />
        </View>
      ) : null}
    </>
  );
}
