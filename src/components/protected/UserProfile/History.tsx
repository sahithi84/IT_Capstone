import { View, Text } from "react-native";
import React, { useEffect } from "react";
import ProtectedWrapper from "../../hoc/ProtectedWrapper";
import {
  CrossSymbol,
  Distance,
  SettingsIcon,
  UserProfilelogo,
  WhiteArrow,
} from "../../../svgs";
import { themes } from "../../../theme";
import { useUserApis } from "../../../apis";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function History() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.canGoBack() ? navigation.pop() : null;
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
          <TouchableOpacity onPress={handleGoBack}>
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
            History
          </Text>
        </View>
        <View>
          <SettingsIcon />
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
          <View>
            <Distance />
          </View>
          <Text
            style={{
              color: "#000000",
              ...themes.fontSizes.large,
              fontFamily: "Poppins-Light",
              textAlign: "center",
            }}
          >
            Vasavi Jr college
          </Text>
          <Text
            style={{
              color: "#D1D5DB",
              ...themes.fontSizes.small,
              fontFamily: "Poppins-Light",
              textAlign: "center",
            }}
          >
            Gajularamam, Kukatpally
          </Text>
          <Text
            style={{
              color: "#D1D5DB",
              ...themes.fontSizes.small,
              fontFamily: "Poppins-Light",
              textAlign: "center",
            }}
          >
            Hyderabad
          </Text>
          <Text
            style={{
              color: "#00AE5A",
              ...themes.fontSizes.large,
              fontFamily: "Poppins-Medium",
              textAlign: "center",
            }}
          >
            560.45
          </Text>
        </View>
        <View>
          <Distance />
        </View>
        <Text
          style={{
            color: "#000000",
            ...themes.fontSizes.large,
            fontFamily: "Poppins-Light",
            textAlign: "center",
          }}
        >
          DLF Building
        </Text>
        <Text
          style={{
            color: "#D1D5DB",
            ...themes.fontSizes.small,
            fontFamily: "Poppins-Light",
            textAlign: "center",
          }}
        >
          Gacchibowli, Nanakramaguda
        </Text>
        <Text
          style={{
            color: "#D1D5DB",
            ...themes.fontSizes.small,
            fontFamily: "Poppins-Light",
            textAlign: "center",
          }}
        >
          Hyderabad
        </Text>
        <Text
          style={{
            color: "#00AE5A",
            ...themes.fontSizes.large,
            fontFamily: "Poppins-Medium",
            textAlign: "center",
          }}
        >
          1260.45
        </Text>
        <View>
          <View>
            <Distance />
          </View>
          <Text
            style={{
              color: "#000000",
              ...themes.fontSizes.large,
              fontFamily: "Poppins-Light",
              textAlign: "center",
            }}
          >
            Vasavi Jr college
          </Text>
          <Text
            style={{
              color: "#D1D5DB",
              ...themes.fontSizes.small,
              fontFamily: "Poppins-Light",
              textAlign: "center",
            }}
          >
            Gajularamam, Kukatpally
          </Text>
          <Text
            style={{
              color: "#D1D5DB",
              ...themes.fontSizes.small,
              fontFamily: "Poppins-Light",
              textAlign: "center",
            }}
          >
            Hyderabad
          </Text>
          <Text
            style={{
              color: "#00AE5A",
              ...themes.fontSizes.large,
              fontFamily: "Poppins-Medium",
              textAlign: "center",
            }}
          >
            560.45
          </Text>
        </View>

        <View style={{ height: 100 }}></View>
      </View>
    </ProtectedWrapper>
  );
}
