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
  SpeciesIcon,
} from "../../../svgs";
import { Image } from "react-native";

const Menuscreen = () => {
  const navigation = useNavigation();

  const handleSpeciesScreen = () => {
    navigation.navigate("Protected", { screen: "SpeciesScreen" });
  };

  const handleHabitatsPress = () => {
    // Handle navigation to Habitats screen
    navigation.navigate("Protected", { screen: "HabitatsCards" });
  };
  const handleGoback = () => {
    navigation.navigate("EventScreen");
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
            fontSize: 18,
            padding: 5,
            textAlign: "center",
          }}
        >
          Location:
        </Text>
        {/* <Text style={{ paddingTop: }}>Founded Environment</Text> */}

        <View style={styles.container}>
          <TouchableOpacity style={styles.card} onPress={handleSpeciesScreen}>
            {/* <SpeciesIcon /> */}
            <Image
              source={{
                uri: "https://images.thequint.com/thequint%2F2022-10%2Ff81d81da-3eaf-4232-87c0-d4796a56b270%2Fconcept_nature_reserve_conserve_wildlife_reserve_tiger_deer_global_picture_id1177901346.jpg?auto=format%2Ccompress&fmt=webp&width=720",
              }}
              style={{ height: "100%", width: "100%", borderRadius: 10 }}
            />

            <Text style={styles.cardText}>Species</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={handleHabitatsPress}>
            {/* <AssetFour /> */}
            <Image
              source={{
                uri: "https://storage.googleapis.com/pai-images/0023073ae4d64046a0171db9ee0deec2.jpeg",
              }}
              style={{ height: "100%", width: "100%", borderRadius: 10 }}
            />
            <Text
              style={{
                paddingBottom: 40,
                fontWeight: "bold",
                fontSize: 20,
                color: "green",
              }}
            >
              Habitats
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
    paddingTop: 40,
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
    marginVertical: 30,
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
});

export default Menuscreen;
