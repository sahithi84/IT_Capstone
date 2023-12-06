import { makeObservable, observable, action } from "mobx";

type CreateTripFormTypes = {
  latitude: string;
  longitude: string;
  d_latitude: string;
  d_longitude: string;
  timezone: string;
  city_id: string;
  payment_id: string;
  is_ride_later: string;
  start_time: string;
  country: string;
  country_phone_code: string;
  payment_mode: number;
  is_surge_hours: string;
  surge_multiplier: string;
  user_type: string;
  user_type_id: string;
  trip_type: string;
  device: string;
  token: string;
  city: string;
  user_id: string;
  payment_type: string;
  payment_type1: string;
  service_type_id1: string;
  source_address: string;
  destination_address: string;
  trip_type_option: number;
  service_type_id: string;
  select_user: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  provider_type: string;
  provider_id: string;
  provider_full_name: string;
  provider_phone: string;
  carrentalids: string;
  car_rental_id: string;
  select_trip_provider: string;
  corporate_id: any;
  created_by: string;
  pin_icon: string;
};

const formState = () => {
  const formData: CreateTripFormTypes = {
    created_by: "4",
    latitude: "",
    longitude: "",
    d_latitude: "",
    d_longitude: "",
    timezone: "",
    city_id: "",
    payment_id: "0",
    is_ride_later: "0",
    start_time: "",
    country: "India",
    country_phone_code: "+91",
    payment_mode: 1,
    is_surge_hours: "",
    surge_multiplier: "",
    user_type: "2", // 2 for dispatcher
    user_type_id: "1", // dispatcher_id
    trip_type: "3", // 3 for dispatcher - trip created by dispatcher variable
    device: "web",
    token: "",
    city: "",
    user_id: "",
    payment_type: "1", // to prefill the payment mode
    payment_type1: "",
    service_type_id1: "",
    source_address: "",
    destination_address: "",
    trip_type_option: 4, // to prefill the trip type
    service_type_id: "",
    select_user: "User",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    provider_type: "1", // don't know
    provider_id: "",
    provider_full_name: "",
    provider_phone: "",
    carrentalids: "",
    car_rental_id: "",
    select_trip_provider: "",
    corporate_id: null,
    pin_icon: "",
  };

  // @ts-ignore
  const formDataToBeClear: CreateTripFormTypes = {
    latitude: "",
    longitude: "",
    d_latitude: "",
    d_longitude: "",
    timezone: "",
    city_id: "",
    start_time: "",
    is_surge_hours: "",
    surge_multiplier: "",
    token: "",
    city: "",
    user_id: "",
    payment_type1: "",
    service_type_id1: "",
    source_address: "",
    destination_address: "",
    service_type_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    provider_id: "",
    provider_full_name: "",
    provider_phone: "",
    carrentalids: "",
    car_rental_id: "",
    select_trip_provider: "",
    corporate_id: null,
    pin_icon: "",
  };

  // @ts-ignore
  const errors: CreateTripFormTypes = {
    latitude: "",
    longitude: "",
    d_latitude: "",
    d_longitude: "",
    timezone: "",
    city_id: "",
    payment_id: "",
    is_ride_later: "",
    start_time: "",
    country: "",
    country_phone_code: "",
    payment_mode: 1,
    is_surge_hours: "",
    surge_multiplier: "",
    user_type: "",
    user_type_id: "",
    trip_type: "",
    device: "",
    token: "",
    city: "",
    user_id: "",
    payment_type: "",
    payment_type1: "",
    service_type_id1: "",
    source_address: "",
    destination_address: "",
    trip_type_option: 4,
    service_type_id: "",
    select_user: "",
    first_name: "",
    last_name: "",
    phone: "",
    provider_type: "",
    provider_id: "",
    provider_full_name: "",
    provider_phone: "",
    carrentalids: "",
    car_rental_id: "",
    select_trip_provider: "",
    pin_icon: "",
  };

  const setFormField = action(
    (fieldName: keyof typeof formData, value: string) => {
      // @ts-ignore
      formData[fieldName] = value;
      clearFieldError(fieldName);
    }
  );

  const validateField = (
    fieldName: keyof typeof formData,
    errorMessage: string
  ) => {
    if (!formData[fieldName]) {
      // @ts-ignore
      errors[fieldName] = errorMessage;
    } else {
      // @ts-ignore
      errors[fieldName] = "";
    }
  };

  const clearFieldError = (fieldName: keyof typeof errors) => {
    // @ts-ignore
    errors[fieldName] = "";
  };
  const clearFields = () => {
    Object.keys(formDataToBeClear)?.map((key) => {
      // @ts-ignore
      formData[key] = "";
    });
  };
  const clearField = (fieldName: keyof typeof formData) => {
    // @ts-ignore
    formData[fieldName] = "";
  };

  const validateForm = () => {
    // Source Dropdown
    validateField("latitude", "Latitude is required");
    validateField("longitude", "Longitude is required");
    validateField("source_address", "Source Address is required");

    // Destination Dropdown
    validateField("d_latitude", "Destination Latitude is required");
    validateField("d_longitude", "Destination Longitude is required");
    validateField("destination_address", "Destination Address is required");

    // Trip Type Dropdown
    validateField("trip_type_option", "Trip Type Option is required");

    // Service Type Dropdown
    validateField("service_type_id", "Service Type ID is required");

    // Provider Type Dropdown
    validateField("provider_type", "Provider Type is required");

    // Payment Type Dropdown
    validateField("payment_type", "Payment Type is required");
    validateField("payment_id", "Payment ID is required");
    validateField("payment_mode", "Payment Mode is required");

    // (Driver) Provider Dropdown
    // Todo-Mahesh: Add correct validations
    // validateField('provider_id', 'Provider ID is required');
    // if (formData?.provider_id === '2') {
    //   validateField('provider_full_name', 'Provider Full Name is required');
    //   validateField('provider_phone', 'Provider Phone is required');
    // }

    // User Dropdown
    validateField("user_type", "User Type is required");
    validateField("user_type_id", "User Type ID is required");
    validateField("user_id", "User ID is required");

    // Prefillable/Enterable User Form
    validateField("first_name", "Full Name is required");
    // Todo: Check with lead for this validation
    // validateField('last_name', 'Last Name is required');
    validateField("phone", "Phone is required");

    // Some Id (Need to check)
    // validateField('carrentalids', 'Car Rental IDs is required');

    // Ride Later CTA
    // validateField('is_ride_later', 'Is Ride Later is required');
  };

  const isFormValid = () => {
    validateForm();
    return Object.values(errors).every((error) => !error);
  };

  const submitForm = () => {
    if (isFormValid()) {
      return true;
    } else {
      return false;
    }
  };

  makeObservable(formData, {
    latitude: observable,
    longitude: observable,
    d_latitude: observable,
    d_longitude: observable,
    timezone: observable,
    city_id: observable,
    payment_id: observable,
    is_ride_later: observable,
    start_time: observable,
    country: observable,
    country_phone_code: observable,
    payment_mode: observable,
    is_surge_hours: observable,
    surge_multiplier: observable,
    user_type: observable,
    user_type_id: observable,
    trip_type: observable,
    device: observable,
    token: observable,
    city: observable,
    user_id: observable,
    payment_type: observable,
    payment_type1: observable,
    service_type_id1: observable,
    trip_type_option: observable,
    service_type_id: observable,
    select_user: observable,
    first_name: observable,
    last_name: observable,
    email: observable,
    phone: observable,
    provider_type: observable,
    provider_id: observable,
    provider_full_name: observable,
    provider_phone: observable,
    carrentalids: observable,
    car_rental_id: observable,
    select_trip_provider: observable,
    corporate_id: observable,
  });

  return {
    formData,
    setFormField,
    submitForm,
    clearFieldError,
    validateField,
    clearFields,
    errors,
    isFormValid,
    clearField,
  };
};

const createTripFormStore = formState();
export { createTripFormStore };
