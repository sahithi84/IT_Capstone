import { useCallback } from "react";
import { useApiRequest } from "./useApiRequest";

export const useUserApis = () => {
  const { fetchData, loading, apiError, data } = useApiRequest();

  const fetchVehicleTypes = useCallback(async ({ payload }: any) => {
    const url = "user_service_type";
    fetchData({ url, method: "post", payload });
  }, []);

  const applyPromoCode = useCallback(async ({ payload }: any) => {
    const url = "apply_promo_code";
    fetchData({ url, method: "post", payload });
  }, []);

  const deleteUserAccount = useCallback(async ({ payload }: any) => {
    const url = "delete_user";
    fetchData({ url, method: "post", payload });
  }, []);

  const getUserTripStatus = useCallback(async ({ payload }: any) => {
    const url = "usergettripstatus";
    fetchData({ url, method: "post", payload });
  }, []);

  const getPromoCodes = useCallback(async ({ payload }: any) => {
    const url = "get_promocodes";
    fetchData({ url, method: "post", payload });
  }, []);

  const fetchNearDrivers = useCallback(async ({ payload }: any) => {
    const url = "getnearbyprovider";

    fetchData({ url, method: "post", payload });
  }, []);

  const fetchUserDetails = useCallback(async ({ payload }: any) => {
    const url = "getuserdetail";

    fetchData({ url, method: "post", payload });
  }, []);

  const cancelUserTrip = useCallback(async ({ payload }: any) => {
    const url = "canceltrip";

    fetchData({ url, method: "post", payload });
  }, []);

  const createUserTrip = useCallback(async ({ payload }: any) => {
    const url = "createtrip";

    fetchData({ url, method: "post", payload });
  }, []);
  const getStripePaymentIntent = useCallback(async ({ payload }: any) => {
    const url = "get_stripe_payment_intent";

    fetchData({ url, method: "POST", payload });
  }, []);

  const fetchUserTripDetails = useCallback(async ({ payload }: any) => {
    const url = "usertripdetail";
    fetchData({ url, method: "post", payload });
  }, []);

  const fetchLocationByCoordinates = useCallback(async ({ payload }: any) => {
    const url = "get_current_location";
    fetchData({ url, method: "post", payload });
  }, []);

  const userReview = useCallback(async ({ payload }: any) => {
    const url = "usergiverating";
    fetchData({ url, method: "post", payload });
  }, []);

  const getUserDetalils = useCallback(async ({ payload }: any) => {
    const url = "getuserdetail";
    fetchData({ url, method: "post", payload });
  }, []);

  const getFutureRequests = useCallback(async ({ payload }: any) => {
    const url = "getfuturetrip";
    fetchData({ url, method: "post", payload });
  }, []);

  const updatedUserProfile = useCallback(async ({ payload }: any) => {
    const url = "userupdate";
    fetchData({ url, method: "post", payload });
  }, []);

  const getAllUserTrips = useCallback(async ({ payload }: any) => {
    const url = "userhistory";
    fetchData({ url, method: "post", payload });
  }, []);

  const getUserInvoice = useCallback(async ({ payload }: any) => {
    const url = "getuserinvoice";
    fetchData({ url, method: "post", payload });
  }, []);
  const applyReferalCode = useCallback(async ({ payload }: any) => {
    const url = "apply_referral_code";
    fetchData({ url, method: "post", payload });
  }, []);

  // sunil sir project

  const mapResponseExplore = useCallback(async ({ payload }: any) => {
    const url = "exploreResponse";
    fetchData({ url, method: "post", payload });
  }, []);

  const userProfile = useCallback(async ({ payload }: any) => {
    const url = "userProfile";
    fetchData({ url, method: "post", payload });
  }, []);

  const fetchServiceTypes = useCallback(async ({ payload }: any) => {
    const url = "dispatcher_mobile/service_type";

    fetchData({ url, method: "POST", payload });
  }, []);

  const getLocationByName = useCallback(async ({ payload }: any) => {
    const url = "dispatcher_mobile/get_location";
    console.log("payload man", payload);
    fetchData({ url, method: "POST", payload: payload });
  }, []);

  const getNearbyProvidersOnManualType = useCallback(
    async ({ payload }: any) => {
      const url = "dispatcher_mobile/nearby_providers";

      fetchData({ url, method: "POST", payload: payload });
    },
    []
  );

  const createTrip = useCallback(async ({ payload }: any) => {
    const url = "dispatcher_mobile/create_trip";

    fetchData({ url, method: "POST", payload: payload });
  }, []);

  const checkUser = useCallback(async ({ payload }: any) => {
    const url = "dispatcher_mobile/check_user";

    fetchData({ url, method: "POST", payload: payload });
  }, []);

  const getFareEstimateForTrip = useCallback(async ({ payload }: any) => {
    const url = "dispatcher_mobile/get_fare_estimate";

    fetchData({ url, method: "POST", payload: payload });
  }, []);

  const getDistanceAndTimeOfTrip = useCallback(async ({ payload }: any) => {
    const url = "dispatcher_mobile/get_distance_time";

    fetchData({ url, method: "POST", payload: payload });
  }, []);

  const getDispatcherDetails = useCallback(async ({ payload }: any) => {
    const url = "dispatcher_mobile/get_dispatcher";

    fetchData({ url, method: "POST", payload: payload });
  }, []);

  const getTripDetails = useCallback(async ({ payload }: any) => {
    const url = "dispatcher_mobile/get_trip_info";

    fetchData({ url, method: "POST", payload: payload });
  }, []);

  const getTripsList = useCallback(async ({ payload }: any) => {
    const url = "dispatcher_mobile/get_trip_list";

    fetchData({ url, method: "POST", payload: payload });
  }, []);

  const createTripWithOTP = useCallback(async ({ payload }: any) => {
    const url = "dispatcher_mobile/create_trip_with_otp";

    fetchData({ url, method: "POST", payload: payload });
  }, []);

  const getServerTime = useCallback(async () => {
    const url = "dispatcher_mobile/get_server_time";

    fetchData({ url, method: "GET" });
  }, []);

  const getConstants = useCallback(async () => {
    const url = "dispatcher_mobile/get_constents";

    fetchData({ url, method: "GET" });
  }, []);

  const assignDriverToTrip = useCallback(async ({ payload }: any) => {
    const url = "dispatcher_mobile/assign_driver_to_trip";

    fetchData({ url, method: "POST", payload: payload });
  }, []);

  const getCorporates = useCallback(async () => {
    const url = "dispatcher_mobile/get_corporates";

    fetchData({ url, method: "GET" });
  }, []);

  const getCustomerDetailsByPhoneNumber = useCallback(
    async ({ payload }: any) => {
      const url = "dispatcher_mobile/get_user_with_mobile";

      fetchData({ url, method: "POST", payload: payload });
    },
    []
  );

  return {
    loading,
    apiError,
    data,
    fetchVehicleTypes,
    getDispatcherDetails,
    fetchServiceTypes,
    getLocationByName,
    getNearbyProvidersOnManualType,
    createTrip,
    checkUser,
    getFareEstimateForTrip,
    getDistanceAndTimeOfTrip,
    getTripsList,
    getTripDetails,
    getServerTime,
    createTripWithOTP,
    getConstants,
    cancelUserTrip,
    assignDriverToTrip,
    getCorporates,
    getCustomerDetailsByPhoneNumber,
    fetchNearDrivers,
    fetchUserDetails,
    createUserTrip,
    fetchUserTripDetails,
    userReview,
    getUserDetalils,
    userProfile,
    applyReferalCode,
    getUserTripStatus,
    deleteUserAccount,
    getUserInvoice,
    getFutureRequests,
    getAllUserTrips,
    getPromoCodes,
    updatedUserProfile,
    applyPromoCode,
    fetchLocationByCoordinates,
    getStripePaymentIntent,
  };
};
