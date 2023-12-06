import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import { WhiteArrow } from "../../../svgs";
import { useNavigation } from "@react-navigation/native";
import { themes } from "../../../theme";
import { Line } from "react-native-svg";
import { EnterSourceDestinationHeader } from "../../../components/protected/EnterSourceDestination/Header";
// import DrawerLeftSlide from "../../../utils/drawerLeftSlide";

const GetInvolvedScreen = () => {
  const navigation = useNavigation();
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
            Get In Touch With Us
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
            Explore Section
          </Text>
          <Text
            style={{
              fontFamily: "JockeyOne-Regular",
              fontSize: 18,
              color: "black",
              paddingLeft: 10,
            }}
          >
            » Interactive Map:
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              margin: 10,
            }}
          >
            Allow users to browse local biodiversity through a touch-friendly
            map.
          </Text>
          <Text
            style={{
              fontFamily: "JockeyOne-Regular",
              fontSize: 18,
              color: "black",
              paddingLeft: 10,
            }}
          >
            » Category Filters:
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              margin: 10,
            }}
          >
            Tabs or dropdowns for filtering by animals, plants, fungi, water,
            air, etc.
          </Text>
          <Text
            style={{
              fontFamily: "JockeyOne-Regular",
              fontSize: 18,
              color: "black",
              paddingLeft: 10,
            }}
          >
            » Interative Cards:
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              margin: 10,
            }}
          >
            When a user selects an item, present an information card with
            pictures, common names, scientific names, conservation status, etc.
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
        <View></View>
      </ProtectedWrapper>
    </>
  );
};

export default GetInvolvedScreen;
