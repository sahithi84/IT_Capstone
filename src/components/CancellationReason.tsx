import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { CircleOption, CircleGreen, CrossSymbol } from "../svgs";
import Modal from "react-native-modal";
import { useCancelTripFunctions } from "../hooks/cancelTrip/useCancelTripFunctions";
import { Button } from "./Button";
import { useTheme } from "../theme";
import { createTripFormStore } from "../mobx/withOtpTripStates";
import { clearTrip, setTrip } from "../redux/tripSlice";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearMapState } from "../redux/mapSlice";

export function CancellationReason({ visible, onClose }: any) {
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [customReasonError, setCustomReasonError] = useState("");
  const { handleCancelUserTrip, isCancellingTrip, cancelTripResponse } =
    useCancelTripFunctions();
  const { clearFields } = createTripFormStore;
  const theme = useTheme();

  const handleCancelTripFinal = async () => {
    if (customReasonError) {
      return;
    } else {
      await handleCancelUserTrip({ reason: customReason || selectedReason });
    }
  };

  const handleReasonSelection = (reason: string) => {
    setSelectedReason(reason);
  };

  const handleCustomReasonChange = (text: string) => {
    setCustomReason(text);
    if (text.length <= 35) {
      setCustomReasonError("");
    } else {
      Alert.alert("Reason should not be more than 35 characters");
    }
  };

  // const handleSubmit = () => {
  //   if (selectedReason || (customReason && customReason.length <= 35)) {
  //     const payload = {
  //       cancel_reason: selectedReason || customReason,
  //     };
  //     onClose();
  //   } else {
  //     setCustomReasonError(
  //       "Reason must be less than or equal to 35 characters."
  //     );
  //   }
  // };
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      if (cancelTripResponse && cancelTripResponse.success === true) {
        dispatch(clearTrip());
        await AsyncStorage.removeItem("@completed_trip_id");

        dispatch(clearMapState());
        clearFields();
        // @ts-ignore
        navigation?.replace("Protected", { screen: "Dashboard" });
      } else if (cancelTripResponse && cancelTripResponse.success === false) {
        // @ts-ignore
        Alert.alert(errorMessages[cancelTripResponse.error_code]);
      }
    };
    init();
  }, [cancelTripResponse]);

  return (
    <Modal
      isVisible={visible}
      onDismiss={onClose}
      style={{
        backgroundColor: "white",
        padding: 16,
        margin: 16,
        borderRadius: 25,
        flex: 2 / 3,
        position: "relative",
        marginTop: 100,
      }}
    >
      <TouchableOpacity
        onPress={onClose}
        style={{ position: "absolute", top: -10, right: -10 }}
      >
        <CrossSymbol />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontFamily: "JockeyOne-Regular",
            fontSize: 24,
            lineHeight: 34,
            color: "#000000",
            textAlign: "center",
            padding: 10,
          }}
        >
          Why cancelling the trip....?
        </Text>
        {reasonOptions?.map((option, index) => (
          <TouchableOpacity
            key={option.key}
            onPress={() => handleReasonSelection(option?.text)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginTop: 10,
              borderBottomWidth: index === reasonOptions?.length - 1 ? 0 : 1,
              paddingBottom: 12,
            }}
          >
            <View>
              {selectedReason === option.text ? (
                <View style={{ margin: 5 }}>
                  <CircleGreen />
                </View>
              ) : (
                <View style={{ margin: 5 }}>
                  <CircleOption />
                </View>
              )}
            </View>

            <View>
              <Text
                style={{
                  fontFamily: "Poppins-Light",
                  fontSize: 14,
                  lineHeight: 24,
                  textAlign: "center",
                  color: "#000000",
                }}
              >
                {option.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        value={customReason}
        onChangeText={handleCustomReasonChange}
        placeholder="Enter a custom reason"
        style={{
          borderColor: customReasonError ? "red" : "#E0DFE0",
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
          color: "black",
          fontFamily: "Poppins-Medium",
        }}
      />
      {customReasonError ? (
        <Text style={{ color: "red" }}>{customReasonError}</Text>
      ) : null}

      <Button
        color={"#00AE5A"}
        wrapperStyle={{
          borderRadius: 29,
          paddingHorizontal: 36,
          marginTop: 24,
        }}
        title="Submit"
        // @ts-ignore
        onPress={handleCancelTripFinal}
        textStyles={{
          ...theme.fontSizes.heading5,
          fontFamily: "Poppins-Medium",
        }}
        processing={isCancellingTrip}
      />
    </Modal>
  );
}

const reasonOptions = [
  { key: 1, text: "Unable to reach driver" },
  { key: 2, text: "My pickup location was incorrect" },
  { key: 3, text: "The ETA was too long" },
  { key: 4, text: "Driver asked me to cancel the trip" },
];
