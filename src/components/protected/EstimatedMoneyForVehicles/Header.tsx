import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Arrow, ProfileIcon } from "../../../svgs";
import { themes } from "../../../theme";
import { useNavigation } from "@react-navigation/native";
import { useUserApis } from "../../../apis";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function EstimatedMoneyForVehicles() {
  const { getUserDetalils, data } = useUserApis();
  const navigation = useNavigation();

  const handleGoBack = () => {
    // @ts-ignore
    navigation.canGoBack() ? navigation.pop() : null;
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
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <View>
        <Text
          style={{
            color: "black",
            fontFamily: "Poppins",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "Poppins",
            }}
          >
            Welcome{" "}
          </Text>

          <Text
            style={{
              color: "#00AE5A",
              fontFamily: "Poppins",
            }}
          >
            {`${data?.first_name} `}
          </Text>
        </Text>
        <Text
          style={{
            color: "black",
            fontFamily: "JockeyOne-Regular",
            lineHeight: 34,
            textAlign: "center",
            fontSize: 24,
          }}
        >
          Where are you going?
        </Text>
      </View>
      <View style={{ left: 14 }}>
        <ProfileIcon />
      </View>
    </View>
  );
}
