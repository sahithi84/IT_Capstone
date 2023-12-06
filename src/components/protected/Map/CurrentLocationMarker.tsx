import React, { useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { Alert, Image, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import countriesData from "../../../hooks/animals/dummyData.json";
import { useSelector } from "react-redux";
import { createTripFormStore } from "../../../mobx/withOtpTripStates";
import { useNavigation } from "@react-navigation/native";

export const CurrentLocationMarker = observer(
  ({ handleOpenFilterModal, setClickedCoordinates }: any) => {
    const { currentLocation } = useSelector((state) => state?.currentLocation);

    const { formData } = createTripFormStore;

    const navigation = useNavigation();

    const mapRef = useRef(null);

    if (!currentLocation?.latitude && !currentLocation?.longitude) {
      return null;
    }

    return (
      <MapView
        ref={mapRef}
        style={styles.map}
        // region={region}
        region={{
          latitude: formData?.d_latitude || currentLocation?.latitude,
          longitude: formData?.d_longitude || currentLocation?.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onPress={(e) => {
          handleOpenFilterModal();
          console.log(e.nativeEvent.coordinate);
          setClickedCoordinates(e.nativeEvent.coordinate);
        }}
      >
        {(formData?.d_latitude || currentLocation?.latitude) &&
        (formData?.d_longitude || currentLocation?.longitude) ? (
          <Marker
            identifier={"Current Location"}
            coordinate={{
              latitude: formData?.d_latitude || currentLocation?.latitude,
              longitude: formData?.d_longitude || currentLocation?.longitude,
            }}
            // onPress={() => {
            //   navigation.navigate("Protected", { screen: "Menuscreen" });
            // }}
          >
            <Image
              source={{
                uri:
                  // formData?.pin_icon ||
                  "https://staging.ohmelogistics.com/map_pin/pickup.png",
              }}
              style={{ width: 27, height: 40, transform: [{ scale: 0.8 }] }}
            />
          </Marker>
        ) : null}

        {/* {countriesData?.map((item, index) => {
          return (
            <Marker
              key={`current-location-${index}`}
              identifier={"Current Location"}
              coordinate={{
                latitude: item?.latitude,
                longitude: item?.longitude,
              }}
            >
              <Image
                source={{
                  uri: `${item?.species?.[0]?.imageUrl}`,
                }}
                style={{ width: 27, height: 40 }}
              />
            </Marker>
          );
        })} */}
      </MapView>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  map: {
    flex: 1,
    backgroundColor: "white",
  },
  hamburgerContainer: {
    position: "absolute",
    top: 16,
    left: 20,
    borderRadius: 30,
    zIndex: 100,
  },
  requestTripContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
    zIndex: 100,
  },
  distanceContainer: {
    position: "absolute",
    top: 70,
    left: 20,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
  },

  distanceText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
  },
});
