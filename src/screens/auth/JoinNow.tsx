import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Arrow, JoinNowImg } from "../../svgs";
import { Button } from "../../components";
import { useNavigation } from "@react-navigation/native";
import AuthScreenWrapper from "../../components/hoc/AuthWrapper";

export default function JoinNow() {
  const navigation = useNavigation();
  const handleSubmit = () => {
    // @ts-ignore
    navigation.navigate("Auth", {
      screen: "EnterPhoneNumber",
    });
  };

  const handleGoBack = () => {
    // @ts-ignore
    navigation.canGoBack() ? navigation.pop() : null;
  };

  return (
    <AuthScreenWrapper
      showBackArrowIcon={true}
      backArrowIconWrapperStyle={{ paddingTop: 29, paddingLeft: 19 }}
    >
      <View style={{ alignItems: "center", paddingHorizontal: 29 }}>
        <Text
          style={{
            fontSize: 40,
            color: "#000000",

            fontFamily: "JockeyOne-Regular",
          }}
        >
          Join to our
        </Text>
        <View style={{ paddingTop: 10 }}>
          <JoinNowImg />
        </View>
        <Text
          style={{
            textAlign: "center",
            color: "#000000",
            fontSize: 40,
            fontFamily: "JockeyOne-Regular",
          }}
        >
          Emission network
        </Text>

        <Text
          style={{
            textAlign: "center",
            paddingTop: 16,
            color: "#000000",
            fontSize: 24,
            fontFamily: "Poppins-Italic",
          }}
        >
          Start riding and
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#005725",
            fontSize: 24,
            fontFamily: "Poppins-Italic",
          }}
        >
          Save environment
        </Text>
        <Button
          color={"#00AE5A"}
          wrapperStyle={{
            borderRadius: 25,
            marginTop: 24,
            fonntSize: 20,
            marginBottom: 40,
            width: "100%",
          }}
          title="Join Now"
          onPress={handleSubmit}
          textStyles={{
            fontSize: 20,
            fontFamily: "Poppins-Medium",
            lineHeight: 30,
          }}
        />
      </View>
    </AuthScreenWrapper>
  );
}
