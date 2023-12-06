import { useCallback, useEffect } from "react";
import { useUserApis } from "../../apis";

export function useGetTripFareAmount({ tripData }: any) {
  const { getFareEstimateForTrip, data: fareEstimate } = useUserApis();

  const { getDistanceAndTimeOfTrip, data: dataAndTime } = useUserApis();

  const getDistanceAndTime = useCallback(async () => {
    try {
      if (
        tripData?.sourceLocation?.[0] &&
        tripData?.sourceLocation?.[1] &&
        tripData?.destinationLocation?.[0] &&
        tripData?.destinationLocation?.[1]
      ) {
        const payload = {
          latitude: tripData?.sourceLocation?.[0],
          longitude: tripData?.sourceLocation?.[1],
          d_latitude: tripData?.destinationLocation?.[0],
          d_longitude: tripData?.destinationLocation?.[1],
        };
        await getDistanceAndTimeOfTrip({ payload });
      }
    } catch (error) {
      return error;
    }
  }, [tripData?.sourceLocation, tripData?.destinationLocation]);

  useEffect(() => {
    getDistanceAndTime();
  }, [getDistanceAndTime]);

  const getFareForTrip = useCallback(async () => {
    try {
      if (
        tripData?.service_type_id &&
        tripData?.sourceLocation?.[0] &&
        tripData?.sourceLocation?.[1] &&
        tripData?.destinationLocation?.[0] &&
        tripData?.destinationLocation?.[1] &&
        dataAndTime
      ) {
        const payload = {
          service_type_id:
            tripData?.service_type_id || "6401b2667e59316793278dc2",
          pickup_latitude: tripData?.sourceLocation?.[0],
          pickup_longitude: tripData?.sourceLocation?.[1],
          destination_latitude: tripData?.destinationLocation?.[0],
          destination_longitude: tripData?.destinationLocation?.[1],
          surge_multiplier: 1,
          is_multiple_stop: 0,
          is_surge_hours: 0,
          // @ts-ignore
          distance: dataAndTime?.distanceValue,
          // @ts-ignore
          time: dataAndTime?.durationValue,
        };

        await getFareEstimateForTrip({ payload });
      }
    } catch (error) {
      return error;
    }
  }, [
    tripData?.service_type_id,
    tripData?.latitude,
    tripData?.longitude,
    tripData?.d_latitude,
    tripData?.d_longitude,
    dataAndTime,
  ]);

  useEffect(() => {
    getFareForTrip();
  }, [getFareForTrip]);

  return { fareEstimate };
}
