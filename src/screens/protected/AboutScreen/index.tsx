import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import { WhiteArrow } from "../../../svgs";
import { useNavigation } from "@react-navigation/native";
import { themes } from "../../../theme";
import { Line } from "react-native-svg";
import { EnterSourceDestinationHeader } from "../../../components/protected/EnterSourceDestination/Header";
import { Image } from "react-native";

const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <EnterSourceDestinationHeader />
      <ProtectedWrapper>
        <View
          style={{
            width: "100%",
            paddingLeft: 30,
            justifyContent: "center",
            // alignContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://english-blog.s3.amazonaws.com/uploads/2020/06/Pledging-To-Protect-Nature-On-World-Environment-Day-768x384.jpg",
            }}
            style={{
              width: "90%",
              height: "60%",
              justifyContent: "center",
              borderRadius: 2,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 12,
              color: "black",
              // margin: 10,
              marginHorizontal: 10,
              paddingBottom: 20,
              // backgroundColor: "red",
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
            biodiversity and environmental issues in their area.
          </Text>
        </View>
      </ProtectedWrapper>
    </>
  );
};

export default AboutScreen;
