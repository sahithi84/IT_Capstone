import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import { EnterSourceDestinationHeader } from "../../../components/protected/EnterSourceDestination/Header";
import { riversData } from "../../../utils/mockData";
import { CardWithIcon } from "../../../components/general/CardWithIcon";
import { Arrow } from "../../../svgs";
import { useNavigation } from "@react-navigation/native";

const RiverScreen = () => {
  const navigation = useNavigation();
  const handleGoback = () => {
    navigation.canGoBack() ? navigation.pop() : null;
  };
  return (
    <>
      <EnterSourceDestinationHeader />
      <View>
        <TouchableOpacity onPress={handleGoback}>
          <Arrow />
        </TouchableOpacity>
      </View>
      <ProtectedWrapper>
        <Text
          style={{
            fontFamily: "JockeyOne-Regular",
            fontSize: 33,
            color: "green",
            textAlign: "center",
            top: 20,
          }}
        >
          Rivers
        </Text>

        <View
          style={{
            padding: 24,
            gap: 18,
          }}
        >
          {riversData?.map((bird, index) => {
            return (
              <CardWithIcon
                key={index}
                name={bird?.name}
                scientificName={bird?.scientificName}
                description={bird?.description}
                icon={bird?.icon}
              />
            );
          })}
        </View>
      </ProtectedWrapper>
    </>
  );
};

export default RiverScreen;
