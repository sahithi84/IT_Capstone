import { useEffect, useMemo, useState } from "react";
import {
  carRentals,
  tabsList,
  rentalOption,
  reorderVehicleTypes,
  getIconByVehicleName,
} from "../../utils/vehicleTypesFunctions";
import { useCreateTripWithOtp } from "../createTripWithOTP/useCreateTripWithOtp";
import { useUserApis } from "../../apis";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { errorMessages } from "../../utils/errorMessages";
import { createTripFormStore } from "../../mobx/withOtpTripStates";

export function useVehilcleWithPricesStates() {
  const [carRentalOptions, setcarRentalOptions] = useState(carRentals);
  const [tabOptions, setTabOptions] = useState(tabsList);
  const [rentcarsoption, setCarRentalOptions] = useState(rentalOption);

  const [selectedVehicle, setSelectedVehicle] = useState({
    vehicleName: "Vehicle",
    vehicleId: "",
    isSelected: false,
  });

  const handleSelectTabOption = (tabTitle: any) => {
    setTabOptions((prevState) =>
      prevState?.map((option: any) =>
        option?.title === tabTitle
          ? { ...option, isSelected: true }
          : { ...option, isSelected: false }
      )
    );
  };

  const [vehicleTypesList, setVehicleTypesList] = useState([]);
  const {
    fetchVehicleTypes,
    data: vehicleTypesResponse,
    loading,
  } = useUserApis();

  const { formData, setFormField } = createTripFormStore;

  useEffect(() => {
    const init = async () => {
      const userDetails = JSON.parse(
        // @ts-ignore
        await AsyncStorage.getItem("@user_details")
      );

      const payload = {
        country: "India",
        latitude: formData?.latitude,
        longitude: formData?.longitude,
        user_id: userDetails?.user_id,
        token: userDetails?.token,
        country_code: "IN",
        d_latitude: formData?.d_latitude,
        d_longitude: formData?.d_longitude,
        is_multiple_stop: 0,
      };
      fetchVehicleTypes({ payload });
    };
    init();
  }, [formData]);

  useEffect(() => {
    const isSourceDestinationSelected =
      formData &&
      formData.latitude &&
      formData.d_latitude &&
      formData.longitude &&
      formData.d_longitude;
    if (!isSourceDestinationSelected) {
      return;
    }
    // @ts-ignore
    if (vehicleTypesResponse && vehicleTypesResponse.success === false) {
      setVehicleTypesList([]);
      // @ts-ignore
      Alert.alert(errorMessages[vehicleTypesResponse?.error_code]);
      // @ts-ignore
    } else if (vehicleTypesResponse && vehicleTypesResponse?.citytypes) {
      // @ts-ignore
      const extractedVehicleDetails = vehicleTypesResponse?.citytypes
        ?.map((vehicle: any) => {
          return {
            cityTypeId: vehicle?._id,
            vehicleName: vehicle?.type_details?.typename,
            isSelected: false,
            icon: getIconByVehicleName(vehicle?.type_details?._id),
            vehicleId: vehicle?.type_details?._id,
            businessStatus: vehicle?.type_details?.is_business,
            distance: ` ${parseFloat(
              vehicle?.estimatedprice?.distance
            )?.toFixed(1)} KM`,
            time: `${parseFloat(vehicle?.estimatedprice?.time)?.toFixed(
              2
            )} Min`,
            estimatedPrice: parseFloat(
              vehicle?.estimatedprice?.estimated_fare
            )?.toFixed(1),
            estimatedReachtime: vehicle?.estimatedReachtime,
            isAirportPrice: vehicle?.estimatedprice?.is_airport_price,
            carRentalList: vehicle?.car_rental_list,
          };
        })
        ?.filter((vehicle: any) => vehicle?.businessStatus === 1);

      setVehicleTypesList(extractedVehicleDetails);
    } else {
    }
  }, [vehicleTypesResponse]);

  const reorderedVehicleTypes = useMemo(
    () => reorderVehicleTypes(vehicleTypesList, "EV - LUXE", 1),
    [vehicleTypesList]
  );

  // const { promoCodeId } = useSelector((state) => {
  //   // @ts-ignore
  //   return state?.promoCode?.promoCode;
  // });

  const handleSelect = (allData: any) => {
    const updatedVehicleTypes = vehicleTypesList?.map((option: any) => {
      if (option?.vehicleId === allData?.vehicleId) {
        setSelectedVehicle({ ...option, isSelected: true });
        setFormField("service_type_id", option?.cityTypeId);

        return { ...option, isSelected: true };
      } else {
        return { ...option, isSelected: false };
      }
    });

    // @ts-ignore
    setVehicleTypesList(updatedVehicleTypes);
  };
  return {
    carRentalOptions,
    tabOptions,
    rentcarsoption,
    setcarRentalOptions,
    setCarRentalOptions,
    setSelectedVehicle,
    selectedVehicle,
    handleSelectTabOption,
    reorderedVehicleTypes,
    handleSelect,
    loading,
    vehicleTypesList,
  };
}
