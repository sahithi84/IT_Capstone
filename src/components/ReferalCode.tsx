import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Arrow, Code } from "../svgs";
import ProtectedWrapper from "./hoc/ProtectedWrapper";
import { themes } from "../theme/index";
import { InputField } from "./InputField";
import { useUserApis } from "../apis";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "./Button";

export default function ReferalCode() {
  const navigation = useNavigation();
  const [referralCode, setReferralCode] = useState("");
  const {
    applyReferalCode,
    data: applyReferalcodeResponse,
    loading: isReferralApplying,
  } = useUserApis();

  const handleReferalcode = () => {
    const init = async () => {
      const userDetails = JSON.parse(
        // @ts-ignore
        await AsyncStorage.getItem("@user_details")
      );

      const payload = {
        user_id: userDetails?.user_id,
        token: userDetails?.token,
        referral_code: userDetails.referral_code,
        is_skip: userDetails.is_skip,
      };
      applyReferalCode({ payload });
    };
    init();
  };

  useEffect(() => {
    if (
      applyReferalcodeResponse && // @ts-ignore
      applyReferalcodeResponse?.success === true
    ) {
      // @ts-ignore
      navigation.replace("Protected", { screen: "Dashboard" });
    } else if (
      applyReferalcodeResponse &&
      // @ts-ignore
      applyReferalcodeResponse?.success === false
    ) {
      Alert.alert("Error Message", "Something went wrong, please try again");
    }
  }, [applyReferalcodeResponse]);

  return (
    <ProtectedWrapper>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        <View>
          <Arrow />
        </View>
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            fontFamily: "Poppins-Light",
            fontSize: 16,
            lineHeight: 18,
            paddingLeft: 100,
            color: "#000000",
          }}
        >
          Referal{" "}
        </Text>
      </View>
      <Text
        style={{
          textAlign: "center",
          justifyContent: "center",
          fontFamily: "JockeyOne-Regular",
          fontSize: 24,
          color: "#000000",
          lineHeight: 28,
        }}
      >
        Enter Referral Code
      </Text>
      <View
        style={{
          alignItems: "center",
          padding: 30,
        }}
      >
        <Code />
      </View>
      <View>
        <InputField
          style={styles.input}
          placeholderTextColor="#D9D9D9"
          value={referralCode}
          placeholder="Enter Referral code"
          onChangeText={(value: any) => setReferralCode(value)}
          maxLength={10}
          inputBoxContainerStyle={[styles.inputBoxContainer]}
          // @ts-ignore
          // errorComponent={
          //   phoneError ? (
          //     <Text style={styles.errorText}>{phoneError}</Text>
          //   ) : null
          // }
          // @ts-ignore
          style={{
            paddingVertical: 0,
            // ...theme.fontSizes.large,
            ...themes.fontSizes.large,
            fontFamily: "Poppins-Light",
            height: 50,
          }}
          errorMessageStyle={styles.errorMessageStyle}
        />

        <Text
          style={{
            fontFamily: "Poppins-Light",
            fontSize: 12,
            lineHeight: 18,
            color: "#5B5B5B",
            textAlign: "center",
            padding: 40,
          }}
        >
          You can add a referral code provided by your friend here to get free
          credits. If you do not have one or do not want to insert one, then
          just click on skip button below.
        </Text>
      </View>
      <View style={{ paddingHorizontal: 60 }}>
        <Button
          color={"#00AE5A"}
          wrapperStyle={{
            borderRadius: 29,
            paddingHorizontal: 36,
            marginTop: 24,
          }}
          title="Submit"
          // @ts-ignore
          onPress={handleReferalcode}
          textStyles={{
            ...themes.fontSizes.heading5,
            fontFamily: "Poppins-Medium",
          }}
          processing={isReferralApplying}
          disabled={referralCode?.length === 0}
        />

        <TouchableOpacity
          onPress={() => {
            // @ts-ignore
            navigation.replace("Protected", { screen: "Dashboard" });
          }}
          style={{ paddingTop: 24 }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              color: "#959595",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </ProtectedWrapper>
  );
}
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 12,
    color: "black",
    width: "100%",
    fontSize: 16,
    fontFamily: "Poppins-Light",
    height: 50,
  },
  inputBoxContainer: {
    // elevation: 10,
    // paddingVertical: 3,
    borderRadius: 8,
    fontSize: 16,
    height: 50,
    marginHorizontal: 30,
    // paddingHorizontal: 10,
  },
  inputError: {
    borderColor: "red",
  },
  header: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 24,
    color: "black",
    textAlign: "center",
  },
  errorMessageStyle: {
    marginTop: 8,
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  validInput: {
    borderColor: "green",
  },
});
