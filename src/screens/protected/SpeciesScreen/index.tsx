import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EnterSourceDestinationHeader } from "../../../components/protected/EnterSourceDestination/Header";
import {
  AboutIcon,
  AnimalOne,
  Arrow,
  PlantOneIcon,
  RiverIcon,
  SpeciesIcon,
} from "../../../svgs";

import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import { Image } from "react-native";

// import { MenuToggleIcon } from "../../../svgs/MenuToggleIcon";

const SpeciesScreen = () => {
  const navigation = useNavigation();

  // const handleBirdsScreen = () => {
  //   navigation.navigate("Protected", { screen: "BirdsScreen" });
  // };
  // const handleRiverScreen = () => {
  //   navigation.navigate("Protected", { screen: "RiverScreen" });
  // };
  const handleAnimals = () => {
    navigation.navigate("Protected", { screen: "AnimalScreen" });
  };
  const handlePlantScreen = () => {
    navigation.navigate("PlantsScreen");
  };
  const handleGoback = () => {
    navigation.navigate("Menuscreen");
  };
  return (
    <>
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
              fontFamily: "Poppins-Bold",

              fontSize: 18,
              textAlign: "center",
              paddingVertical: 24,
              paddingHorizontal: 12,
            }}
          >
            Species In Your Location:
          </Text>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.card} onPress={handleAnimals}>
            <Image
              source={{
                uri: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRD89rJQuM1fpPyucHCqWUHeqMyvmPImu15mxJDIO0e8Y5fleygNNPtzBFFlbyDkPGn",
              }}
              style={{ height: "90%", width: "100%", borderRadius: 10 }}
            />

            <Text style={styles.cardText}>Animals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={handlePlantScreen}>
            {/* <PlantOneIcon /> */}
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/5/57/Fr%C3%BChling_bl%C3%BChender_Kirschenbaum.jpg",
              }}
              style={{ height: "90%", width: "100%", borderRadius: 10 }}
            />
            <Text style={styles.cardText}>Plants</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.card} onPress={handleAnimalScreen}>
          <AssetEight />
          <Text style={styles.cardText}>Birds</Text>
        </TouchableOpacity> */}

          {/* <TouchableOpacity style={styles.card} onPress={handleRiverScreen}>
          <RiverIcon />
         

          <Text style={styles.cardText}>Rivers</Text>
        </TouchableOpacity> */}
        </View>
      </ProtectedWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    // paddingTop: 80,
  },
  card: {
    width: "100%",
    aspectRatio: 1.5, // Aspect ratio for the card
    // backgroundColor: "#fc7303",
    borderRadius: 10,
    // borderWidth: 2,
    borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  cardText: {
    color: "green",
    // backgroundColor: "black",

    fontSize: 19,
    fontFamily: "Poppins-Medium",
    // justifyContent: "center",
    paddingBottom: 30,
  },
});

export default SpeciesScreen;
