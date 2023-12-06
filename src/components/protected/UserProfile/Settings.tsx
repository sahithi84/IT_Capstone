import { View, Text, TouchableOpacity, Switch } from "react-native";

import React, { useEffect, useState } from "react";
import ProtectedWrapper from "../../hoc/ProtectedWrapper";
import {
  CrossSymbol,
  DownArrow,
  Plus,
  ReferralImage,
  SettingsIcon,
  UserProfilelogo,
  WhiteArrow,
  WhiteBackgroundPlus,
} from "../../../svgs";
import { themes } from "../../../theme";
import { useNavigation } from "@react-navigation/native";
import { useUserApis } from "../../../apis";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isAlert, setIsAlert] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const switchToggle = () => setIsAlert((previousState) => !previousState);
  const navigation = useNavigation();
  const handleGoBack = () => {
    // @ts-ignore
    navigation.canGoBack() ? navigation.pop() : null;
  };
  const { getUserDetalils, data } = useUserApis();
  useEffect(() => {
    const init = async () => {
      const userDetails = JSON.parse(
        // @ts-ignore
        await AsyncStorage.getItem("@user_details")
      );

      const payload = {
        user_id: userDetails?.user_id,
        token: userDetails?.token,
      };
      getUserDetalils({ payload });
    };
    init();
  }, []);
  return (
    <ProtectedWrapper backgroundColor={"#263238"}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <View style={{ paddingStart: 10 }}>
          <TouchableOpacity onPress={handleGoBack}>
            <WhiteArrow style={{ marginLeft: -40 }} />
          </TouchableOpacity>
        </View>
        <View style={{ marginRight: 100, marginTop: 30 }}>
          <Text
            style={{
              color: themes.colors.primary,
              ...themes.fontSizes.medium,
              lineHeight: 21,
              fontFamily: "Poppins-Light",
              // textAlign: "center",
            }}
          >
            My Profile
          </Text>
          <Text
            style={{
              color: themes.colors.background,
              ...themes.fontSizes.heading4,
              lineHeight: 34,
              fontFamily: "JockeyOne-Regular",
              // textAlign: "center",
            }}
          >
            Settings
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", paddingTop: 25 }}>
        <UserProfilelogo />
        <View>
          <Text
            style={{
              color: themes.colors.primary,
              ...themes.fontSizes.largeMedium,
              paddingTop: 6,
              lineHeight: 21,
              fontFamily: "Poppins-Medium",
            }}
          >
            {`${data?.first_name} `}
          </Text>
          <Text
            style={{
              color: themes.colors.background,
              ...themes.fontSizes.largeMedium,
              lineHeight: 21,
              fontFamily: "Poppins-Medium",
              textAlign: "center",
              paddingBottom: 29,
            }}
          >
            {`${data?.email} `}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          paddingHorizontal: 20,
          borderRadius: 30,
          paddingTop: 20, // Add padding for space at the top
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              color: "#000000",
              fontSize: 14,
              marginTop: 50,
            }}
          >
            Sound alert
          </Text>
          <View style={{ position: "absolute", top: 40, right: 0 }}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Text
            style={{
              color: "#606060",
              ...themes.fontSizes.small,
              fontFamily: "Poppins-Light",
              justifyContent: "center",
            }}
          >
            Play sound when the provider has changed status during the trip
          </Text>
          <View style={{ position: "absolute", top: 110, right: 0 }}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isAlert ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={switchToggle}
              value={isAlert}
            />
          </View>
          <Text
            style={{
              paddingTop: 10,
              color: "#000000",
              ...themes.fontSizes.largeMedium,
              lineHeight: 21,
              fontFamily: "Poppins-Medium",
            }}
          >
            Drive arrived alert
          </Text>
          <Text
            style={{
              color: "#606060",
              ...themes.fontSizes.small,
              fontFamily: "Poppins-Light",
            }}
          >
            Play sound when the driver has ARRIVED
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                paddingTop: 10,
                color: "#000000",
                ...themes.fontSizes.largeMedium,
                lineHeight: 21,
                fontFamily: "Poppins-Medium",
              }}
            >
              Emergency contacts
            </Text>
            <View style={{ paddingVertical: 10, paddingTop: 12 }}>
              <WhiteBackgroundPlus />
            </View>
          </View>
          <Text
            style={{
              color: "#606060",
              ...themes.fontSizes.small,
              fontFamily: "Poppins-Light",
              marginBottom: 20,
            }}
          >
            You can add up to 5 contacts
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                paddingTop: 10,
                color: "#000000",
                ...themes.fontSizes.largeMedium,
                lineHeight: 21,
                fontFamily: "Poppins-Medium",
                paddingRight: 10,
                textAlign: "center",
              }}
            >
              Language
            </Text>
            <Text
              style={{
                paddingTop: 10,
                color: "#000000",
                ...themes.fontSizes.largeMedium,
                lineHeight: 21,
                fontFamily: "Poppins-Medium",
                textAlign: "center", // Center text
              }}
            >
              English
              {/* <DownArrow /> */}
            </Text>
          </View>
        </View>
        <Text
          style={{
            ...themes.fontSizes.small,
            fontFamily: "Poppins-Medium",
            marginTop: 20,
            paddingBottom: 20,
            textAlign: "center",
          }}
        >
          App version 1.0.2
        </Text>
      </View>
    </ProtectedWrapper>
  );
}
