/* eslint-disable react/no-unstable-nested-components */
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Map, SideBar } from "../../../components";
import { useTheme } from "../../../theme";
import { OtpTripContextProvider, useWithOtpTrip } from "../../../contexts";
import { EstimatedMoneyForVehicles } from "../../../components/protected/EstimatedMoneyForVehicles/Header";
import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import { useSocketWithoutNavigation } from "../../../hooks/createTripWithOTP/useSocket";
import { observer } from "mobx-react-lite";
import { createTripFormStore } from "../../../mobx/withOtpTripStates";
import { useSelector } from "react-redux";
import { useCurrentLocation } from "../../../hooks/location/useCurrentLocation";

// import firebase from "@react-native-firebase/messaging";
// console.log("🚀 ~ file: App.tsx:18 ~ firebase:", firebase);

// const getDeviceId = async () => {
//   const fcmToken = await firebase.messaging().getToken();
//   if (fcmToken) {
//     // user has a device token
//   } else {
//     // user doesn't have a device token yet
//   }
// };

const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator
      screenOptions={{
        drawerPosition: "left",
        headerShown: false,
        swipeEnabled: false,
      }}
      drawerContent={(props: any) => {
        return <SideBar {...props} />;
      }}
      id="LeftDrawer"
    >
      <LeftDrawer.Screen name="Home" component={Dashboard} />
    </LeftDrawer.Navigator>
  );
};

const RightDrawer = createDrawerNavigator();

const RightDrawerScreen = () => {
  // getDeviceId();
  return (
    <RightDrawer.Navigator
      drawerContent={(props: any) => {
        return <EstimatedMoneyForVehicles {...props} />;
      }}
      id="RightDrawer"
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerStyle: {
          width: "80%",
          backgroundColor: "red",
        },
        swipeEnabled: false,
      }}
    >
      <RightDrawer.Screen name="CreateTripForm" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
};

export default function DashboardWithDrawer({ navigation, route }: any) {
  const openTripEditForm = route?.params?.openTripEditForm;
  useCurrentLocation();

  React.useEffect(() => {
    if (openTripEditForm) {
      // @ts-ignore
      navigation?.getParent("RightDrawer")?.openDrawer();
    }
  }, [openTripEditForm]);
  return (
    <OtpTripContextProvider>
      <RightDrawerScreen />
    </OtpTripContextProvider>
  );
}

const Dashboard = ({ navigation }: any) => {
  const theme = useTheme();

  return (
    <ProtectedWrapper style={{ backgroundColor: theme.colors.primary }}>
      <RenderMap navigation={navigation} />
    </ProtectedWrapper>
  );
};

const RenderMap = observer(({ navigation }: any) => {
  const { formData } = createTripFormStore;

  return (
    <>
      <View style={styles.mapStyle}>
        <Map
          origin={{
            latitude: formData?.latitude || 17.4243932,
            longitude: formData?.longitude || 78.44101909999999,
          }}
          destination={{
            latitude: formData?.d_latitude || formData?.latitude || 17.4243932,
            longitude:
              formData?.d_longitude || formData?.longitude || 78.44101909999999,
          }}
          navigation={navigation}
          drawerId={"RightDrawer"}
        />
      </View>
    </>
  );
});
const styles = StyleSheet.create({
  menuStyle: {
    marginLeft: 12,
    zIndex: 11,
    paddingTop: 24,
    flexDirection: "row",
    width: "100%",
    gap: 12,
  },
  mapStyle: {
    height: "100%",
  },
});
