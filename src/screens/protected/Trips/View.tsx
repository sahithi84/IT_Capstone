/* eslint-disable react-native/no-inline-styles */
import React, { memo, useCallback, useEffect } from "react";
import { View } from "react-native";
import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import TripsCard from "../../../components/protected/TripsList/TripsCard";
import { useUserApis } from "../../../apis";
import { getTripStatus } from "../../../utils/getTripStatus";
import moment from "moment";
import BackIconWithTitle from "../../../components/general/BackIconWithHeading";
import { OtpTripContextProvider } from "../../../contexts";

const SingleTripDetails = memo(({ route, navigation }: any) => {
  const drawerId = route?.params?.drawerId;
  const tripDataFromRoute = route?.params.tripData;
  const tripId = route?.params?.tripId;
  const tripCategoryTitle = route?.params?.tripCategoryTitle;
  const tripKey = route?.params?.tripKey;
  const { data: tripData, getTripDetails } = useUserApis();

  const getTripData = useCallback(async () => {
    try {
      const payload = {
        trip_id: tripId,
      };
      await getTripDetails({ payload });
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => {
    getTripData();
  }, [getTripData]);

  return (
    <OtpTripContextProvider>
      <ProtectedWrapper>
        <BackIconWithTitle title={tripCategoryTitle} navigation={navigation} />
        <View style={{ padding: 16 }}>
          <TripsCard
            // @ts-ignore
            id={tripData?.request_data?.unique_id}
            state={getTripStatus({
              // @ts-ignore
              isProviderAccepted: tripData?.request_data?.is_provider_accepted,
              // @ts-ignore
              isProviderStatus: tripData?.request_data?.is_provider_status,
            })}
            pickupAt={moment(
              // @ts-ignore
              tripData?.request_data?.is_schedule_trip
                ? // @ts-ignore
                  tripData?.request_data?.server_start_time_for_schedule
                : // @ts-ignore
                  tripData?.request_data?.created_at
            ).format("DD MMM 'YY hh:mm a")}
            onCancel={() => {}}
            // @ts-ignore
            tripData={{
              // @ts-ignore
              ...(tripData?.request_data || {}),
              typename: tripDataFromRoute?.typename,
            }}
            navigation={navigation}
            drawerId={drawerId}
            type="single_view"
            tripKey={tripKey}
          />
        </View>
      </ProtectedWrapper>
    </OtpTripContextProvider>
  );
});

export default SingleTripDetails;
