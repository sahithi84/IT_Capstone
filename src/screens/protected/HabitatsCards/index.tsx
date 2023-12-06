import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Protected } from "../../../stacks";
import {
  Arrow,
  AssetEight,
  AssetFour,
  AssetNine,
  AssetOne,
  AssetSeven,
  RiverIcon,
  SpeciesIcon,
} from "../../../svgs";
import { Image } from "react-native";

const HabitatsCards = () => {
  const navigation = useNavigation();
  const handleGoback = () => {
    navigation.navigate("Menuscreen");
  };
  const handleRiversScreen = () => {
    navigation.navigate("RiverScreen");
  };

  const handleBirdsScreen = () => {
    navigation.navigate("BirdsScreen");
  };

  return (
    <>
      <View>
        <TouchableOpacity onPress={handleGoback}>
          <Arrow />
        </TouchableOpacity>
      </View>
      <View
        style={{ height: "92%", backgroundColor: "#ffff", borderRadius: 10 }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 16,
            padding: 5,
            color: "green",
            textAlign: "center",
          }}
        >
          Habitats At Your Location:
        </Text>
        {/* <Text style={{ paddingTop: }}>Founded Environment</Text> */}

        <View style={styles.container}>
          <TouchableOpacity style={styles.card} onPress={handleRiversScreen}>
            {/* <RiverIcon /> */}
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Elwha_River_-_Humes_Ranch_Area2.JPG",
              }}
              style={{ height: "90%", width: "100%", borderRadius: 10 }}
            />
            <Text style={styles.cardText}>Rivers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={handleBirdsScreen}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Male_Anna%27s_Hummingbird_in_GGP.JPG",
              }}
              style={{ height: "90%", width: "100%", borderRadius: 10 }}
            />

            <Text
              style={{
                paddingBottom: 40,
                fontWeight: "bold",
                fontSize: 20,
                color: "green",
              }}
            >
              Birds
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
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
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
});

export default HabitatsCards;
