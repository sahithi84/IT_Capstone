import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTrip, setTrip } from "../../redux/tripSlice";
import { Alert } from "react-native";
import { errorMessages } from "../../utils/errorMessages";
import { useUserApis } from "../../apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearMapState } from "../../redux/mapSlice";
import { pushToDiscord } from "../../utils/pushToDiscord";
import { createTripFormStore } from "../../mobx/withOtpTripStates";

export function useCancelTripFunctions() {
  const {
    cancelUserTrip,
    data: cancelTripResponse,
    loading: isCancellingTrip,
  } = useUserApis();
  const [openModal, setOpenModal] = useState(false);
  const { clearFields } = createTripFormStore;

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const tripData = useSelector((state) => {
    return state?.trip;
  });

  const handleCancelUserTrip = useCallback(
    async ({ reason }: any) => {
      const tripId =
        tripData?.trip?._id || tripData?._id || tripData?.trip?.trip_id;
      if (tripId) {
        const userDetails = JSON.parse(
          // @ts-ignore
          await AsyncStorage.getItem("@user_details")
        );

        const payload = {
          user_id: userDetails?.user_id,
          token: userDetails?.token,
          trip_id: tripId,
          cancel_reason: reason,
        };

        pushToDiscord({
          fieldName: "cancel current trip payload",
          discordData: payload,
        });

        cancelUserTrip({ payload });
      }
    },
    [tripData]
  );

  useEffect(() => {
    const init = async () => {
      // @ts-ignore
      if (cancelTripResponse && cancelTripResponse.success === true) {
        dispatch(clearTrip());
        await AsyncStorage.removeItem("@completed_trip_id");

        dispatch(clearMapState());
        clearFields();
        // @ts-ignore
        navigation?.replace("Protected", { screen: "Dashboard" });
      } else {
        // @ts-ignore
        if (cancelTripResponse && cancelTripResponse.error_code) {
          // @ts-ignore
          Alert.alert(errorMessages[cancelTripResponse.error_code]);
        }
      }
    };
    init();
  }, [cancelTripResponse]);

  return {
    handleCancelUserTrip,
    isCancellingTrip,
    openModal,
    setOpenModal,
    cancelTripResponse,
  };
}
