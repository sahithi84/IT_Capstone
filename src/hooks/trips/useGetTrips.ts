import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect } from "react";
import { useUserApis } from "../../apis";

export function useGetTrips() {
  const { loading, data: tripsList, getTripsList } = useUserApis();

  const getTrips = useCallback(async () => {
    try {
      const dispatcherId = await AsyncStorage.getItem("@dispatcher_id");
      const payload = {
        dispatcher_id: dispatcherId,
      };

      await getTripsList({ payload });
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => {
    getTrips();
  }, [getTrips]);

  return { loading, tripsList };
}
