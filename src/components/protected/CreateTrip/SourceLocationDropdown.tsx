/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect } from "react";
import { useUserApis } from "../../../apis";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { PermissionsAndroid, Alert } from "react-native";
import { GOOGLE_MAPS_APIKEY } from "../../../constants/general";
import { themes } from "../../../theme";
import { RoundedCloseIcon, YourLocationIcon } from "../../../svgs";
import Geolocation from "@react-native-community/geolocation";
import { observer } from "mobx-react-lite";
import { useCreateTripWithOtp } from "../../../hooks/createTripWithOTP/useCreateTripWithOtp";
import MapSearchResultListItem from "../../general/MapSearchResultListItem";
import { SourceLocationLeftInputIcon } from "../../general/SourceLocationLeftInputIcon";
import SourceLocationRightInputIcon from "../../general/SourceLocationRightInputIcon";
import { createTripFormStore } from "../../../mobx/withOtpTripStates";

// @ts-ignore
navigator.geolocation = require("@react-native-community/geolocation");

const searchRef = React.createRef();

export const SourceLocationDropdown = observer(() => {
  const { data, getLocationByName } = useUserApis();

  const { setFormField, formData } = createTripFormStore;

  useEffect(() => {
    console.log("data man", data);
    // @ts-ignore
    const lattitude = data?.results?.[0]?.geometry?.location?.lat;
    setFormField("latitude", lattitude);
  }, [data]);

  useEffect(() => {
    // @ts-ignore
    const langitude = data?.results?.[0]?.geometry?.location?.lng;
    setFormField("longitude", langitude);
  }, [data]);

  const handleGetSourceLocation = useCallback(async (location: any) => {
    try {
      const payload = {
        location: location,
      };
      await getLocationByName({ payload });
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => {
    if (searchRef?.current) {
      // @ts-ignore
      searchRef?.current?.setAddressText(formData?.source_address);
    }
  }, [searchRef]);

  return (
    <GooglePlacesAutocomplete
      GooglePlacesDetailsQuery={{ fields: "geometry" }}
      renderDescription={(row) =>
        row?.description || row?.formatted_address || row?.name
      }
      textInputProps={{
        placeholderTextColor: "#515151",
        returnKeyType: "search",
        // borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 5,
        ...themes.fontSizes.small,
        height: 35,
      }}
      // @ts-ignore
      ref={searchRef}
      renderLeftButton={() => <SourceLocationLeftInputIcon />}
      renderRightButton={() => (
        <SourceLocationRightInputIcon searchRef={searchRef} />
      )}
      debounce={100}
      renderRow={(rowData) => {
        const title = rowData?.structured_formatting?.main_text;
        const address = rowData?.structured_formatting?.secondary_text;
        return <MapSearchResultListItem title={title} address={address} />;
      }}
      styles={{
        container: {
          flex: 0,
        },
        textInputContainer: {
          backgroundColor: "rgba(0,0,0,0)",
          borderTopWidth: 0,
          borderBottomWidth: 0,
          fontFamily: "Poppins-Light",
        },
        textInput: {
          color: "black",
          fontSize: 14,
          height: 45,
          paddingHorizontal: 12,
          borderRadius: 0,
          fontFamily: "Poppins-Light",
        },
        description: {
          fontWeight: "bold",
          color: "red",
        },
        predefinedPlacesDescription: {
          color: "#1faadb",
        },
      }}
      placeholder="Search for country or state"
      onPress={(source: any) => {
        console.log("source===>", JSON.stringify(source));
        const selectedText = source?.description || "";
        setFormField("source_address", selectedText);

        // Now you have the location name, latitude, and longitude
        handleGetSourceLocation(selectedText);
      }}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: "en",
      }}
      listViewDisplayed={false}
      currentLocationLabel="Current Location"
      nearbyPlacesAPI="GoogleReverseGeocoding"
      currentLocation={true}
      getDefaultValue={() => ""}
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        // key: "",
        language: "en",
      }}
    />
  );
});
