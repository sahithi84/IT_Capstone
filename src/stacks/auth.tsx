import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { EnterPhoneNumber, VerifyOTP } from "../screens";
import ChooseUs from "../screens/auth/ChooseUs";
import Affordable from "../screens/auth/Affordable";
import SafetyCertified from "../screens/auth/SafetyCertified";
import ReduceCarbon from "../screens/auth/ReduceCarbon";
import JoinNow from "../screens/auth/JoinNow";
import UserFeedback from "../screens/protected/UserFeedback";
import AddReferral from "../screens/auth/AddReferral";
import RegisterUserDetails from "../screens/auth/RegisterUserDetails";
const Stack = createStackNavigator();

export default function Auth({ route }: any) {
  const initialRouteName = route.params?.initialRouteName || "Splash";
  const loginData = route?.params?.data;

  return (
    <Stack.Navigator initialRouteName={`${initialRouteName}`}>
      <Stack.Screen
        name="RegisterUserDetails"
        component={RegisterUserDetails}
        initialParams={{ ...loginData }}
        options={{
          headerShown: false,
        }}
      />
      {/* ) : ( */}
      <Stack.Screen
        name="EnterPhoneNumber"
        component={EnterPhoneNumber}
        options={{
          headerShown: false,
        }}
      />
      {/* )} */}

      <Stack.Screen
        name="VerifyOTP"
        component={VerifyOTP}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AddReferral"
        component={AddReferral}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChooseUs"
        component={ChooseUs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Affordable"
        component={Affordable}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SafetyCertified"
        component={SafetyCertified}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReduceCarbon"
        component={ReduceCarbon}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="JoinNow"
        component={JoinNow}
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
    </Stack.Navigator>
  );
}
