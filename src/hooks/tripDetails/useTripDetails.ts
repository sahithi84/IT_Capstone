import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCancelTripFunctions } from "../cancelTrip/useCancelTripFunctions";
import { useUserApis } from "../../apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearMapState } from "../../redux/mapSlice";
import { useCreateTripWithOtp } from "../createTripWithOTP/useCreateTripWithOtp";
import { clearTrip, setTrip } from "../../redux/tripSlice";
import { createTripFormStore } from "../../mobx/withOtpTripStates";

export function useTripDetails() {
  const { clearFields } = createTripFormStore;

  const { handleCancelUserTrip, isCancellingTrip } = useCancelTripFunctions();

  const dispatch = useDispatch();
  const {
    getUserTripStatus,
    data: tripData,
    loading: tripDataStatusRefreshing,
  } = useUserApis();

  const getTripStatus = useCallback(async () => {
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

  // useEffect(() => {
  //   getTripStatus();
  // }, [getTripStatus]);

  useEffect(() => {
    const getTripStatusData = () => {
      if (tripData && tripData.success === true) {
        dispatch(setTrip(tripData));
      } else {
        // @ts-ignore
        if (
          tripData && // @ts-ignore
          tripData.success === false && // @ts-ignore
          tripData.error_code === "453"
        ) {
          dispatch(clearMapState());
          clearFields();
          dispatch(clearTrip());
        }
      }
    };
    getTripStatusData();
  }, [tripData]);

  return {
    tripDataToBeDecideUI: tripData,
    handleCancelUserTrip,
    tripDataStatusRefreshing,
    isCancellingTrip,
    getTripStatus,
  };
}
