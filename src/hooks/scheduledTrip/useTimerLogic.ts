import { useCallback, useEffect, useState } from "react";
import { useUserApis } from "../../apis";
import { Alert } from "react-native";
import moment from "moment-timezone";

export function useTimerLogic({ createTripFormStore }: any) {
  const { setFormField } = createTripFormStore;

  const [isTimeSelected, setIsTimeSelected] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [isValidTimeSelected, setIsValidTimeSelected] = useState(false);

  const { getServerTime, data } = useUserApis();

  const handleDateSelection = useCallback(
    (date: any) => {
      setSelectedDate(date);
      setIsTimeSelected(true);
      getServerTime();
    },
    [getServerTime]
  );

  useEffect(() => {
    if (selectedDate && isTimeSelected && data) {
      // @ts-ignore
      const serverTimeFromApi = data.server_date;

      // Convert server time to Asia/Kolkata timezone
      const serverTimeInKolkata = moment(serverTimeFromApi).tz("Asia/Kolkata");

      // Convert selected date to Asia/Kolkata timezone
      const selectedDateInKolkata = moment(selectedDate).tz("Asia/Kolkata");

      // Calculate the time difference in minutes
      const timeDifference = selectedDateInKolkata.diff(
        serverTimeInKolkata,
        "milliseconds"
      );

      // Check if the selected time is at least 20 minutes ahead of server time
      if (timeDifference > 1200000) {
        setFormField("is_ride_later", "1");

        // @ts-ignore
        setFormField("start_time", timeDifference);
        setIsValidTimeSelected(true);
      } else {
        Alert.alert(
          "Scheduled Trip",
          "Select a time at least 20 minutes from now."
        );
        setIsValidTimeSelected(false);
      }
    }
  }, [data, selectedDate, isTimeSelected]);

  return { isValidTimeSelected, handleDateSelection };
}
