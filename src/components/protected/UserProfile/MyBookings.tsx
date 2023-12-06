import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { themes } from "../../../theme";
import { SettingsIcon, UserProfilelogo, WhiteArrow } from "../../../svgs";
import ProtectedWrapper from "../../hoc/ProtectedWrapper";
import { useUserApis } from "../../../apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment-timezone";

import ElapsedTimeTimer from "../../general/ElapsedTimeTimer";
import { EnterSourceDestinationHeader } from "../EnterSourceDestination/Header";

export function MyBookings() {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.canGoBack() ? navigation.pop() : null;
  };
  const handleSettingsIcon = (Settings: any) => {
    // handleGoFeedback();
    // @ts-ignore
    navigation.navigate("Protected", {
      screen: "Settings",
    });
  };
  const { getUserDetalils, data } = useUserApis();
  const { getFutureRequests, data: getFutureRequestResponse } = useUserApis();
  const { getAllUserTrips, data: getAlluserTripDetailsResponse } =
    useUserApis();
  const [selectedTabOption, setSelectedTabOption] = useState("upcoming_trips");

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
      };
      getFutureRequests({ payload });
      getAllUserTrips({
        payload: {
          ...payload,
          start_date: "2023-09-11T21:04:05.264+00:00",
          end_date: "2023-12-11T21:04:05.264+00:00",
          page: 1,
        },
      });
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
            Animals
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
            Animals
          </Text>
          <Text
            style={{
              fontFamily: "JockeyOne-Regular",
              fontSize: 18,
              color: "black",
              paddingLeft: 10,
            }}
          >
            » Types of Animals of your Selected Country:
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              margin: 10,
            }}
          >
            American Bison,Mountain Lion (Cougar),Raccoon,Raccoon and
            Coyote..etc.
          </Text>

          <Text
            style={{
              fontFamily: "JockeyOne-Regular",
              fontSize: 18,
              color: "black",
              paddingLeft: 10,
            }}
          >
            » For Protecting
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              margin: 10,
            }}
          >
            Support Conservation Organizations,Habitat Preservation,Educate and
            Raise Awareness and Promote Sustainable Practices..etc.
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
            In conclusion, the protection of animals and their habitats is a
            fundamental and shared responsibility. It is essential for
            maintaining the balance of our ecosystems, preserving biodiversity,
            and ensuring the well-being of both wildlife and human communities.
            By supporting conservation organizations, advocating for stronger
            laws, combating poaching and illegal trade, and promoting
            responsible and sustainable practices, we can make a positive impact
            on animal welfare and habitat preservation.
          </Text>
        </View>
      </ProtectedWrapper>
    </>
  );
}
