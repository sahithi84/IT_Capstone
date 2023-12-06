/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from "react";
import { Marker } from "react-native-maps";
import { useUserApis } from "../../../apis";
import { useCreateTripWithOtp } from "../../../hooks/createTripWithOTP/useCreateTripWithOtp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { observer } from "mobx-react-lite";
import { CarImage } from "../../../svgs";
import { createTripFormStore } from "../../../mobx/withOtpTripStates";

export const NearbyDriversLocations = observer(() => {
  const { data: drivers, getNearbyProvidersOnManualType } = useUserApis();

  const { formData } = createTripFormStore;

  useEffect(() => {
    const init = async () => {
      const userDetails = JSON.parse(
        // @ts-ignore
        await AsyncStorage.getItem("@user_details")
      );

      const payload = {
        user_id: userDetails?.user_id,
        token: userDetails?.token,
        latitude: formData?.latitude,
        longitude: formData?.longitude,
        service_type_id:
          formData?.service_type_id || "6401b2667e59316793278dc2",
      };

      await getNearbyProvidersOnManualType({ payload });
    };
    init();
  }, [formData]);

  // @ts-ignore
  return drivers?.providers?.map((driver: any, index: number) => {
    return (
      <Marker
        key={index}
        coordinate={{
          latitude: driver?.providerLocation?.[0],
          longitude: driver?.providerLocation?.[1],
        }}
        title="Species"
        description="eg:soil,water,climate"
      >
        {/* <Image
          source={{
            uri: "https://staging.ohmelogistics.com/map_pin/driver.png",
          }}
          style={{ width: 27, height: 40 }}
        /> */}
        <CarImage />
      </Marker>
    );
  });
});
