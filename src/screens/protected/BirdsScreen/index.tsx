import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
// import { themes } from "../../../theme";
import { useNavigation } from "@react-navigation/native";
import { EnterSourceDestinationHeader } from "../../../components/protected/EnterSourceDestination/Header";
import {
  Arrow,
  AssetEight,
  AssetFive,
  AssetNine,
  AssetSeven,
} from "../../../svgs";
import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import { CardWithIcon } from "../../../components/general/CardWithIcon";
import { birdsData } from "../../../utils/mockData";

const BirdsScreen = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.canGoBack() ? navigation.pop() : null;
  };

  return (
    <>
      <EnterSourceDestinationHeader />
      <View>
        <TouchableOpacity onPress={handleGoBack}>
          <Arrow />
        </TouchableOpacity>
      </View>

      <ProtectedWrapper>
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "green",
              fontFamily: "Poppins-Medium",
              fontSize: 18,
            }}
          >
            Birds:
          </Text>
        </View>
        <View
          style={{
            padding: 24,
            gap: 18,
          }}
        >
          {birdsData?.map((bird, index) => {
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
export default BirdsScreen;
