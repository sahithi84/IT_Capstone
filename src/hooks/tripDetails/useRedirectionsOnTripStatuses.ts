import { useEffect, useMemo } from "react";
import { useTripDetailsContext } from "../../contexts/tripDetailsContext/useTripDetailsContext";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export function useRedirectionsOnTripStatuses() {
  const navigation = useNavigation();

  const tripData = useSelector((state) => {
    // @ts-ignore
    return state?.trip;
  });

  const isProviderNotYetAccepted = useMemo(() => {
    if (tripData && tripData.trip && tripData.trip.is_provider_status === 0) {
      return true;
    } else {
      return false;
    }
  }, [tripData]);

  const isProviderAccepted = useMemo(() => {
    if (tripData && tripData.trip && tripData.trip.is_provider_status === 1) {
      return true;
    } else {
      return false;
    }
  }, [tripData]);

  const tripId = useMemo(() => {
    if (tripData && tripData.trip && tripData.trip._id) {
      return tripData.trip.trip_id;
    } else {
      return null;
    }
  }, [tripData]);
  // console.log(
  //   "🚀 ~ file: useRedirectionsOnTripStatuses.ts:45 ~ tripId ~ tripId:",
  //   tripData
  // );
  // console.log(
  //   "🚀 ~ file: useRedirectionsOnTripStatuses.ts:47 ~ tripId ~ tripId:",
  //   tripId
  // );

  useEffect(() => {
    if (tripData && tripData.trip && tripData.trip.is_provider_status === 9) {
      // @ts-ignore
      navigation.replace("Protected", { screen: "Invoice" });
    } else if (
      tripData &&
      tripData.trip &&
      tripData.trip.payment_status === 1
    ) {
      // @ts-ignore
      navigation.replace("Protected", { screen: "UserFeedback" });
    }
  }, [tripData]);

  return {
    tripData,
    isProviderNotYetAccepted,
    isProviderAccepted,
    tripId,
  };
}
