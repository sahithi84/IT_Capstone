import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ProtectedWrapper from "../../hoc/ProtectedWrapper";
import { WhiteArrow } from "../../../svgs";
import { useNavigation } from "@react-navigation/native";
import { themes } from "../../../theme";
import { EnterSourceDestinationHeader } from "../EnterSourceDestination/Header";

export function Favourite() {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.canGoBack() ? navigation.pop() : null;
  };
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
            Water & it's Pollution
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
            Soil
          </Text>
          <Text
            style={{
              fontFamily: "JockeyOne-Regular",
              fontSize: 18,
              color: "black",
              paddingLeft: 10,
            }}
          >
            » Types of Water of your Selected Country:
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              margin: 10,
            }}
          >
            Surface Water,Rainwater Harvesting,Recycled Water,Desalinated
            Water,Well Water
          </Text>
          <Text
            style={{
              fontFamily: "JockeyOne-Regular",
              fontSize: 18,
              color: "black",
              paddingLeft: 10,
            }}
          >
            » Soil Pollutions:
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              margin: 10,
            }}
          >
            Chemical Pollution,Salinization etc.
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
            Regulation and Legislation,Waste Management and Hazardous Substance
            Management ..etc.
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
