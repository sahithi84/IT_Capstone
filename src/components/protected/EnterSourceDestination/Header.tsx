import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
// import { Arrow, MenuToggleIcon } from "../../../svgs";
import { useNavigation } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/MaterialIcons";
import { MenuToggleIcon } from "../../../svgs/MenuToggleIcon";
import Icon from "react-native-vector-icons/EvilIcons";
import { Arrow, MapIcon, YourLocationIcon } from "../../../svgs";
import { SourceLocationDropdown } from "../CreateTrip/SourceLocationDropdown";
import { DestinationLocationDropdown } from "../CreateTrip/DestinationLocationDropdown";
import LinearGradient from "react-native-linear-gradient";

export function EnterSourceDestinationHeader({
  backIconType = "back",
  goBack = () => {},
  showBackIcon = true,
  showSearchIcon = false,
}: any) {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.canGoBack() ? navigation.pop() : null;
  };

  return (
    // <LinearGradient>
    <View
      style={{
        width: 400,
        // paddingTop: 24,
        paddingHorizontal: 40,
        // backgroundColor: "red",
        paddingLeft: 1,

        // justifyContent: "space-around",
      }}
    >
      {/* <View style={{ width: 8 }}> */}
      {/* <MapIcon /> */}
      {/* </View> */}
      {/* <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent:
              navigation.canGoBack() || showBackIcon
                ? "space-between"
                : "center",
          }}
        >
          {navigation.canGoBack() || showBackIcon ? (
            <View>
              <TouchableOpacity onPress={handleGoBack}>
                <Text>
                  <Arrow />
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <View>
            <Text
              style={{
                color: "black",
                textAlign: "center",
                fontFamily: "Poppins-Medium",
                lineHeight: 34,
                fontSize: 18,
                paddingBottom: 12,
              }}
            >
              Biological Species In Local Environment
            </Text>
          </View>
        </View> */}
      {showSearchIcon ? <DestinationLocationDropdown /> : null}
    </View>
    // </LinearGradient>
  );
}
