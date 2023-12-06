import { useCallback, useEffect } from "react";
import { io } from "socket.io-client";
import { useUserApis } from "../../apis";
import { clearTrip, setTrip } from "../../redux/tripSlice";
import { clearMapState } from "../../redux/mapSlice";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createTripFormStore } from "../../mobx/withOtpTripStates";

export default function useSocket({
  navigateToOnTripComplete = () => {},
}: any) {
  const { getUserTripStatus, data: tripDataResponse } = useUserApis();
  console.log(
    "🚀 ~ file: useSocket.ts:14 ~ tripDataResponse:",
    tripDataResponse
  );
  const dispatch = useDispatch();
  const { clearFields } = createTripFormStore;

  const getTripStatus = useCallback(async () => {
    const userDetails = JSON.parse(
      // @ts-ignore
      await AsyncStorage.getItem("@user_details")
    );

    const payload = {
      user_id: userDetails?.user_id,
      token: userDetails?.token,
    };
    console.log(
      "🚀 ~ file: useSocket.ts:32 ~ getTripStatus ~ payload:",
      payload
    );

    getUserTripStatus({ payload });
  }, []);

  useEffect(() => {
    getTripStatus();
  }, [getTripStatus]);

  useEffect(() => {
    console.log(
      "🚀 ~ file: useSocket.ts:145 ~ useEffect ~ tripDataResponse:",
      tripDataResponse?.error_code,
      typeof tripDataResponse?.error_code
    );
    // @ts-ignore
    if (tripDataResponse && tripDataResponse.success === true) {
      dispatch(setTrip({ ...tripDataResponse }));
    } else if (
      tripDataResponse && // @ts-ignore
      tripDataResponse.success === false && // @ts-ignore
      tripDataResponse.error_code === "453"
    ) {
      // @ts-ignore
      dispatch(clearTrip());

      dispatch(clearMapState());
      clearFields();
      if (
        navigateToOnTripComplete &&
        typeof navigateToOnTripComplete === "function"
      ) {
        navigateToOnTripComplete();
      }
    }
  }, [tripDataResponse]);

  const callSocket = useCallback(() => {
    const socket = io("https://staging.ohmelogistics.com", {
      reconnection: true,
      reconnectionDelay: 500, // @ts-ignore
      jsonp: false,
      reconnectionAttempts: Infinity,
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log("socket connected");
    });

    const tripId = tripDataResponse?.trip?._id;
    console.log("🚀 ~ file: useSocket.ts:93 ~ callSocket ~ tripId:", tripId);

    // @ts-ignore
    socket.on(`'${tripId}'`, (data: any) => {
      console.log("🚀 ~ file: useSocket.ts:114 ~ callSocket ~ data:", data);
      getTripStatus();

      return;
    });
  }, [tripDataResponse]);

  useEffect(() => {
    callSocket();
  }, [callSocket]);

  return {
    callSocket,
  };
}

export function useSocketWithoutNavigation() {
  const { getUserTripStatus, data: tripDataResponse } = useUserApis();

  const dispatch = useDispatch();
  const { clearFields } = createTripFormStore;

  const getTripStatus = useCallback(async () => {
    const userDetails = JSON.parse(
      // @ts-ignore
      await AsyncStorage.getItem("@user_details")
    );

    const payload = {
      user_id: userDetails?.user_id,
      token: userDetails?.token,
    };
    console.log(
      "🚀 ~ file: useSocket.ts:155 ~ getTripStatus ~ payload:",
      payload
    );

    getUserTripStatus({ payload });
  }, []);

  useEffect(() => {
    getTripStatus();
  }, []);

  useEffect(() => {
    // @ts-ignore
    // console.log(
    //   "🚀 ~ file: useSocket.ts:139 ~ useEffect ~ tripDataResponse:",
    //   tripDataResponse
    // );
    if (tripDataResponse && tripDataResponse.success) {
      dispatch(setTrip({ ...tripDataResponse }));
    } else if (tripDataResponse?.error_code === "453") {
      console.log("no trip found");
      // @ts-ignore
      dispatch(clearTrip());
      dispatch(clearMapState());
      clearFields();
    }
  }, [tripDataResponse]);

  const callSocket = useCallback(() => {
    const socket = io("https://staging.ohmelogistics.com", {
      reconnection: true,
      reconnectionDelay: 500, // @ts-ignore
      jsonp: false,
      reconnectionAttempts: Infinity,
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log("socket connected");
    });

    // console.log(
    //   "🚀 ~ file: useSocket.ts:166 ~ callSocket ~ tripDataResponse:",
    //   tripDataResponse
    // );
    if (tripDataResponse && tripDataResponse.success === false) {
      return;
    } else if (tripDataResponse && tripDataResponse.success === true) {
      const tripId = tripDataResponse?.trip?._id;
      console.log("🚀 ~ file: useSocket.ts:93 ~ callSocket ~ tripId:", tripId);

      socket.on(`'${tripId}'`, (data: any) => {
        console.log("🚀 ~ file: useSocket.ts:228 ~ callSocket ~ data:", data);
        getTripStatus();
      });
    }
  }, [tripDataResponse]);

  useEffect(() => {
    callSocket();
  }, [callSocket]);

  return {
    callSocket,
  };
}
