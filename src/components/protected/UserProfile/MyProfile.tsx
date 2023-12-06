import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { themes } from "../../../theme";
import ProtectedWrapper from "../../hoc/ProtectedWrapper";
import {
  BookingsBox,
  FavouriteBox,
  PaymentBox,
  ProfileBox,
  ReferalBox,
  SettingsIcon,
  UserProfilelogo,
  WhiteArrow,
} from "../../../svgs";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../../App";
import { useUserApis } from "../../../apis";
import { Profile } from "./Profile";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("screen");

const cardWidth = width / 3 - 38;

export function MyProfile() {
  const navigation = useNavigation();
  // @ts-ignore
  const { signOut } = React.useContext(AuthContext);
  const { getUserDetalils, data } = useUserApis();

  const handleLogout = async () => {
    await AsyncStorage.clear();
    await AsyncStorage.setItem("@is_user_logged_at_least_once", "true");

    // @ts-ignore
    navigation.replace("Auth", { screen: "EnterPhoneNumber" });
  };

  const handleGoBack = () => {
    // @ts-ignore
    navigation.canGoBack() ? navigation.pop() : null;
  };
  const handleGoFeedback = () => {
    /// @ts-ignore
    navigation.navigate("Protected", { screen: "UserFeedback" });
  };

  const handleProfile = () => {
    Profile();
  };
  const handleSettingsIcon = (Settings: any) => {
    // handleGoFeedback();
    // @ts-ignore
    navigation.navigate("Protected", {
      screen: "Settings",
    });
  };

  const handleSelectSettingOption = (userSettingOption: any) => {
    // handleGoFeedback();
    // @ts-ignore
    navigation.navigate("Protected", {
      screen: userSettingOption?.redirectTo,
    });
  };
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
    <ProtectedWrapper
      // @ts-ignore
      backgroundColor={"#263238"}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={handleGoBack} style={{ marginLeft: -15 }}>
          <WhiteArrow />
        </TouchableOpacity>
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
            My Bookings
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleSettingsIcon}>
            <SettingsIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center", paddingTop: 24 }}>
        <UserProfilelogo />
        <View>
          <Text
            style={{
              color: themes.colors.primary,
              ...themes.fontSizes.largeMedium,
              paddingTop: 6,
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
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {userSettings?.map((userSetting: any, index) => {
          return (
            <TouchableOpacity
              onPress={() => handleSelectSettingOption(userSetting)}
              key={index}
              style={{
                width: cardWidth,
                marginRight: 36,
              }}
            >
              {userSetting?.icon}
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ paddingHorizontal: 100 }}>
        <Text
          style={{
            color: "#00AE5A",
            ...themes.fontSizes.large,
            fontFamily: "Poppins-Medium",
            textAlign: "center",
            borderWidth: 2,
            borderColor: "#00AE5A",
            borderRadius: 30,
            padding: 10,
            marginBottom: 42,
            marginTop: 51,
            width: 166,
          }}
          onPress={handleLogout}
        >
          Logout
        </Text>
      </View>
    </ProtectedWrapper>
  );
}

const userSettings = [
  {
    icon: <ProfileBox />,
    redirectTo: "Profile",
  },
  { icon: <PaymentBox />, redirectTo: "Payment" },
  { icon: <BookingsBox />, redirectTo: "MyBookings" },
  // { icon: <Timer />, redirectTo: "History" },
  { icon: <ReferalBox />, redirectTo: "Referral" },
  // { icon: <FavouriteBox />, redirectTo: "AddFavouriteDriver" },
  // { icon: <ContactBox />, redirectTo: "" },
];
