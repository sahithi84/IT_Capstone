import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import { WhiteArrow } from "../../../svgs";
import { useNavigation } from "@react-navigation/native";
import { themes } from "../../../theme";
import { Line } from "react-native-svg";
import { EnterSourceDestinationHeader } from "../../../components/protected/EnterSourceDestination/Header";
import DrawerLeftToRight from "../../../components/testingpurpose/DrawerLeftToRight";

const EventsScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <ProtectedWrapper>
        <DrawerLeftToRight />
      </ProtectedWrapper>
    </>
  );
};

export default EventsScreen;
