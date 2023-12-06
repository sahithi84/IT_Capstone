/* eslint-disable react/no-unstable-nested-components */
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { observer } from "mobx-react-lite";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Map, SideBar } from "../../../components";
import { useTheme } from "../../../theme";
import { OtpTripContextProvider, useWithOtpTrip } from "../../../contexts";
import { EstimatedMoneyForVehicles } from "../../../components/protected/EstimatedMoneyForVehicles/Header";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

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

const RightDrawerScreen = observer(() => {
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
});

export default function DashboardWithDrawer({ navigation, route }: any) {
  const openTripEditForm = route?.params?.openTripEditForm;

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
    <View style={{ backgroundColor: theme.colors.primary }}>
      <RenderMap navigation={navigation} />
    </View>
  );
};

const RenderMap = observer(({ navigation }: any) => {
  const { formData } = useWithOtpTrip();

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
          requestTripType={"with_otp"}
          navigation={navigation}
          drawerId={"RightDrawer"}
          // showVehicleTab={true}
          showBothPickupAndDropInputBoxes={true}
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
