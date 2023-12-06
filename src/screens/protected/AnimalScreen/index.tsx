import { View, Text } from "react-native";
import React from "react";
import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import { EnterSourceDestinationHeader } from "../../../components/protected/EnterSourceDestination/Header";
import { animalsData } from "../../../utils/mockData";
import { CardWithIcon } from "../../../components/general/CardWithIcon";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Arrow } from "../../../svgs";

const AnimalScreen = () => {
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
          Animals
        </Text>
        <View
          style={{
            padding: 24,
            gap: 18,
          }}
        >
          {animalsData?.map((bird, index) => {
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

export default AnimalScreen;
