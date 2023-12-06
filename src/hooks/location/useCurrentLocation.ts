import { useState, useEffect, useCallback } from "react";
import { Platform, PermissionsAndroid } from "react-native";
import Geolocation from "@react-native-community/geolocation";
// import { sleep } from "../../screens/auth/Splash";
import { useDispatch } from "react-redux";
import { setCurrentLocation } from "../../redux/currentLocationSlice";

export const useCurrentLocation = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const requestLocationPermission = useCallback(async () => {
    try {
      console.log("happend");
      if (Platform.OS === "ios") {
        const granted = await Geolocation.requestAuthorization("whenInUse");
        // console.log(
        //   "🚀 ~ file: useLocation.ts:13 ~ requestLocationPermission ~ granted:",
        //   granted
        // );
        if (granted === "granted") {
          getLocation();
        } else {
          setError("Permission denied");
        }
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        // console.log(
        //   "🚀 ~ file: useLocation.ts:24 ~ requestLocationPermission ~ granted:",
        //   granted,
        //   PermissionsAndroid.RESULTS.GRANTED
        // );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const commonMan = await getLocation();
          console.log(
            "🚀 ~ file: useLocation.ts:34 ~ requestLocationPermission ~ commonMan:",
            commonMan
          );
          dispatch(setCurrentLocation({ ...commonMan }));
          console.log("cool");
        } else {
          setError("Permission denied");
        }
      }
    } catch (error) {
      setError("Permission request failed");
    }
  }, []);

  useEffect(() => {
    requestLocationPermission();
  }, [requestLocationPermission]);

  const getLocation = useCallback(async () => {
    return new Promise((resolve, reject) => {
      // console.log("🚀 ~ file: useLocation.ts:25 ~ getLocation ~ getLocation:");
      // console.log(
      //   "🚀 ~ file: useLocation.ts:27 ~ getLocation ~ Geolocation:",
      //   Geolocation
      // );
      // await sleep(2000)

      Geolocation.watchPosition(
        (position) => {
          // console.log(
          //   "🚀 ~ file: useLocation.ts:15 ~ getLocation ~ position:",
          //   position
          // );

          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          // console.log(
          //   "🚀 ~ file: useLocation.ts:22 ~ getLocation ~ error:",
          //   error
          // );
          setError(error.message);
          console.log("not cool");
          reject("not cool");
        },
        {
          enableHighAccuracy: true, // Whether to use high accuracy mode or not
          maximumAge: 15000, // How long previous location will be cached
          timeout: 5000, // Request timeout
        }
      );
    });
  }, []);

  return { error };
};
