import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import { EnterSourceDestinationHeader } from "../../../components/protected/EnterSourceDestination/Header";
import { CardWithIcon } from "../../../components/general/CardWithIcon";
import { plantsData } from "../../../utils/mockData";
import { Arrow } from "../../../svgs";
import { useNavigation } from "@react-navigation/native";

const PlantsScreen = () => {
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
        <View>
          <Text
            style={{
              color: "green",
              fontFamily: "Poppins-Medium",
              fontSize: 22,
              textAlign: "center",
              paddingVertical: 20,
            }}
          >
            Plants:
          </Text>
        </View>
        <View
          style={{
            padding: 24,
            gap: 18,
          }}
        >
          {plantsData?.map((bird, index) => {
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

export default PlantsScreen;
