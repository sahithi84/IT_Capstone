import { View, Text } from "react-native";
import React, { useCallback, useEffect } from "react";
import {
  OHMLogo,
  SpalshManglore,
  SplashDelhi,
  SplashGoa,
  Splashhyd,
} from "../../svgs";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { useUserApis } from "../../apis";
import { clearTrip, setTrip } from "../../redux/tripSlice";
import { clearMapState } from "../../redux/mapSlice";
import { createTripFormStore } from "../../mobx/withOtpTripStates";
import { useCurrentLocation } from "../../hooks/location/useCurrentLocation";
import { SplashIcon } from "../../svgs/SplashIcon";

export function sleep(ms = 10000) {
  return new Promise((resolve: any) => setTimeout(resolve, ms));
}

export default function Splash() {
  const navigation = useNavigation();
  useCurrentLocation();

  useEffect(() => {
    const init = async () => {
      await sleep(2000);
      // @ts-ignore
      navigation.replace("Protected");
    };
    init();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <LinearGradient
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        colors={["#FFFFFF", "#00AE5A"].reverse()}
      >
        {/* <OHMLogo /> */}
        <SplashIcon />
        <View
          style={{
            flexDirection: "row",
            gap: 33,
            marginTop: 100,
          }}
        >
          <Text
            style={{
              color: "green",
              fontFamily: "Poppins-Medium",
              fontSize: 20,
              paddingBottom: 60,
              textAlign: "center",
            }}
          >
            {" "}
            Discovering Diverse Habitats Around the World{" "}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
