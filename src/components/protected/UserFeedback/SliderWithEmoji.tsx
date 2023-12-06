import { View, Text, Dimensions } from "react-native";
import React from "react";
import { getEmojiBySliderValue } from "../../../screens/protected/UserFeedback";
import Slider from "@react-native-community/slider";

const { width } = Dimensions.get("screen");

export default function SliderWithEmoji({ rating, setRating }: any) {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{}}>{getEmojiBySliderValue(rating)?.icon}</View>

      <View style={{ paddingTop: 14 }}>
        <Slider
          style={{
            width: width - 40,
            height: 40,
            transform: [{ scaleY: 1.2 }],
          }}
          minimumValue={1}
          maximumValue={5}
          step={1}
          thumbTintColor="#525252"
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#fefefe"
          value={rating}
          onValueChange={(value) => {
            setRating(value);
          }}
        />
      </View>
    </View>
  );
}
