/* eslint-disable react-native/no-inline-styles */
import { TouchableOpacity } from "react-native";
import React from "react";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import { useWithOtpTrip } from "../../../../contexts";

export const EditTrip = ({
  // createTripFormStore,
  tripData,
  style = {},
  navigation,
  triggerFrom = "dashboard",
}: any) => {
  const { setFormField } = useWithOtpTrip();

  const handleEditTripDetails = () => {
    // @ts-ignore
    const payload = {
      created_by: "4",
      latitude: tripData?.sourceLocation?.[0],
      longitude: tripData?.sourceLocation?.[1],
      d_latitude: tripData?.destinationLocation?.[0],
      d_longitude: tripData?.destinationLocation?.[1],
      timezone: tripData?.timezone,
      city_id: tripData?.city_id,
      payment_id: tripData?.payment_id,
      is_ride_later: tripData?.is_ride_later,
      start_time: tripData?.start_time,
      country: tripData?.country,
      country_phone_code: tripData?.country_phone_code,
      payment_mode: tripData?.payment_mode,
      is_surge_hours: tripData?.is_surge_hours,
      surge_multiplier: tripData?.surge_multiplier,
      user_type: tripData?.user_type,
      user_type_id: tripData?.user_detail?._id,
      trip_type: tripData?.trip_type,
      device: "web",
      token: "",
      city: tripData?.city,
      user_id: tripData?.user_id,
      payment_type: tripData?.payment_type,
      payment_type1: tripData?.payment_type1,
      service_type_id1: tripData?.payment_type_id1,
      source_address: tripData?.source_address,
      destination_address: tripData?.destination_address,
      trip_type_option: tripData?.trip_type || tripData?.trip_type_option,
      service_type_id: tripData?.service_type_id,
      select_user: "User",
      first_name:
        tripData?.user_detail?.first_name || tripData?.user_detail?.name,
      last_name: tripData?.user_detail?.last_name,
      phone: tripData?.user_detail?.phone,
      email: tripData?.user_detail?.email,
      provider_type: tripData?.provider_type,
      provider_id: tripData?.provider_type_id,
      provider_full_name: tripData?.provider_detail?.first_name,
      provider_phone: tripData?.provider_detail?.phone,
      carrentalids: "",
      car_rental_id: "",
      select_trip_provider: "",
    };

    Object.entries(payload)?.map(([key, value]) => {
      // @ts-ignore
      setFormField(key, value);
    });
    if (triggerFrom === "dashboard") {
      // @ts-ignore
      navigation.getParent("RightDrawer").openDrawer();
    } else {
      // @ts-ignore
      navigation.navigate("Protected", {
        screen: "Dashboard",
        params: {
          openTripEditForm: true,
        },
      });
      return;
    }
  };

  return (
    <TouchableOpacity
      onPress={handleEditTripDetails}
      style={{
        position: "absolute",
        top: 60,
        right: 0,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderBottomLeftRadius: 7,
        zIndex: 100,
        ...style,
      }}
    >
      <Icon1 name="pencil" size={20} color="black" />
    </TouchableOpacity>
  );
};
