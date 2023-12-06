import React, { useEffect } from "react";
import { useUserApis } from "../../apis";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { clearMapState } from "../../redux/mapSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { errorMessages } from "../../utils/errorMessages";
import { useWithOtpTrip } from "../../contexts";
import { pushToDiscord } from "../../utils/pushToDiscord";
import { clearTrip } from "../../redux/tripSlice";
import { Alert } from "react-native";

export default function useRideLaterLogic() {
  const { formData, clearFields } = useWithOtpTrip();
  const {
    createUserTrip,
    data: scheduledTripResponse,
    loading: isApiCalling,
  } = useUserApis();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmit = React.useCallback(async () => {
    try {
      const userDetails = JSON.parse(
        // @ts-ignore
        await AsyncStorage.getItem("@user_details")
      );

      if (!formData?.service_type_id) {
        return Alert.alert("Please select vehicle to book the scheduled trip");
      }

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
        is_ride_later: formData?.is_ride_later,
        start_time: formData?.start_time,
      };

      pushToDiscord({
        fieldName: "scheduled trip payload",
        discordData: payload,
      });
      await createUserTrip({ payload });
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => {
    // @ts-ignore
    if (scheduledTripResponse && scheduledTripResponse.success === true) {
      pushToDiscord({
        fieldName: "scheduled trip success response",
        discordData: Object.keys(scheduledTripResponse),
      });

      // @ts-ignore
      if (scheduledTripResponse?.trip_id) {
        AsyncStorage.setItem(
          "@completed_trip_id",
          scheduledTripResponse?.trip_id
        );

        Alert.alert(
          "Trip Status",
          "Trip has been created successfully, Please visit the trip in Profile Booking Option"
        );
        dispatch(clearMapState());
        // dispatch(clearTrip());
        clearFields();
        //@ts-ignore
        navigation.replace("Protected", { screen: "Dashboard" });
        // getTripStatus();
      }
      // @ts-ignore
      if (scheduledTripResponse && scheduledTripResponse.trip) {
        Alert.alert(
          "Trip Status",
          "Trip has been created successfully, Please visit the trip in Profile Booking Option"
        );

        AsyncStorage.setItem(
          "@completed_trip_id",
          scheduledTripResponse?.trip?.trip_id ||
            scheduledTripResponse?.trip?._id
        );

        dispatch(clearMapState());
        dispatch(clearTrip());
        clearFields();

        //@ts-ignore
        navigation.replace("Protected", { screen: "Dashboard" });
      }
    } else {
      // @ts-ignore
      if (scheduledTripResponse && scheduledTripResponse.success === false) {
        // @ts-ignore
        pushToDiscord({
          fieldName: "scheduled trip failure response",
          discordData: scheduledTripResponse,
        });
        dispatch(clearMapState());
        dispatch(clearTrip());
        clearFields();

        // @ts-ignore
        Alert.alert(errorMessages[`${scheduledTripResponse?.error_code}`]);
      }
    }
  }, [scheduledTripResponse]);

  return { isApiCalling, handleSubmit };
}
