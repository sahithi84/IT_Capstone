import EnterSourceDestination from "../screens/protected/EnterSourceDestination";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AboutScreen,
  AnimalScreen,
  BirdsScreen,
  Dashboard,
  EventScreen,
  GalleryScreen,
  GetInvolvedScreen,
  HabitatsCards,
  Menuscreen,
  RiverScreen,
  VehiclePickupAndDropLocationDashboard,
} from "../screens";
import EstimatedMoneyForVehicles from "../screens/protected/EstimatedMoneyForVehicles";
import { Favourite } from "../components/protected/UserProfile/Favourite";
import { AddFavouriteDriver } from "../components/protected/UserProfile/AddFavouriteDriver";
import { Referral } from "../components/protected/UserProfile/Referral";
import { Settings } from "../components/protected/UserProfile/Settings";
import { MyBookings } from "../components/protected/UserProfile/MyBookings";
import { Payment } from "../components/protected/UserProfile/Payment";
import { Profile } from "../components/protected/UserProfile/Profile";
import { History } from "../components/protected/UserProfile/History";
import { MyProfile } from "../components/protected/UserProfile/MyProfile";
import UserFeedback from "../screens/protected/UserFeedback";
import { Invoice } from "../components/protected/UserProfile/Invoice";
import LookingForDriver from "../components/LookingForDriver";
import ReferalCode from "../components/ReferalCode";
import { CancellationReason } from "../components/CancellationReason";

import PlantsScreen from "../screens/protected/PlantsScreen.tsx";

import SpeciesScreen from "../screens/protected/SpeciesScreen";
import DrawerLeftToRight from "../components/testingpurpose/DrawerLeftToRight";
import { BeautifulCard } from "../components";
const Stack = createStackNavigator();

export default function Protected() {
  return (
    <Stack.Navigator initialRouteName="EventScreen">
      <Stack.Screen
        name="DrawerScreens"
        component={DrawerLeftToRight}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SpeciesScreen"
        component={SpeciesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BirdsScreen"
        component={BirdsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RiverScreen"
        component={RiverScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HabitatsCards"
        component={HabitatsCards}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EventScreen"
        component={EventScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menuscreen"
        component={Menuscreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PlantsScreen"
        component={PlantsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AnimalScreen"
        component={AnimalScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GetInvolvedScreen"
        component={GetInvolvedScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BeautifulCard"
        component={BeautifulCard}
        options={{
          headerShown: false,
        }}
      />

      {/* <Stack.Screen
        name="EnterSourceDestination"
        component={EnterSourceDestination}
        options={{
          headerShown: false,
        }}
      /> */}

      <Stack.Screen
        name="VehiclePickupAndDropLocationDashboard"
        component={VehiclePickupAndDropLocationDashboard}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="EstimateMoneyForVehicles"
        component={EstimatedMoneyForVehicles}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Favourite"
        component={Favourite}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddFavouriteDriver"
        component={AddFavouriteDriver}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Referral"
        component={Referral}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyBookings"
        component={MyBookings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserFeedback"
        component={UserFeedback}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Invoice"
        component={Invoice}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LookingForDriver"
        component={LookingForDriver}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ReferalCode"
        component={ReferalCode}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CancellationReason"
        component={CancellationReason}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
