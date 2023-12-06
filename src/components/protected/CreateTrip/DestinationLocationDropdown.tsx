/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect } from "react";
import { useUserApis } from "../../../apis";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GOOGLE_MAPS_APIKEY } from "../../../constants/general";
import { themes } from "../../../theme";
import { MapIcon, RoundedCloseIcon } from "../../../svgs";
import { observer } from "mobx-react-lite";
import { createTripFormStore } from "../../../mobx/withOtpTripStates";
import { prettifyJSON } from "../../../utils/prettifyJSON";

const searchRef = React.createRef();

export const DestinationLocationDropdown = observer(() => {
  const { data, getLocationByName } = useUserApis();
  const { setFormField } = createTripFormStore;

  useEffect(() => {
    // @ts-ignore
    const lattitude = data?.results?.[0]?.geometry?.location?.lat;
    setFormField("d_latitude", lattitude);
    setFormField("pin_icon", data?.results?.[0]?.icon);
  }, [data]);

  useEffect(() => {
    // @ts-ignore
    const langitude = data?.results?.[0]?.geometry?.location?.lng;
    setFormField("d_longitude", langitude);
  }, [data]);

  const handleGetDestinationLocation = useCallback(async (location: any) => {
    try {
      const payload = {
        location: location,
      };
      await getLocationByName({ payload });
    } catch (error) {
      return error;
    }
  }, []);

  // useEffect(() => {
  //   if (searchRef?.current) {
  //     searchRef?.current?.setAddressText(formData?.destination_address);
  //   }
  // }, [searchRef]);

  return (
    <GooglePlacesAutocomplete
      textInputProps={{
        placeholderTextColor: "#515151",
        returnKeyType: "search",
        borderWidth: 2,

        borderColor: "green",
        ...themes.fontSizes.small,
        height: 45,
        borderRadius: 7,
      }}
      // @ts-ignore
      ref={searchRef}
      renderRightButton={() => (
        <TouchableOpacity
          onPress={() => {
            // @ts-ignore
            searchRef?.current?.clear();
          }}
          style={{
            borderTopRightRadius: 7,

            borderBottomRightRadius: 7,
            position: "absolute",
            right: 7,
            top: 7,
            backgroundColor: "white",
          }}
        >
          <RoundedCloseIcon />
        </TouchableOpacity>
      )}
      debounce={100}
      renderRow={(rowData) => {
        const title = rowData.structured_formatting.main_text;
        const address = rowData.structured_formatting.secondary_text;
        return (
          <View style={{ left: 12 }}>
            <Text style={styles.result}>{title}</Text>
            <Text style={styles.result}>{address}</Text>
          </View>
        );
      }}
      styles={{
        container: {
          flex: 0,
          marginHorizontal: 19,
        },
        textInputContainer: {
          backgroundColor: "rgba(0,0,0,0)",
          borderTopWidth: 0,
          borderBottomWidth: 0,
          fontFamily: "Poppins-Light",
        },
        textInput: {
          marginLeft: 0,
          marginRight: 0,
          color: "black",
          borderRadius: 0,
          borderWidth: 3,
          borderColor: "red",
          // backgroundColor: "red",
          fontSize: 14,
          // height: 50,
          paddingHorizontal: 50,
          fontFamily: "Poppins-Light",
        },
      }}
      placeholder="Search For Country or City"
      onPress={(destination: any) => {
        const selectedText = destination.description || "";
        setFormField("destination_address", selectedText);
        handleGetDestinationLocation(selectedText);
      }}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: "en", // To receive the results in English
      }}
      listViewDisplayed={false} // Hide the list view
    />
  );
});

const styles = StyleSheet.create({
  result: {
    fontSize: 12,
    color: "black",
    fontFamily: "Poppins-Light",
  },
});
