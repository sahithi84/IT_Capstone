import { Alert, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProtectedWrapper from "../../hoc/ProtectedWrapper";
import { useUserApis } from "../../../apis";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { errorMessages } from "../../../utils/errorMessages";
import { pushToDiscord } from "../../../utils/pushToDiscord";
import { AuthContext } from "../../../../App";
import { ProfileUI } from "./ProfileUI";
import { themes } from "../../../theme";
import { SettingsIcon, UserProfilelogo, WhiteArrow } from "../../../svgs";

export function Profile() {
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
    app_version: "1.0.2",
  });
  const navigation = useNavigation();

  const handleGoBack = () => {
    // @ts-ignore
    navigation.canGoBack() ? navigation.pop() : null;
  };
  const handleSettingsIcon = () => {
    // @ts-ignore
    navigation.navigate("Protected", {
      screen: "Settings",
    });
  };
  const { getUserDetalils, data: prefillableUserData } = useUserApis();

  useEffect(() => {
    if (prefillableUserData) {
      setPayload({
        ...payload,
        // @ts-ignore
        first_name: prefillableUserData?.first_name,
        // @ts-ignore
        last_name: prefillableUserData?.last_name,
        // @ts-ignore
        email: prefillableUserData?.email,
        // @ts-ignore
        phone: prefillableUserData?.phone,
      });
    }
  }, [prefillableUserData]);

  const { updatedUserProfile, data: updateUserProfile } = useUserApis();

  useEffect(() => {
    // @ts-ignore
    if (updateUserProfile && updateUserProfile?.success === true) {
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
    }
  }, [updateUserProfile]);

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

  useEffect(() => {
    // @ts-ignore
    if (updateUserProfile && updateUserProfile.success === true) {
      Alert.alert("Profile Status", "Your account details updated Succesfully"); // @ts-ignore
    } else if (updateUserProfile && updateUserProfile.success === false) {
      Alert.alert(
        "Profile Status",
        "Update account details failed, please try again later"
      );
    }
  }, [updateUserProfile]);

  const {
    deleteUserAccount,
    data: deleteUserAccountResponse,
    loading: isAccountDeleting,
  } = useUserApis();

  const handleUpdateAccount = async () => {
    const userDetails = JSON.parse(
      // @ts-ignore
      await AsyncStorage.getItem("@user_details")
    );

    const updateAccountPayload = {
      user_id: userDetails?.user_id,
      token: userDetails?.token,
      first_name: payload?.first_name,
      last_name: payload?.last_name,
      phone: payload?.phone,
      email: payload?.email,
      new_password: "",
      old_password: "",
      country_phone_code: "+91",
      social_id: "",
    };

    pushToDiscord({
      fieldName: "update account payload",
      discordData: updateAccountPayload,
    });
    updatedUserProfile({ payload: updateAccountPayload });
  };

  const handleDeleteAccount = async () => {
    const userDetails = JSON.parse(
      // @ts-ignore
      await AsyncStorage.getItem("@user_details")
    );

    const payload = {
      user_id: userDetails?.user_id,
      token: userDetails?.token,
      password: "",
      social_id: "",
    };

    pushToDiscord({
      fieldName: "delete account payload",
      discordData: payload,
    });

    deleteUserAccount({ payload });
  };

  useEffect(() => {
    const deleteEverything = async () => {
      if (
        deleteUserAccountResponse && // @ts-ignore
        deleteUserAccountResponse.success === true
      ) {
        await AsyncStorage.clear();
        await AsyncStorage.setItem("@is_user_logged_at_least_once", "true");

        // @ts-ignore
        navigation.replace("Auth", { screen: "EnterPhoneNumber" });
      } else {
        if (
          deleteUserAccountResponse && // @ts-ignore
          deleteUserAccountResponse.success === false
        ) {
          // @ts-ignore
          Alert.alert(errorMessages[deleteUserAccountResponse?.error_code]);
        }
      }
    };
    deleteEverything();
  }, [deleteUserAccountResponse]);

  const handleChangeInput = (key: any, value: any) => {
    setPayload((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
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
          <TouchableOpacity onPress={handleGoBack} style={{ marginLeft: -27 }}>
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
            Profile
          </Text>
        </View>
        <View>
          {/* @ts-ignore */}
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
              paddingTop: 12,
            }}
          >
            {/* @ts-ignore */}
            {`${prefillableUserData?.first_name} ${prefillableUserData?.last_name} `}
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
            {`${prefillableUserData?.email} `}
          </Text>
        </View>
      </View>
      <ProfileUI
        payload={payload}
        handleChangeInput={handleChangeInput}
        handleGoBack={handleGoBack}
        handleSettingsIcon={handleSettingsIcon}
        handleDeleteAccount={handleDeleteAccount}
        handleUpdateAccount={handleUpdateAccount}
        prefillableUserData={prefillableUserData}
        isAccountDeleting={isAccountDeleting}
      />
    </ProtectedWrapper>
  );
}
