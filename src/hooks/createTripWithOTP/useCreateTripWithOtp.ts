import { useDispatch } from "react-redux";
import { clearMapState } from "../../redux/mapSlice";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import useRideLaterLogic from "../scheduledTrip/useRideLaterLogic";
import { useTimerLogic } from "../scheduledTrip/useTimerLogic";
import { useUserApis } from "../../apis";
import { pushToDiscord } from "../../utils/pushToDiscord";
import { clearTrip, setTrip } from "../../redux/tripSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { errorMessages } from "../../utils/errorMessages";
import { io } from "socket.io-client";
import { createTripFormStore } from "../../mobx/withOtpTripStates";

export const useCreateTripWithOtp = () => {
  const {
    formData,
    setFormField,
    submitForm,
    clearFieldError,
    validateField,
    clearFields,
    errors,
    isFormValid,
    clearField,
  } = createTripFormStore;

  const dispatch = useDispatch();

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

  const {
    createUserTrip,
    data: createTripResponse,
    loading: isTripCreating,
  } = useUserApis();

  const { getUserTripStatus, data: tripData } = useUserApis();

  const getTripDetailsAsSocketListensToTheTripIdEvent =
    useCallback(async () => {
      const userDetails = JSON.parse(
        // @ts-ignore
        await AsyncStorage.getItem("@user_details")
      );

      const payload = {
        user_id: userDetails?.user_id,
        token: userDetails?.token,
      };

      getUserTripStatus({ payload });
    }, []);

  useEffect(() => {
    console.log(
      "🚀 ~ file: useCreateTripWithOtp.ts:59 ~ useEffect ~ tripData:",
      tripData
    );
    // @ts-ignore
    if (tripData && tripData.success === true) {
      dispatch(setTrip({ ...tripData }));
    } else {
      // @ts-ignore
      if (
        tripData && // @ts-ignore
        tripData.success === false && // @ts-ignore
        tripData.error_code === "453"
      ) {
        dispatch(clearTrip());
        dispatch(clearMapState());
        clearFields();
      }
    }
  }, [tripData]);

  const handleCreateRegularTrip = async () => {
    // @ts-ignore
    const userDetails = JSON.parse(await AsyncStorage.getItem("@user_details"));

    const payload = {
      d_latitude: formData?.d_latitude, // Destination laititude.
      d_longitude: formData?.d_longitude, // Destination longitude.
      destination_address: formData?.destination_address, // Destination address of trip.
      user_id: userDetails?.user_id, // Id of user.
      token: userDetails?.token, // Unique token of user.
      latitude: formData?.latitude, // Latitude coordinate.
      longitude: formData?.longitude, // Longitude coordinate.
      source_address: formData?.source_address,
      timezone: "Asia/Kolkata", // Timezone
      payment_mode: 1, // Payment mode type cash or card or wallet.
      service_type_id: formData?.service_type_id, // Id of service type.
      is_surge_hours: 0, // If surge hours then value will be 1 otherwise 0.
      surge_multiplier: 0, // Value to be multiplied if surge.
      is_fixed_fare: false, // If trip is fixed fare then value is true otheriwise false.
      fixed_price: 0, // If is_fixed_fare value is true then this value will be greater than 0 otherwise 0.
      accessibility: [], // Selected accessibility.
      received_trip_from_gender: [], // Gender for receive trip.
      provider_language: [], // Language of provider.
      is_trip_inside_zone_queue: true,
    };

    pushToDiscord({ fieldName: "regular trip payload", discordData: payload });

    createUserTrip({ payload });
  };

  const handleCreateRentalTrip = async () => {
    // @ts-ignore
    const userDetails = JSON.parse(await AsyncStorage.getItem("@user_details"));

    const payload = {
      d_latitude: formData?.d_latitude, // Destination laititude.
      d_longitude: formData?.d_longitude, // Destination longitude.
      destination_address: formData?.destination_address, // Destination address of trip.
      user_id: userDetails?.user_id, // Id of user.
      token: userDetails?.token, // Unique token of user.
      latitude: formData?.latitude, // Latitude coordinate.
      longitude: formData?.longitude, // Longitude coordinate.
      source_address: formData?.source_address,
      timezone: "Asia/Kolkata", // Timezone
      payment_mode: 1, // Payment mode type cash or card or wallet.
      service_type_id: formData?.service_type_id, // Id of service type.
      is_surge_hours: 0, // If surge hours then value will be 1 otherwise 0.
      surge_multiplier: 0, // Value to be multiplied if surge.
      is_fixed_fare: false, // If trip is fixed fare then value is true otheriwise false.
      fixed_price: 0, // If is_fixed_fare value is true then this value will be greater than 0 otherwise 0.
      accessibility: [], // Selected accessibility.
      received_trip_from_gender: [], // Gender for receive trip.
      provider_language: [], // Language of provider.
      is_trip_inside_zone_queue: true,
      car_rental_id: formData?.carrentalids,
    };

    pushToDiscord({ fieldName: "rental trip payload", discordData: payload });

    createUserTrip({ payload });
  };

  useEffect(() => {
    const init = async () => {
      // @ts-ignore
      if (createTripResponse && createTripResponse.success === true) {
        let tripId = null;

        // airport trip
        // @ts-ignore
        if (createTripResponse && createTripResponse.trip) {
          const airportTripId =
            createTripResponse.trip?.trip_id || createTripResponse.trip?._id;

          console.log(
            "🚀 ~ file: useCreateTripWithOtp.ts:208 ~ init ~ airportTripId:",
            airportTripId
          );
          tripId = airportTripId;

          await AsyncStorage.setItem("@completed_trip_id", tripId);
          dispatch(setTrip({ ...createTripResponse }));
        }

        // city trip
        // @ts-ignore
        if (createTripResponse && createTripResponse?.trip_id) {
          const cityTripId = createTripResponse?.trip_id;
          console.log(
            "🚀 ~ file: useCreateTripWithOtp.ts:228 ~ init ~ cityTripId:",
            cityTripId
          );

          tripId = cityTripId;
          await AsyncStorage.setItem("@completed_trip_id", tripId);
        }

        const socketEventName = `'${tripId}'`;

        console.log(
          "🚀 ~ file: useCreateTripWithOtp.ts:226 ~ init ~ socketEventName:",
          socketEventName
        );

        // @ts-ignore
        socket.on(socketEventName, (data: any) => {
          console.log(
            "🚀 ~ file: index.tsx:94 ~ engine.on ~ data:",
            JSON.stringify(data, null, 2)
          );
          return getTripDetailsAsSocketListensToTheTripIdEvent();
        });

        pushToDiscord({
          fieldName: "Regular Trip Created Successfully",
          discordData: createTripResponse || Object.keys(createTripResponse),
        });
      } else {
        // @ts-ignore
        if (createTripResponse && createTripResponse?.success === false) {
          pushToDiscord({
            fieldName: "Regular Trip Failed Successfully",
            discordData: createTripResponse,
          });
          dispatch(clearTrip());
          // @ts-ignore
          Alert.alert(errorMessages[createTripResponse?.error_code]);
        }
      }
    };
    init();
  }, [createTripResponse]);

  // scheduled trip functions and logic

  const { handleDateSelection, isValidTimeSelected } = useTimerLogic({
    createTripFormStore: {
      formData,
      setFormField,
      submitForm,
      clearFieldError,
      validateField,
      clearFields,
      errors,
      isFormValid,
      clearField,
    },
  });

  const { handleSubmit } = useRideLaterLogic();

  useEffect(() => {
    dispatch(clearMapState());
  }, []);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [open, setOpen] = useState(false);

  const handleRideLater = () => {
    setOpen(true);
  };

  const handleConfirmPickDate = (date: any) => {
    setOpen(false);
    setSelectedDate(date);
    handleDateSelection(date);
  };

  useEffect(() => {
    if (isValidTimeSelected) {
      handleSubmit();
    }
  }, [isValidTimeSelected]);

  return {
    isTripCreating,
    handleCreateRegularTrip,
    handleCreateRentalTrip,
    open,
    handleRideLater,
    handleConfirmPickDate,
    selectedDate,
    setOpen,
    formData,
    setFormField,
    submitForm,
    clearFieldError,
    validateField,
    clearFields,
    errors,
    isFormValid,
    clearField,
  };
};
