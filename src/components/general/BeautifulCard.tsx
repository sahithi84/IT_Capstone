import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { AssetEight } from "../../svgs";

const BeautifulCard = ({ data }) => {
  // console.log("data is ", data);
  const [showHabitats, setShowHabitats] = useState(false);
  const [showSpecies, setShowSpecies] = useState(false);

  const toggleHabitats = () => {
    setShowHabitats(!showHabitats);
  };

  const toggleSpecies = () => {
    setShowSpecies(!showSpecies);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Location:</Text>
      <View style={styles.location}>
        <Text style={styles.city}>{data?.city},</Text>
        <Text style={styles.state}>{data?.state},</Text>
        <Text style={styles.country}>{data?.coumtry}.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleHabitats} style={styles.button}>
          <View>
            <TouchableOpacity></TouchableOpacity>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Althaea_officinalis.jpg",
              }}
              style={{ height: 60, width: 60, borderRadius: 10 }}
            />

            <Text style={styles.buttonText}>Habitats</Text>
          </View>
        </TouchableOpacity>
      </View>

      {showHabitats && (
        <ScrollView nestedScrollEnabled style={styles.scrollView}>
          <View style={styles.list}>
            <Text style={styles.subHeading}>Plants:</Text>
            {data?.habitats?.plants.map((plant, index) => (
              <Text style={styles.item} key={index}>
                {plant}
              </Text>
            ))}

            <Text style={styles.subHeading}>Rivers:</Text>
            {data?.habitats?.rivers.map((river, index) => (
              <Text style={styles.item} key={index}>
                {river}
              </Text>
            ))}
          </View>
        </ScrollView>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleSpecies} style={styles.button}>
          <View>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/8/86/Eurasian_blue_tit_Lancashire.jpg",
              }}
              style={{ height: 60, width: 60, borderRadius: 10 }}
            />
          </View>
          <Text style={styles.buttonText}>Species</Text>
        </TouchableOpacity>
      </View>

      {showSpecies && (
        <ScrollView nestedScrollEnabled style={styles.scrollView}>
          <View style={styles.list}>
            <Text style={styles.subHeading}>Animals:</Text>
            {data?.species?.animals.map((animal, index) => (
              <Text style={styles.item} key={index}>
                {animal}
              </Text>
            ))}

            <Text style={styles.subHeading}>Birds:</Text>
            {data?.species?.birds.map((bird, index) => (
              <Text style={styles.item} key={index}>
                {bird}
              </Text>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 5,
    flex: 1,
    width: "100%",
    position: "relative",
    // paddingVertical: 150,
    // height: "50%",
    marginTop: 25,
  },
  heading: {
    fontFamily: "JockeyOne-Regular",
    fontSize: 24,
    lineHeight: 34,
    color: "#000000",
    textAlign: "center",
    padding: 10,
  },
  location: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderStyle: "dashed",
  },
  city: {
    color: "black",
    fontFamily: "Poppins-Regular",
    textTransform: "capitalize",
    fontSize: 16,
  },
  state: {
    color: "black",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textTransform: "capitalize",
  },
  country: {
    color: "black",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textTransform: "capitalize",
  },
  buttonContainer: {
    marginTop: 50,
  },
  button: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
    borderRadius: 5,
    // paddingVertical: 8,
  },
  buttonText: {
    color: "blue",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    // paddingVertical: 5,
  },
  scrollView: {
    marginTop: 10,
  },
  list: {
    flexDirection: "column",
    marginBottom: 8,
    padding: 10,
    borderStyle: "dashed",
    borderColor: "black",
  },
  subHeading: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    color: "black",
  },
  subHeading: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10, // Add margin to create space between subheadings and items
  },
  item: {
    color: "black",
    width: "100%",

    // marginLeft: 10,
    // backgroundColor: "blue",

    marginBottom: 5,
    borderWidth: 1,
    borderColor: "green",
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});

export { BeautifulCard };
