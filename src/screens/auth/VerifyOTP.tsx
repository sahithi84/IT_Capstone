/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { InputField } from "../../components";
import AuthScreenWrapper from "../../components/hoc/AuthWrapper";
import { useTheme } from "../../theme";
import {
  BlackColorCar,
  InsideBoxCarImg,
  OtpDisableArrowIcon,
  OtpEnableArrowIcon,
} from "../../svgs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthApis } from "../../apis/useAuthApis";
import { ResendOtpTimer } from "./ResendOTPTimer";

export default function VerifyOTP({ route }: any) {
  const phone = route?.params?.phone;
  const phoneCode = route?.params?.country_phone_code;
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [apiError, setApiError] = useState("");
  const [showWhiteCar, setShowWhiteCar] = useState(false);

  const {
    verifyOtp,
    data: otpResponse,
    loading: isOtpVerifying,
  } = useAuthApis();

  React.useEffect(() => {
    const init = async () => {
      // @ts-ignore
      if (otpResponse && otpResponse?.success === true) {
        // @ts-ignore
        if (otpResponse?.token) {
          // @ts-ignore
          await AsyncStorage.setItem("@access_token", otpResponse?.token);
          await AsyncStorage.setItem("@is_user_logged_at_least_once", "true");

          // @ts-ignore
          navigation.replace("Protected", { screen: "Dashboard" });

          // @ts-ignore
          // dispatch({ type: "SIGN_IN", token: otpResponse?.token });
        }

        // @ts-ignore
        if (otpResponse?.user_detail) {
          await AsyncStorage.setItem(
            "@user_details", // @ts-ignore
            JSON.stringify(otpResponse?.user_detail || {})
          );
        } else {
          // @ts-ignore
          navigation.replace("Auth", {
            screen: "RegisterUserDetails",
            params: {
              phone: phone,
            },
          });
          // @ts-ignore
          // dispatch({ type: "SIGN_IN", redirectTo: "RegisterUserDetails" });
        } // @ts-ignore
      } else if (otpResponse && otpResponse?.success === false) {
        // @ts-ignore
        if (otpResponse?.error_description === "invalid OTP") {
          setOtpError("Invalid OTP");

          //@ts-ignore
          // dispatch({ type: "SIGN_IN", error: "Invalid OTP" }); // @ts-ignore
        } else if (otpResponse?.error_description) {
          //@ts-ignore
          setOtpError(otpResponse?.error_description);
        }
      } else {
      }
    };
    init();
  }, [otpResponse]);

  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    if (otp?.length > 0) {
      setShowWhiteCar(true);
    } else {
      setShowWhiteCar(false);
    }
  }, [otp]);

  const handleSubmit = async () => {
    try {
      setApiError("");

      if (!otp) {
        setOtpError("Enter Otp");
        return;
      }

      if (otp) {
        const payload = {
          country_phone_code: phoneCode,
          phone: phone,
          password: otp,
        };

        verifyOtp({ payload });
      }
    } catch (error) {
      return error;
    }
  };

  // const handleResendOTP = async () => {
  // 	try {
  // 		console.log("form.value for resend otp", form.value);
  // 		form.setField("token", "");
  // 		form.setErrors({ token: "" });
  // 		const payload = {
  // 			type: form.value.type,
  // 			value: form.value.value,
  // 		};
  // 		console.log("payload for resend otp -login", payload);
  // 		const updateAttributeResponse = await updateAttribute(payload);
  // 		console.log("response", JSON.stringify(updateAttributeResponse, null, 2));
  // 		setLabeltext(null);
  // 		// const resendOTPAttributeResponse = await requestVerifyAttribute(payload);
  // 		// console.log(
  // 		//   'response',
  // 		//   JSON.stringify(resendOTPAttributeResponse, null, 2),
  // 		// );
  // 		return true;
  // 	} catch (error) {
  // 		if (error?.message === "Invalid Token") {
  // 			form.setErrors({ token: "Invalid OTP" });
  // 		} else if (error?.value?.[0] === "Value should be unique") {
  // 			form.setErrors({
  // 				token:
  // 					"Email id already used by other account, Please try with another Email id.",
  // 			});
  // 		} else {
  // 			form.setErrors(error);
  // 			setfailedStatus(failedStatus + 1);
  // 			setLabeltext(
  // 				"We are experiencing some issues in the network. Please retry",
  // 			);
  // 			return true;
  // 		}
  // 	}
  // };

  return (
    <AuthScreenWrapper
      childrenWrapperStyles={{
        paddingTop: 29,
        backgroundColor: "#00AE5A",
        paddingBottom: 0,
      }}
      backArrowIconWrapperStyle={{
        paddingHorizontal: 19,
      }}
      showBackArrowIcon={true}
    >
      <View
        style={{
          alignItems: "center",
          position: "relative",
          paddingVertical: 42,
          paddingHorizontal: 19,
        }}
      >
        {showWhiteCar ? <InsideBoxCarImg /> : <BlackColorCar />}
      </View>

      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          paddingHorizontal: 19,
          // paddingBottom: 300,
        }}
      >
        <Text
          // @ts-ignore
          style={{
            color: theme.colors.text,
            ...theme.fontSizes.largeMedium,
            lineHeight: 21,
            fontFamily: "Poppins-Light",
            paddingTop: 42,
          }}
        >
          Phone verification
        </Text>

        <Text
          // @ts-ignore
          style={{
            color: theme.colors.text,
            ...theme.fontSizes.heading5,
            lineHeight: 21,
            fontFamily: "JockeyOne-Regular",
          }}
        >
          Enter your OTP code below
        </Text>

        <View style={{ paddingTop: 26 }}>
          <InputField
            value={otp}
            // leftIcon={<LeftIcon />}
            rightIcon={
              <RightIcon
                onSubmit={handleSubmit}
                otpError={otpError}
                isApiCalling={isOtpVerifying}
              />
            }
            style={styles?.input}
            placeholderTextColor="#D9D9D9"
            placeholder="_ _ _ _ _ _"
            onChangeText={(text: string) => {
              setOtp(text);
              setOtpError("");
            }}
            maxLength={6}
            keyboardType="numeric"
            inputBoxContainerStyle={[
              styles.inputBoxContainer,
              otpError ? styles.inputError : null,
              // otp && otpRegex.test(otp) ? styles.validInput : null,
            ]}
            // @ts-ignore
            errorComponent={
              otpError ? <Text style={styles.errorText}>{otpError}</Text> : null
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
          {apiError ? <Text style={styles.errorText}>{apiError}</Text> : null}

          {/* {failedStatus < 2 && (
					<ResendOTPTimer
						wrapperStyles={{ paddingTop: 32 }}
						callBack={() => handleResendOTP()}
						label={labeltext}
						disable={disableResend}
					/>
				)} */}
        </View>
      </View>
    </AuthScreenWrapper>
  );
}

const RightIcon = ({
  otpError = "",
  onSubmit = () => {},
  isApiCalling,
}: any) => {
  return (
    <View style={{ position: "absolute", right: 10 }}>
      <TouchableOpacity onPress={onSubmit}>
        {otpError ? (
          <>{isApiCalling ? <ActivityIndicator /> : <OtpDisableArrowIcon />}</>
        ) : (
          <>{isApiCalling ? <ActivityIndicator /> : <OtpEnableArrowIcon />}</>
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
