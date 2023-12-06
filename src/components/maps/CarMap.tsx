// CarMap.js
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { BlackCar } from "../../svgs";
import { Image } from "react-native";

export const CarMap = ({ providerPreviousLocation, providerLocation }: any) => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: providerLocation[0],
        longitude: providerLocation[1],
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {/* Render the car marker at the current location */}
      <Marker
        coordinate={{
          latitude: providerLocation[0],
          longitude: providerLocation[1],
        }}
      >
        {/* <BlackCar /> */}
        <Image
          source={{
            uri: "https://staging.ohmelogistics.com/map_pin/driver.png",
          }}
          style={{ width: 27, height: 40 }}
        />
      </Marker>
    </MapView>
  );
};
