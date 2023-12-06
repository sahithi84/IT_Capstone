/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { LogBox, PermissionsAndroid, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { Auth, Protected } from "./src/stacks";
import { navigationRef } from "./src/utils/rootNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { enableLatestRenderer } from "react-native-maps";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import { ThemeProvider, withTheme } from "./src/theme";
import Splash from "./src/screens/auth/Splash";
import { OtpTripContextProvider } from "./src/contexts";
import { Protected } from "./src/stacks";
import Geolocation from "@react-native-community/geolocation";

// import firebase from "@react-native-firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyDpyrquihrDrnL9Foef4jw5wUuQO9MuqTw",
//   authDomain: "ohm-electric-cabs.firebaseapp.com",
//   projectId: "ohm-electric-cabs",
//   storageBucket: "ohm-electric-cabs.appspot.com",
//   messagingSenderId: "675289058420",
//   appId: "",
// };

// if (!firebase?.apps?.length) {
//   console.log("🚀 ~ file: index.js:13 ~ firebase:", firebase.apps);
//   firebase.initializeApp(firebaseConfig);
// }

const config: any = {
  skipPermissionRequests: false,
  authorizationLevel: "auto",
  enableBackgroundLocationUpdates: true,
  locationProvider: "playServices",
};

Geolocation.setRNConfiguration(config);

// @ts-ignore
navigator.geolocation = require("@react-native-community/geolocation");

enableLatestRenderer();

const Stack = createStackNavigator();
export const AuthContext = React.createContext(null);

function App(): JSX.Element {
  React.useEffect(() => {
    const init = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "This app requires access to your location.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
        Alert.alert("Location permission denied");
      }
    };
    init();
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            redirectTo: "EnterPhoneNumber",
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      redirectTo: "EnterPhoneNumber",
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let token;

      try {
        token = await AsyncStorage.getItem("@access_token");
      } catch (e) {}

      dispatch({
        type: "RESTORE_TOKEN",
        token: token,
      });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signOut: async () => {
        await AsyncStorage.clear();
        dispatch({ type: "SIGN_OUT" });
      },
      ...state,
    }),
    []
  );

  return (
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* @ts-ignore */}
          <AuthContext.Provider value={authContext}>
            <OtpTripContextProvider>
              {/* @ts-ignore */}
              <NavigationContainer ref={navigationRef} independent={true}>
                <Stack.Navigator>
                  <Stack.Screen
                    name="Splash"
                    options={{ headerShown: false }}
                    component={Splash}
                    initialParams={{ redirectTo: state?.redirectTo }}
                  />

                  {/* <Stack.Screen
                    name="Auth"
                    component={Auth}
                    initialParams={{
                      initialRouteName: state?.redirectTo,
                      data: { phone: state?.phone },
                    }}
                    options={{
                      animationTypeForReplace: state.isSignout ? "pop" : "push",
                      headerShown: false,
                    }}
                  /> */}
                  <Stack.Screen
                    name="Protected"
                    component={Protected}
                    options={{ headerShown: false }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </OtpTripContextProvider>
          </AuthContext.Provider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default withTheme(App);
