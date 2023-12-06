import { View } from "react-native";
import React, { useCallback, useEffect, useMemo } from "react";
import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import { Button } from "../../../components";
import { EnterSourceDestinationHeader } from "../../../components/protected/EnterSourceDestination/Header";
import { PickupAndDropInputData } from "../../../components/protected/PickupAndDropInputData";
import { observer } from "mobx-react-lite";
import { createTripFormStore } from "../../../mobx/withOtpTripStates";

const EnterSourceDestination = observer(({ navigation }: any) => {
  const { formData } = createTripFormStore;

  const init = useCallback(() => {
    if (
      formData?.latitude &&
      formData?.longitude &&
      formData?.d_latitude &&
      formData?.d_longitude
    ) {
      // @ts-ignore
      navigation.replace("Protected", {
        screen: "VehiclePickupAndDropLocationDashboard",
      });
    }
  }, [formData]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <EnterSourceDestinationHeader
        showBackIcon={true}
        backIconType="back"
        goBack={() => {
          // @ts-ignore
          navigation.canGoBack() ? navigation.pop() : null;
        }}
      />
      <ProtectedWrapper>
        <View
          style={{
            alignItems: "center",
            flex: 1,
            paddingHorizontal: 19,
          }}
        >
          <View
            style={{
              paddingTop: 13,
              width: "100%",
            }}
          >
            <PickupAndDropInputData />
          </View>

          {/* Favourites Pending */}
          {/* <View style={{ flexDirection: "row", gap: 14, paddingTop: 36 }}>
            <HomeIcon />
            <Text
              style={{
                color: "black",
                fontFamily: "Poppins",
                width: 250,
                fontSize: 14,
              }}
            >
              My Sweet Home
            </Text>
          </View> */}
          {/* <View style={{ flexDirection: "row", gap: 14, paddingTop: 28 }}>
            <OfficeIcon />
            <Text
              style={{
                color: "black",
                fontFamily: "Poppins",
                width: 250,
                fontSize: 14,
              }}
            >
              Office
            </Text>
          </View> */}

          <Button
            onPress={() => {
              init();
            }}
            title="Go"
            textStyles={{
              fontFamily: "Poppins-Medium",
              color: "white",
            }}
            color="#000"
            wrapperStyle={{ width: "100%", marginTop: 12 }}
            disabled={
              !(
                formData?.latitude &&
                formData?.longitude &&
                formData?.d_latitude &&
                formData?.d_longitude
              )
            }
          />
        </View>
      </ProtectedWrapper>
    </>
  );
});

export default EnterSourceDestination;
