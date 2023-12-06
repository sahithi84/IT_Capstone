import { View, Text } from "react-native";
import React from "react";
import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import {
  FavouriteIcon,
  HomeIcon,
  MapIcon,
  OfficeIcon,
  PlusIcon,
  YourLocationIcon,
} from "../../../svgs";
import { EnterSourceDestinationHeader } from "../../../components/protected/EnterSourceDestination/Header";

const EstimatedMoneyForVehicles = () => {
  // const userId = route?.params?.userId;
  // const tripId = route?.params?.tripId;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <EnterSourceDestinationHeader showBackIcon={true} />
      <ProtectedWrapper>
        <View
          style={{
            alignItems: "center",
            paddingTop: 24,
            flex: 1,
            paddingHorizontal: 19,
          }}
        >
          <View
            style={{
              paddingHorizontal: 9,
              paddingTop: 13,
            }}
          >
            <View
              style={{
                borderWidth: 1,
                height: 125,
                paddingTop: 13,
                borderRadius: 10,
              }}
            >
              <View style={{ flexDirection: "row", gap: 11 }}>
                <View style={{ paddingLeft: 25, paddingTop: 30 }}>
                  <YourLocationIcon />
                </View>
                <Text
                  style={{
                    color: "black",
                    fontFamily: "Poppins-Light",
                    paddingTop: 23,
                    fontSize: 14,
                  }}
                >
                  Yours Location
                </Text>
                {/* <View style={{ paddingLeft: 120, paddingTop: 23 }}>
                  <FavouriteIcon />
                </View> */}
              </View>
              <View style={{ flexDirection: "row", gap: 20, paddingLeft: 47 }}>
                <View
                  style={{
                    height: 1,
                    backgroundColor: "#F3F0E2",
                    width: "85%",
                    top: 10,
                  }}
                ></View>
                <View style={{ paddingRight: 20 }}>
                  <PlusIcon />
                </View>
              </View>
              <View style={{ flexDirection: "row", gap: 13 }}>
                <View style={{ paddingLeft: 25 }}>
                  <MapIcon />
                </View>
                <Text
                  style={{
                    color: "#D3D3D3",
                    fontFamily: "Poppins-Light",
                  }}
                >
                  Enter your destination
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 14, paddingTop: 36 }}>
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
            </View>
            <View style={{ flexDirection: "row", gap: 14, paddingTop: 28 }}>
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
            </View>
          </View>
        </View>
      </ProtectedWrapper>
    </View>
  );
};

export default EstimatedMoneyForVehicles;
