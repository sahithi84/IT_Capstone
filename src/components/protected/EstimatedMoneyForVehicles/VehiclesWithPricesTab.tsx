import { Alert, View } from "react-native";
import React, { useEffect, useMemo } from "react";
import { useVehilcleWithPricesStates } from "../../../hooks/VehicleSelection/useVehilcleWithPricesStates";
import LookingForDriver from "../../LookingForDriver";
import { VehicleSelectionsTab } from "./VehicleSelectionsTab";
import { useDispatch, useSelector } from "react-redux";
import { MemoizedCityTripsOTPInterface } from "../CityTripsOTPInterface";
import { createTripFormStore } from "../../../mobx/withOtpTripStates";
// import { clearTrip } from "../../../redux/tripSlice";
// import { clearMapState } from "../../../redux/mapSlice";
import _ from "lodash";
import { useNavigation } from "@react-navigation/native";
import { MemoizedAirportTripsOTPInterface } from "../AirportTripsOTPInterface";

export function VehiclesWithPricesTab() {
  const {
    tabOptions,
    handleSelectTabOption,
    selectedVehicle,
    loading,
    reorderedVehicleTypes,
    handleSelect,
  } = useVehilcleWithPricesStates();

  const dispatch = useDispatch();
  const { formData, clearFields } = createTripFormStore;

  return (
    <>
      <RenderScreen
        formData={formData}
        tabOptions={tabOptions}
        handleSelectTabOption={handleSelectTabOption}
        selectedVehicle={selectedVehicle}
        loading={loading}
        reorderedVehicleTypes={reorderedVehicleTypes}
        handleSelect={handleSelect}
      />
    </>
  );
}
const RenderScreen = ({
  formData,
  tabOptions,
  handleSelectTabOption,
  selectedVehicle,
  loading,
  reorderedVehicleTypes,
  handleSelect,
}: any) => {
  const tripData = useSelector((state) => {
    // @ts-ignore
    return state?.trip;
  });
  // console.log(
  //   "🚀 ~ file: VehiclesWithPricesTab.tsx:52 ~ tripData ~ tripData:",
  //   Object.keys(tripData?.trip)
  // );
  // console.log(
  //   "🚀 ~ file: VehiclesWithPricesTab.tsx:52 ~ reduxTripData ~ reduxTripData:",
  //   reduxTripData
  // );

  // const tripData = useMemo(() => {
  //   return reduxTripData?.trip?.trip || reduxTripData;
  // }, [reduxTripData]);
  // console.log(
  //   "🚀 ~ file: VehiclesWithPricesTab.tsx:56 ~ tripData ~ tripData:",
  //   tripData
  // );

  const isTripCancelledByDriver = _.get(
    tripData,
    "trip.is_trip_cancelled_by_provider"
  );
  console.log(
    "🚀 ~ file: VehiclesWithPricesTab.tsx:72 ~ isTripCancelledByDriver:",
    isTripCancelledByDriver
  );

  const isAirportPickup = _.get(tripData, "trip.is_airport_pickup");
  console.log(
    "🚀 ~ file: VehiclesWithPricesTab.tsx:87 ~ isAirportPickup:",
    isAirportPickup
  );

  const isProviderStatus = _.get(tripData, "trip.is_provider_status");
  console.log(
    "🚀 ~ file: VehiclesWithPricesTab.tsx:91 ~ isProviderStatus:",
    isProviderStatus
  );

  const isScheduledTrip = _.get(tripData, "trip.is_schedule_trip");
  console.log(
    "🚀 ~ file: VehiclesWithPricesTab.tsx:95 ~ isScheduledTrip:",
    isScheduledTrip
  );

  const paymentStatus = _.get(tripData, "trip.payment_status");
  console.log(
    "🚀 ~ file: VehiclesWithPricesTab.tsx:99 ~ paymentStatus:",
    paymentStatus
  );

  const isTripCancelledByUser = _.get(
    tripData,
    "trip.is_trip_cancelled_by_user"
  );
  console.log(
    "🚀 ~ file: VehiclesWithPricesTab.tsx:106 ~ isTripCancelledByUser:",
    isTripCancelledByUser
  );

  const navigation = useNavigation();

  useEffect(() => {
    if (isTripCancelledByDriver === 1) {
      Alert.alert(
        "Trip Update",
        "Unfortunately, your trip has been canceled by the driver. Please consider rebooking your trip for a better experience."
      );
      // dispatch(clearTrip());
      // dispatch(clearMapState());
      // clearFields();
    } else if (isProviderStatus === 9) {
      // @ts-ignore
      navigation?.replace("Protected", { screen: "Invoice" });
    } else if (paymentStatus === 1) {
      // @ts-ignore
      navigation?.replace("Protected", { screen: "UserFeedback" });
    }
  }, [isTripCancelledByDriver, isProviderStatus, paymentStatus]);

  if (isAirportPickup === false) {
    if (isProviderStatus === 0) {
      if (isScheduledTrip === false) {
        return <LookingForDriver />;
      } else {
        const validDriverStatuses = [1, 2, 4, 6];
        console.log(
          "🚀 ~ file: VehiclesWithPricesTab.tsx:106 ~ validDriverStatuses:",
          validDriverStatuses
        );

        if (validDriverStatuses.includes(isProviderStatus)) {
          return (
            <MemoizedCityTripsOTPInterface
              tripData={_.get(tripData, "trip")}
              allData={tripData}
            />
          );
        }
      }
    } else {
      const validDriverStatuses = [1, 2, 4, 6, 9];
      console.log(
        "🚀 ~ file: VehiclesWithPricesTab.tsx:106 ~ validDriverStatuses:",
        validDriverStatuses
      );

      if (validDriverStatuses.includes(isProviderStatus)) {
        return (
          <MemoizedCityTripsOTPInterface
            tripData={_.get(tripData, "trip")}
            allData={tripData}
          />
        );
      }
    }
  } else if (isAirportPickup === true) {
    if (isProviderStatus === 0) {
      if (isScheduledTrip === false) {
        return (
          <MemoizedAirportTripsOTPInterface
            tripData={_.get(tripData, "trip")}
            allData={tripData}
          />
        );
      } else {
        const validDriverStatuses = [1, 2, 4, 6];
        console.log(
          "🚀 ~ file: VehiclesWithPricesTab.tsx:106 ~ validDriverStatuses:",
          validDriverStatuses
        );

        if (validDriverStatuses.includes(isProviderStatus)) {
          return (
            <MemoizedCityTripsOTPInterface
              tripData={_.get(tripData, "trip")}
              allData={tripData}
            />
          );
        }
      }
    } else {
      const validDriverStatuses = [1, 2, 4, 6, 9];
      console.log(
        "🚀 ~ file: VehiclesWithPricesTab.tsx:106 ~ validDriverStatuses:",
        validDriverStatuses
      );

      if (validDriverStatuses.includes(isProviderStatus)) {
        return (
          <MemoizedCityTripsOTPInterface
            tripData={(tripData && tripData.trip.trip) ?? tripData}
            allData={tripData}
          />
        );
      }
    }
  } else {
    if (
      formData.latitude &&
      formData.d_latitude &&
      formData.longitude &&
      formData.d_longitude
    ) {
      return (
        <View
          style={{
            width: "100%",
            height: "50%",
            backgroundColor: "#263238",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <VehicleSelectionsTab
            tabOptions={tabOptions}
            handleSelectTabOption={handleSelectTabOption}
            selectedVehicle={selectedVehicle}
            loading={loading}
            reorderedVehicleTypes={reorderedVehicleTypes}
            handleSelect={handleSelect}
          />
        </View>
      );
    }
  }
};
