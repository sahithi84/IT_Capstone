import { Alert, Image, StyleSheet } from "react-native";
import React, { useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import countriesData from "../../../hooks/animals/dummyData.json";
import { useNavigation } from "@react-navigation/native";
import { createTripFormStore } from "../../../mobx/withOtpTripStates";

export function FallBackMap({
  origin,
  setClickedCoordinates,
  handleOpenFilterModal,
  clickedCoordinates,
  formData,
}: any) {
  const mapRef = useRef(null);

  const navigation = useNavigation();

  return (
    <>
      {origin ? (
        <MapView
          ref={mapRef}
          style={styles.map}
          onPress={(e) => {
            handleOpenFilterModal();
            console.log(e.nativeEvent.coordinate);
            setClickedCoordinates(e.nativeEvent.coordinate);
          }}
          region={{
            latitude: formData?.d_latitude || 34.0380948,
            longitude: formData?.d_longitude || -84.6000258,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {/* <Marker
            coordinate={clickedCoordinates}
            title="Your Current Location"
            description="Species"
          >
            <Image
              source={{
                uri: "https://staging.ohmelogistics.com/map_pin/pickup.png",
              }}
              style={{ width: 27, height: 40 }}
            />
          </Marker> */}
          {/* {formData.latitude && formData.longitude ? ( */}
          <Marker
            title="Searched Location"
            coordinate={{
              latitude: formData?.d_latitude || 34.0380948,
              longitude: formData?.d_longitude || -84.6000258,
            }}
            onPress={() => {
              navigation.navigate("Protected", { screen: "Menuscreen" });
            }}
          >
            <Image
              source={{
                uri: "https://staging.ohmelogistics.com/map_pin/pickup.png",
              }}
              style={{ width: 27, height: 40 }}
            />
          </Marker>
          {/* {countriesData?.map((item, index) => {
            return (
              <Marker
                key={`fallback-map-${index}`}
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
          {/* ) : null} */}
        </MapView>
      ) : null}
    </>
  );
}

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
