import { View, Text } from "react-native";
import React, { useEffect } from "react";
import ProtectedWrapper from "../../hoc/ProtectedWrapper";
import {
  // CrossSymbol,
  // Dotted,
  // ReferralImage,
  // SettingsIcon,
  // Share,
  // UserProfilelogo,
  WhiteArrow,
} from "../../../svgs";
import { themes } from "../../../theme";
import { useUserApis } from "../../../apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { EnterSourceDestinationHeader } from "../EnterSourceDestination/Header";

export function Referral() {
  const { getUserDetalils, data } = useUserApis();
  const { applyReferalCode, data: referalResponse } = useUserApis();
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.canGoBack() ? navigation.pop() : null;
  };

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

  useEffect(() => {
    const init = async () => {
      const userDetails = JSON.parse(
        // @ts-ignore
        await AsyncStorage.getItem("@user_details")
      );

      const payload = {
        user_id: userDetails?.user_id,
        token: userDetails?.token,
        referral_code: userDetails.referral_code,
        is_skip: userDetails.is_skip,
      };
      applyReferalCode({ payload });
    };
    init();
  }, []);

  return (
    <>
      <EnterSourceDestinationHeader />
      <ProtectedWrapper backgroundColor="#FFEBCD">
        <View>
          <Text
            style={{
              fontFamily: "JockeyOne-Regular",
              color: "black",
              fontSize: 22,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Weather
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              color: "black",
              margin: 10,
              // width: 500,
            }}
          >
            In this Explore allows users to discover and learn about the flora
            and fauna that are native to their area, as well as the
            environmental problems that affect them. Users can use their
            smartphone’s camera, microphone, or GPS to scan, record, or locate
            wildlife or environmental phenomena. The app then displays
            information about the species, habitats, threats, conservation
            status, and actions that users can take to help protect them. Users
            can also access a map that shows the distribution and diversity of
            biodiversity and environmental issues in their area
          </Text>
          <Text
            style={{
              fontFamily: "JockeyOne-Regular",
              color: "black",
              fontSize: 22,

              margin: 10,
            }}
          >
            Weather
          </Text>
          <Text
            style={{
              fontFamily: "JockeyOne-Regular",
              fontSize: 18,
              color: "black",
              paddingLeft: 10,
            }}
          >
            » Types of Weather of your Selected Country:
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              margin: 10,
            }}
          >
            Absolute Humidity,Relative Humidity,Specific Humidity
          </Text>
          <Text
            style={{
              fontFamily: "JockeyOne-Regular",
              fontSize: 18,
              color: "black",
              paddingLeft: 10,
            }}
          >
            » Weather Conditions:
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              margin: 10,
            }}
          >
            Weather conditions, such as rain, fog, and clouds, are closely tied
            to humidity levels. For example, when the relative humidity reaches
            100%, the air is saturated, and if it cools further, condensation
            occurs, leading to the formation of clouds, fog, or precipitation.
          </Text>
          <Text
            style={{
              fontFamily: "JockeyOne-Regular",
              fontSize: 18,
              color: "black",
              paddingLeft: 10,
            }}
          >
            » For Controlling
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              margin: 10,
            }}
          >
            Industrial processes, laboratories, and certain applications may
            require specialized controlled environment systems to maintain
            precise humidity levels.
          </Text>
          <Text
            style={{
              fontFamily: "JockeyOne-Regular",
              fontSize: 18,
              color: "black",
              paddingLeft: 10,
            }}
          >
            » Conclusion:
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              margin: 10,
            }}
          >
            Users can conveniently filter content by category, such as animals,
            plants, fungi, water, and air. Overall, the "Explore" section
            enhances users' awareness and engagement with their natural
            surroundings, fostering a deeper connection to and understanding of
            their environment.
          </Text>
        </View>
      </ProtectedWrapper>
    </>
  );
}
