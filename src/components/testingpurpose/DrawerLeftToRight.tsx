import * as React from "react";
import { Button, View, StyleSheet, ImageBackground, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  AboutScreen,
  Dashboard,
  GalleryScreen,
  Menuscreen,
} from "../../screens";
import { AddFavouriteDriver } from "../protected/UserProfile/AddFavouriteDriver";
import SpeciesScreen from "../../screens/protected/SpeciesScreen";
import ProtectedWrapper from "../hoc/ProtectedWrapper";
import { Protected } from "../../stacks";

export default function DrawerLeftToRight() {
  const Drawer = createDrawerNavigator();
  return (
    <ProtectedWrapper style={styles.container}>
      <Drawer.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          activeTintColor: "#0080ff",

          inactiveTintColor: "#333",
          itemStyle: { marginVertical: 50 },
        }}
      >
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Find Location" component={Dashboard} />
        <Drawer.Screen name="Gallery" component={AddFavouriteDriver} />
        {/* <Drawer.Screen name="Local Biodiversity" component={SpeciesScreen} /> */}

        {/* <Drawer.Screen name="Events" component={} />
          <Drawer.Screen name="GetInvolved" component={} />
          <Drawer.Screen name="Observations" component={} /> */}
      </Drawer.Navigator>
    </ProtectedWrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "red",
    alignItems: "center",
    backgroundColor: "red",
  },
});
