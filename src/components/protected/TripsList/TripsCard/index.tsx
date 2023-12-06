import React, { FC, useEffect, useState } from "react";
import { Alert } from "react-native";
import SimpleCard from "./SimpleCard";
import SingleTripView from "../SingleTripView";
import { ComplexDetailCard } from "./ComplexDetailCard";
import { useUserApis } from "../../../../apis";

interface CardProps {
  id: string;
  state: string;
  pickupAt: string;
  tripData: object;
  onCancel: () => void;
  navigation: any;
  drawerId: string;
  type: string;
  tripCategoryTitle?: string;
  tripKey: string;
}

const TripsCard: FC<CardProps> = ({
  id,
  tripData,
  pickupAt,
  drawerId,
  type = "simple",
  tripCategoryTitle = "Requested Trip",
  tripKey,
  navigation,
}) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [showCancelReason, setShowCancelReason] = useState(false);
  const [showDriversForm, setShowDriversForm] = useState(false);

  // const navigation = useNavigation();

  const { assignDriverToTrip, data: response } = useUserApis();

  const handleToggleTripFullDetails = () => {
    setOpenDetails((prevState) => !prevState);
  };

  const handleToggleDriversForm = () => {
    setShowDriversForm((prevState) => !prevState);
  };

  const handleCancelTrip = () => {
    setShowCancelReason((prevState) => !prevState);
  };

  const handleAssignTrip = ({ driverId }: any) => {
    if (!drawerId) {
      return;
    }

    const payload = {
      // @ts-ignore
      trip_id: tripData?._id,
      provider_id: driverId,
    };

    assignDriverToTrip({ payload });
  };

  useEffect(() => {
    // @ts-ignore
    if (response?.success === false) {
      Alert.alert("Something went wrong, Please try again later");
      // @ts-ignore
    } else if (response?.success === true) {
      Alert.alert("Trip has been assigned to driver");
      // @ts-ignore
      navigation.replace("Protected");
    }
  }, [response]);

  return (
    <>
      {type === "simple" ? (
        <SimpleCard
          tripData={tripData}
          handleCancelTrip={handleCancelTrip}
          showCancelReason={showCancelReason}
          handleAssignTrip={handleAssignTrip}
          tripCategoryTitle={tripCategoryTitle}
          tripKey={tripKey}
          handleToggleDriversForm={handleToggleDriversForm}
          showDriversForm={showDriversForm}
          navigation={navigation}
        />
      ) : type === "single_view" ? (
        <SingleTripView
          tripData={tripData}
          handleCancelTrip={handleCancelTrip}
          showCancelReason={showCancelReason}
          handleAssignTrip={handleAssignTrip}
          pickupAt={pickupAt}
          tripKey={tripKey}
          handleToggleDriversForm={handleToggleDriversForm}
          showDriversForm={showDriversForm}
          navigation={navigation}
        />
      ) : (
        <ComplexDetailCard
          tripData={tripData}
          pickupAt={pickupAt}
          handleCancelTrip={handleCancelTrip}
          handleToggleTripFullDetails={handleToggleTripFullDetails}
          openDetails={openDetails}
          handleAssignTrip={handleAssignTrip}
          showCancelReason={showCancelReason}
          id={id}
        />
      )}
    </>
  );
};

export default TripsCard;
