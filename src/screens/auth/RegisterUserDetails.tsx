/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  ActivityIndicator,
} from "react-native";
import { Button, InputField } from "../../components";
import { AuthContext } from "../../../App";
import AuthScreenWrapper from "../../components/hoc/AuthWrapper";
import { useTheme } from "../../theme";
import { OtpDisableArrowIcon, OtpEnableArrowIcon } from "../../svgs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAuthApis } from "../../apis/useAuthApis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function RegisterUserDetails({ route }: any) {
  const [payload, setPayload] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country_phone_code: "+91",
    phone: "",
    password: "",
    device_token: "",
    device_type: "",
    social_unique_id: "",
    login_by: "manual",
    device_timezone: "IST",
    country: "India",
    app_version: "1.0.2", // hardcoded
  });
  const [apiError, setApiError] = useState("");
  const {
    registerUser,
    data: registerResponse,
    loading: isRegistering,
  } = useAuthApis();

  const navigation = useNavigation();

  React.useEffect(() => {
    const init = async () => {
      // @ts-ignore
      if (registerResponse && registerResponse?.success === true) {
        // @ts-ignore
        if (registerResponse?.token) {
          // @ts-ignore
          await AsyncStorage.setItem("@access_token", registerResponse?.token);
          await AsyncStorage.setItem("@is_user_logged_at_least_once", "true");

          // @ts-ignore
          navigation.replace("Protected", { screen: "ReferalCode" });

          // @ts-ignore
          // dispatch({ type: "SIGN_IN", token: registerResponse?.token });
        }

        // @ts-ignore
        if (registerResponse?.user_detail) {
          await AsyncStorage.setItem(
            "@user_details", // @ts-ignore
            JSON.stringify(registerResponse?.user_detail || {})
          );
        } else {
          // @ts-ignore
          navigation.replace("Auth", {
            screen: "RegisterUserDetails",
            params: {
              phone: payload.phone,
            },
          });
          // @ts-ignore
          // dispatch({ type: "SIGN_IN", redirectTo: "RegisterUserDetails" });
        } // @ts-ignore
      } else if (registerResponse && registerResponse?.success === false) {
        // @ts-ignore
        if (registerResponse?.error_description === "invalid OTP") {
          setApiError("Invalid OTP");

          //@ts-ignore
          // dispatch({ type: "SIGN_IN", error: "Invalid OTP" }); // @ts-ignore
        } else if (registerResponse?.error_description) {
          //@ts-ignore
          setApiError(registerResponse?.error_description);
        }
      } else {
      }
    };
    init();
  }, [registerResponse]);

  useEffect(() => {
    setPayload((prevState) => ({
      ...prevState,
      phone: route?.params?.phone,
    }));
  }, [route?.params?.phone]);

  const handleSubmit = async () => {
    try {
      setApiError("");
      const finalPayload = {
        ...payload,
      };

      registerUser({ payload: finalPayload });
    } catch (error) {
      return error;
    }
  };

  const [isUserAcceptedTerms, setIsUserAcceptedTerms] = useState(false);

  const handleToggleCheckbox = () => {
    setIsUserAcceptedTerms((prevState) => !prevState);
  };

  const theme = useTheme();

  const handleChangeInput = (key: any, value: any) => {
    setPayload((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <AuthScreenWrapper
      childrenWrapperStyles={{
        paddingHorizontal: 19,
        paddingTop: 29,
      }}
      showBackArrowIcon={false}
    >
      <View
        style={{
          paddingTop: 27,
        }}
      >
        <Text
          // @ts-ignore
          style={{
            color: theme.colors.text,
            ...theme.fontSizes.largeMedium,
            lineHeight: 24,
            fontFamily: "Poppins-Light",
          }}
        >
          User Details
        </Text>

        <Text
          // @ts-ignore
          style={{
            color: theme.colors.text,
            ...theme.fontSizes.heading5,
            fontFamily: "JockeyOne-Regular",
          }}
        >
          Enter your information
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 7,
          paddingTop: 25,
          gap: 12,
        }}
      >
        <InputField
          value={payload?.first_name}
          style={styles.input}
          placeholderTextColor="#D9D9D9"
          placeholder="First Name"
          onChangeText={(value: any) => handleChangeInput("first_name", value)}
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
            ...theme.fontSizes.large,
            fontFamily: "Poppins-Light",
            height: 50,
          }}
          errorMessageStyle={styles.errorMessageStyle}
        />
        <InputField
          value={payload.last_name}
          style={styles.input}
          placeholderTextColor="#D9D9D9"
          placeholder="Last Name "
          onChangeText={(value: any) => handleChangeInput("last_name", value)}
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
            ...theme.fontSizes.large,
            fontFamily: "Poppins-Light",
            height: 50,
          }}
          errorMessageStyle={styles.errorMessageStyle}
        />
        <InputField
          value={payload?.email}
          style={styles.input}
          placeholderTextColor="#D9D9D9"
          placeholder="Email"
          onChangeText={(value: any) => handleChangeInput("email", value)}
          inputBoxContainerStyle={[
            styles.inputBoxContainer,
            // phoneError ? styles.inputError : null,
            // phone && phoneRegex.test(phone) ? styles.validInput : null,
          ]}
          // @ts-ignore
          // errorComponent={
          //   phoneError ? (
          //     <Text style={styles.errorText}>{phoneError}</Text>
          //   ) : null
          // }
          // @ts-ignore
          style={{
            paddingVertical: 0,
            ...theme.fontSizes.large,
            fontFamily: "Poppins-Light",
            height: 50,
          }}
          errorMessageStyle={styles.errorMessageStyle}
        />

        <InputField
          value={payload?.phone}
          leftIcon={<LeftIcon />}
          style={styles.input}
          placeholderTextColor="#D9D9D9"
          placeholder="Enter your mobile number"
          onChangeText={(value: any) => handleChangeInput("phone", value)}
          maxLength={10}
          keyboardType="numeric"
          inputBoxContainerStyle={[
            styles.inputBoxContainer,
            // phoneError ? styles.inputError : null,
            // phone && phoneRegex.test(phone) ? styles.validInput : null,
          ]}
          // @ts-ignore
          // errorComponent={
          //   phoneError ? (
          //     <Text style={styles.errorText}>{phoneError}</Text>
          //   ) : null
          // }
          // @ts-ignore
          style={{
            paddingVertical: 0,
            ...theme.fontSizes.large,
            fontFamily: "Poppins-Light",
            height: 50,
          }}
          errorMessageStyle={styles.errorMessageStyle}
          editable={false}
        />

        <View
          style={{
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            paddingTop: 24,
          }}
        >
          <TouchableOpacity
            onPress={handleToggleCheckbox}
            style={{
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 20,
                width: 20,
                borderWidth: 1,
                borderColor: "#D3D3D3",
                borderRadius: 3,
                backgroundColor: "white",
                padding: 2,
              }}
            >
              <View
                style={{
                  backgroundColor: isUserAcceptedTerms
                    ? "#00AE5A"
                    : "transparent",
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>

            <View>
              <Text
                // @ts-ignore
                style={{
                  color: theme.colors.text,
                  ...theme.fontSizes.small,
                  lineHeight: 21,
                  fontFamily: "Poppins-Light",
                }}
              >
                By creating an account, you are agreed to our{" "}
                <Text
                  style={{
                    color: theme.colors.text,
                    ...theme.fontSizes.small,
                    textAlign: "center",
                    lineHeight: 21,
                    fontFamily: "Poppins-Medium",
                    textDecorationLine: "underline",
                  }}
                  onPress={() => Linking.openURL("https://google.com")}
                >
                  Terms of Services{" "}
                </Text>
                and{" "}
                <Text
                  style={{
                    color: theme.colors.text,
                    ...theme.fontSizes.small,
                    textAlign: "center",
                    lineHeight: 21,
                    fontFamily: "Poppins-Medium",
                    textDecorationLine: "underline",
                  }}
                  onPress={() => Linking.openURL("https://google.com")}
                >
                  Privacy Policy
                </Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {apiError ? <Text style={styles.errorText}>{apiError}</Text> : null}

        <View style={{ paddingTop: 20, paddingHorizontal: 19 }}>
          <Button
            color={!isUserAcceptedTerms ? "#9a9a9a" : "#00AE5A"}
            wrapperStyle={{ marginBottom: 40, width: "100%", borderRadius: 29 }}
            title="Create Account"
            onPress={handleSubmit}
            textStyles={{
              ...theme.fontSizes.heading5,
              fontFamily: "Poppins-Medium",
              color: !isUserAcceptedTerms ? "#fafafa" : "white",
            }}
            processing={isRegistering}
            disabled={!isUserAcceptedTerms}
          />
        </View>
      </View>
    </AuthScreenWrapper>
  );
}

const LeftIcon = () => {
  const theme = useTheme();

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 17 }}>
      <Text
        style={{
          ...theme.fontSizes.large,
          fontFamily: "Poppins-Light",
          color: "#D9D9D9",
        }}
      >
        +91
      </Text>
      <View style={{ backgroundColor: "#D9D9D9", height: 39, width: 1 }} />
    </View>
  );
};

const RightIcon = ({
  phoneError = "",
  onSubmit = () => {},
  isApiLoading,
}: any) => {
  return (
    <View style={{ position: "absolute", right: 10 }}>
      <TouchableOpacity onPress={onSubmit}>
        {phoneError ? (
          <>{isApiLoading ? <ActivityIndicator /> : <OtpDisableArrowIcon />}</>
        ) : (
          <>{isApiLoading ? <ActivityIndicator /> : <OtpEnableArrowIcon />}</>
        )}
      </TouchableOpacity>
    </View>
  );
};

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
    elevation: 10,
    paddingVertical: 3,
    borderRadius: 8,
    fontSize: 16,
    height: 50,
    paddingHorizontal: 10,
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
