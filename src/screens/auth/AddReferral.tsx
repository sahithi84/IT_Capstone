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
import { authErrors } from "../../constants/auth";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "../../theme";
import {
  // Arrow,
  // CarMoneyAnime2,
  // CloseIcon,
  // FaceBookIcon,
  GetMovingWithOhmImg,
  // GoogleIcon,
  GradientForCar,
  OtpDisableArrowIcon,
  OtpEnableArrowIcon,
} from "../../svgs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAuthApis } from "../../apis/useAuthApis";
import { useNavigation } from "@react-navigation/native";

const phoneCode = "+91";

export default function AddReferral() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [apiError, setApiError] = useState("");
  const [isApiCalling, setIsApiCalling] = useState(false);
  const navigation = useNavigation();
  const { getOtp, data: otpResponse, loading } = useAuthApis();

  const phoneRegex = /^[0-9]{10}$/;

  const handleSubmit = async () => {
    try {
      setIsApiCalling(true);
      setApiError("");
      setPhoneError("");

      if (!phone) {
        setPhoneError("Enter Mobile Number");
        setIsApiCalling(false);
        return;
      }

      if (phone && !phoneRegex.test(phone)) {
        setPhoneError("Enter Valid Mobile Number");
        setIsApiCalling(false);
        return;
      }

      if (phone) {
        const payload = {
          country_phone_code: phoneCode,
          phone: phone,
        };
        await getOtp({ payload });

        setIsApiCalling(false);
      }
    } catch (error) {
      setPhoneError("");
      setIsApiCalling(false);
    }
  };

  useEffect(() => {
    if (otpResponse) {
      // @ts-ignore
      if (otpResponse?.success === false) {
        // @ts-ignore
        if (otpResponse?.error_code === "403") {
          //@ts-ignore
          setPhoneError("Phone Number is not Registered yet");
          setIsApiCalling(false);
        }
      } else {
        // @ts-ignore
        navigation.navigate("Auth", {
          screen: "VerifyOTP",
          params: {
            phone: phone,
            country_phone_code: phoneCode,
          },
        });
        setIsApiCalling(false);
      }
    }
  }, [otpResponse]);

  const theme = useTheme();

  return (
    <AuthScreenWrapper
      childrenWrapperStyles={{
        paddingHorizontal: 19,
        paddingTop: 29,
      }}
      showBackArrowIcon={true}
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
            ...theme.fontSizes.large,
            lineHeight: 24,
            fontFamily: "Poppins-Light",
          }}
        >
          Hello nice to meet you
        </Text>

        <Text
          // @ts-ignore
          style={{
            color: theme.colors.text,
            fontSize: 36,
            lineHeight: 51,
            fontFamily: "JockeyOne-Regular",
          }}
        >
          Get moving with OHM
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          position: "relative",
          paddingVertical: 42,
          paddingHorizontal: 19,
          transform: [{ scale: 0.9 }],
        }}
      >
        <View
          style={{
            zIndex: -1,
            position: "absolute",
            top: -70,
            transform: [{ scale: 0.75 }],
          }}
        >
          <GradientForCar />
        </View>
        <GetMovingWithOhmImg />
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 7,
        }}
      >
        {/* <Text style={styles.header}>LOGIN</Text> */}
        <InputField
          value={phone}
          leftIcon={<LeftIcon />}
          rightIcon={
            <RightIcon
              onSubmit={handleSubmit}
              phoneError={phoneError}
              isApiLoading={loading}
            />
          }
          style={styles.input}
          placeholderTextColor="#D9D9D9"
          placeholder="Enter you mobile number"
          onChangeText={(text: string) => {
            setPhone(text);
            setPhoneError("");
          }}
          maxLength={10}
          keyboardType="numeric"
          inputBoxContainerStyle={[
            styles.inputBoxContainer,
            phoneError ? styles.inputError : null,
            phone && phoneRegex.test(phone) ? styles.validInput : null,
          ]}
          // @ts-ignore
          errorComponent={
            phoneError ? (
              <Text style={styles.errorText}>{phoneError}</Text>
            ) : null
          }
          // @ts-ignore
          style={{
            paddingVertical: 0,
            ...theme.fontSizes.large,
            fontFamily: "Poppins-Light",
            height: 50,
          }}
          errorMessageStyle={styles.errorMessageStyle}
        />

        <Text
          // @ts-ignore
          style={{
            color: theme.colors.text,
            ...theme.fontSizes.largeMedium,
            textAlign: "center",
            lineHeight: 21,
            fontFamily: "Poppins-Light",
            paddingTop: 42,
          }}
        >
          By creating an account, you are agreed to our{" "}
          <Text
            style={{
              color: theme.colors.text,
              ...theme.fontSizes.largeMedium,
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
              ...theme.fontSizes.largeMedium,
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

        {apiError ? <Text style={styles.errorText}>{apiError}</Text> : null}

        {/* <View
          style={{
            flexDirection: "row",
            gap: 19,
            justifyContent: "space-between",
            paddingTop: 40,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              paddingHorizontal: 57,
              maxWidth: 130,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 29,
              alignItems: "center",
              paddingVertical: 16,
            }}
          >
            <GoogleIcon />
          </TouchableOpacity>

          <View style={{ backgroundColor: "#D9D9D9", height: 39, width: 1 }} />

          <TouchableOpacity
            onPress={() => {}}
            style={{
              paddingHorizontal: 57,
              maxWidth: 130,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 29,
              alignItems: "center",
              paddingVertical: 16,
            }}
          >
            <FaceBookIcon />
          </TouchableOpacity>
        </View> */}
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
    fontSize: 12,
  },
  inputBoxContainer: {
    elevation: 10,
    paddingVertical: 3,
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
