import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import {
  CrossSymbol,
  Line,
  SettingsIcon,
  UserProfilelogo,
  Wallet,
  WhiteArrow,
  WhiteBackgroundPlus,
} from "../../../svgs";
import { themes } from "../../../theme";
import ProtectedWrapper from "../../hoc/ProtectedWrapper";
import { useUserApis } from "../../../apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useTheme } from "@react-navigation/native";
import { InputField } from "../../InputField";

export function Payment() {
  const { getStripePaymentIntent, data: getStripeSuccessResponse } =
    useUserApis();
  console.log("getstripe success resposnse is:", getStripeSuccessResponse);
  const navigation = useNavigation();
  const [amount, setAmount] = useState(0);

  const handleGoBack = () => {
    // @ts-ignore
    navigation.canGoBack() ? navigation.pop() : null;
  };

  const handleSettingsIcon = (Settings: any) => {
    // @ts-ignore
    navigation.navigate("Protected", {
      screen: "Settings",
    });
  };

  const handleWalletPayment = async () => {
    const userDetails = JSON.parse(
      // @ts-ignore
      await AsyncStorage.getItem("@user_details")
    );

    const payload = {
      user_id: userDetails.user_id,
      token: userDetails.token,
      user_unique_number: 10,
      payment_gateway_type: 13,
      amount: amount,
    };
    console.log("Payload:", payload);
    getStripePaymentIntent({ payload });
  };

  const { getUserDetalils, data } = useUserApis();
  useEffect(() => {
    const init = async () => {
      const userDetails = JSON.parse(
        // @ts-ignore
        await AsyncStorage.getItem("@user_details")
      );

      const payload = {
        user_id: userDetails?.user_id,
        token: userDetails?.token,
      };
      getUserDetalils({ payload });
    };
    init();
  }, []);

  return (
    <ProtectedWrapper backgroundColor={"#263238"}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <View>
          <TouchableOpacity onPress={handleGoBack} style={{ marginLeft: -15 }}>
            <WhiteArrow />
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 24 }}>
          <Text
            style={{
              color: themes.colors.primary,
              ...themes.fontSizes.medium,
              lineHeight: 21,
              fontFamily: "Poppins-Light",
              textAlign: "center",
            }}
          >
            My Profile
          </Text>
          <Text
            style={{
              color: themes.colors.background,
              ...themes.fontSizes.heading4,
              lineHeight: 34,
              fontFamily: "JockeyOne-Regular",
              textAlign: "center",
            }}
          >
            Payment
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleSettingsIcon}>
            <SettingsIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center", paddingTop: 25 }}>
        <UserProfilelogo />
        <View>
          <Text
            style={{
              color: themes.colors.primary,
              ...themes.fontSizes.largeMedium,
              lineHeight: 21,
              fontFamily: "Poppins-Medium",
              textAlign: "center",
            }}
          >
            {/* @ts-ignore */}
            {`${data?.first_name} `}
          </Text>
          <Text
            style={{
              color: themes.colors.background,
              ...themes.fontSizes.largeMedium,
              lineHeight: 21,
              fontFamily: "Poppins-Medium",
              textAlign: "center",
              paddingBottom: 29,
            }}
          >
            {/* @ts-ignore */}
            {`${data?.email} `}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          paddingHorizontal: 20,
          borderRadius: 30,
        }}
      >
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <CrossSymbol />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
              justifyContent: "space-around",
              paddingTop: 30,
            }}
          >
            <View
              style={{
                paddingBottom: 10,
              }}
            >
              <Wallet />
            </View>
            <Text
              style={{
                color: "#606060",
                ...themes.fontSizes.large,
                fontFamily: "Poppins-Light",
                textAlign: "center",
              }}
            >
              <InputField
                value={amount}
                style={styles.input}
                placeholderTextColor="#D9D9D9"
                placeholder="Enter  amount"
                onChangeText={(value: any) => setAmount(value)}
                maxLength={10}
                inputBoxContainerStyle={styles.inputBoxContainer}
                // @ts-ignore
                style={{
                  paddingVertical: 0,
                  ...themes.fontSizes.large,
                  fontFamily: "Poppins-Light",
                  height: 50,
                }}
              />
            </Text>
            <View>
              <TouchableHighlight onPress={handleWalletPayment}>
                <WhiteBackgroundPlus />
              </TouchableHighlight>
            </View>
          </View>
          <View>
            <Line />
          </View>
          <Text
            style={{
              color: "#606060",
              ...themes.fontSizes.large,
              fontFamily: "Poppins-Light",
              textAlign: "center",
              paddingTop: 150,
            }}
          >
            No card details to be displayed
          </Text>

          <View style={{ height: 100 }}></View>
        </View>
      </View>
    </ProtectedWrapper>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 12,
    color: "black",
    width: "100%",
    fontSize: 10,
  },
  inputBoxContainer: {
    paddingBottom: 10,
    borderRadius: 8,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: "red",
  },
  header: {
    fontSize: 32,
    fontWeight: "700",
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
