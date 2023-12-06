/* eslint-disable react-native/no-inline-styles */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "../../../constants/general";
import { useDispatch, useSelector } from "react-redux";
import { useUserApis } from "../../../apis";
import { PathFromSourceToDestination } from "./PathFromSourceToDestination";
import {
  CrossSymbol,
  MapIcon,
  SearchIcon,
  YourLocationIcon,
} from "../../../svgs";
import { getPixelSize } from "../../../utils/mapFunctions";

import { EnterSourceDestinationHeader } from "../EnterSourceDestination/Header";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../theme";
import { observer } from "mobx-react-lite";
import { createTripFormStore } from "../../../mobx/withOtpTripStates";
import Modal from "react-native-modal";
import { Button } from "../../Button";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { SourceLocationDropdown } from "../CreateTrip/SourceLocationDropdown";
import { DynamicMap } from "./DynamicMap";
import axios from "axios";
import { BeautifulCard } from "../../general/BeautifulCard";

import { Menuscreen } from "../../../screens";

export const Map = observer(
  ({ origin, destination, showBothPickupAndDropInputBoxes = false }: any) => {
    const [waypoints, setWaypoints] = useState([]);
    const [explorePopup, setexplorePopup] = useState("");
    const navigation = useNavigation();
    // console.log("explore popup response id ==>", explorePopup);

    const tripData = useSelector((state) => {
      // @ts-ignore
      return state?.trip;
    });
    const handleSpeciesScreenInModal = () => {
      navigation.navigate("Protected", { screen: "SpeciesScreen" });
    };

    useEffect(() => {
      const fitMapToCoordinates = () => {
        if (waypoints.length === 0 || !mapRef.current) {
          return;
        }
        // @ts-ignore
        mapRef.current.fitToCoordinates(waypoints, {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          animated: true,
        });
      };

      fitMapToCoordinates();
    }, [waypoints]);

    useEffect(() => {
      const fitMapToCoordinates = () => {
        if (waypoints.length === 0 || !mapRef.current) {
          return;
        }
        // @ts-ignore
        mapRef.current.fitToCoordinates(waypoints, {
          edgePadding: {
            top: getPixelSize(50),
            right: getPixelSize(50),
            bottom: getPixelSize(50),
            left: getPixelSize(50),
          },
          animated: true,
        });
      };

      fitMapToCoordinates();
    }, [waypoints]);

    const { formData } = createTripFormStore;

    const theme = useTheme();

    const handleGoToEnterSourceDestination = () => {
      if (formData?.source_address && formData?.destination_address) {
        //@ts-ignore
        navigation.navigate("Protected", {
          screen: "EnterSourceDestination",
          params: { mode: "edit" },
        });
      } else {
        //@ts-ignore
        navigation.navigate("Protected", {
          screen: "EnterSourceDestination",
          params: { mode: "new" },
        });
      }
    };
    const [clickedCoordinates, setClickedCoordinates] = useState({
      latitude: "",
      longitude: "",
    });
    const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);
    const handleOpenFilterModal = () => {
      fetchMapResponse();
      setIsOpenFilterModal((prevState) => !prevState);
    };
    const fetchMapResponse = useCallback(async () => {
      const responseOf1 = await axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=17.425003022083747,78.4408961981535&key=AIzaSyA_PcBa8j4BMt_sIYqXFUNJo4a8ILWTHfw"
      );
      // console.log("responseOf1", JSON.stringify(responseOf1.data));

      const payload = {
        long: 78.00008678,
        lat: 76.6787887,
        city: "hyderabad",
        state: "telangana",
        country: "india",
      };
      const response = await axios.post(
        "https://lgl8fzfq6i.execute-api.ap-south-1.amazonaws.com/dev/exploreResponse",
        payload
      );
      // console.log("response of the map==>", response.data);
      setexplorePopup(response.data);
    }, []);

    return (
      <>
        <Modal
          isVisible={isOpenFilterModal}
          onDismiss={() => setIsOpenFilterModal(false)}
          style={{
            backgroundColor: "",
            // padding: 16,
            elevation: 40,
            alignItems: "center",
            borderRadius: 30,
            flex: 1,
            position: "relative",
            // marginTop: 100,
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 4,
          }}
        >
          <TouchableOpacity
            onPress={() => setIsOpenFilterModal(false)}
            style={{ position: "absolute", top: 5, right: -10 }}
          >
            <CrossSymbol />
          </TouchableOpacity>
          <Menuscreen />
        </Modal>
        <View style={styles.container}>
          <EnterSourceDestinationHeader
            showBackIcon={false}
            goBack={handleGoToEnterSourceDestination}
            showSearchIcon={true}
          />

          <DynamicMap
            origin={origin}
            setClickedCoordinates={setClickedCoordinates}
            handleOpenFilterModal={handleOpenFilterModal}
            clickedCoordinates={clickedCoordinates}
            formData={formData}
          />
        </View>
      </>
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
    // zIndex: 100,
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
