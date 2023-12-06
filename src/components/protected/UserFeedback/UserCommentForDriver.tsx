import { View, Text } from "react-native";
import React from "react";
import { InputField } from "../../InputField";

export default function UserCommentForDriver({ setReview, review }: any) {
  return (
    <View style={{ paddingTop: 21 }}>
      <InputField
        style={{
          height: 82,
          fontFamily: "Poppins-Light",
          paddingTop: 0,
        }}
        inputBoxContainerStyle={{ borderRadius: 11 }}
        value={review}
        // @ts-ignore
        onChange={(value) => {
          setReview(value);
        }}
        placeholder="Comment(Optional)"
        multiline={true}
      />
    </View>
  );
}
