import React, { useCallback, useEffect, useMemo } from "react";
import ProtectedWrapper from "../../hoc/ProtectedWrapper";
import { InvoiceUI, invoiceTitlesValues } from "./InvoiceUI";
import { TripContextProvider } from "../../../contexts/tripDetailsContext/TripContextProvider";
import { useUserApis } from "../../../apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { InvoiceHeader } from "./InvoiceHeader";
import useSocket from "../../../hooks/createTripWithOTP/useSocket";
import { useNavigation } from "@react-navigation/native";

export function Invoice() {
  const tripData = useSelector((state) => {
    // @ts-ignore
    return state?.trip;
  });

  const {
    getUserInvoice,
    data: userInvoiceResponse,
    loading: isTripInvoiceDetailsLoading,
  } = useUserApis();
  const navigation = useNavigation();

  const navigateToOnTripComplete = () => {
    // @ts-ignore
    navigation.replace("Protected", { screen: "UserFeedback" });
  };
  useSocket({ navigateToOnTripComplete });

  useEffect(() => {
    const init = async () => {
      if (tripData?.trip?._id || tripData?.trip_id) {
        const userDetails = JSON.parse(
          // @ts-ignore
          await AsyncStorage.getItem("@user_details")
        );

        const payload = {
          user_id: userDetails?.user_id,
          token: userDetails?.token,
          trip_id: tripData?.trip?._id || tripData?.trip_id,
        };
        getUserInvoice({ payload });
      }
    };
    init();
  }, [tripData]);

  const memoizedUserInvoice = useMemo(
    () =>
      userInvoiceResponse && {
        // @ts-ignore
        ...userInvoiceResponse?.trip,
        // @ts-ignore
        base_price: userInvoiceResponse?.tripservice?.base_price,
      },
    [userInvoiceResponse]
  );

  const getInvoiceLabelValue = useCallback(
    (key: any) => {
      if (memoizedUserInvoice) {
        return Object.entries(memoizedUserInvoice)?.find(
          ([apiTripkey]) => apiTripkey === key
        )?.[1];
      }
    },
    [memoizedUserInvoice]
  );

  const memorizedTripData = useMemo(
    () => Object.entries(invoiceTitlesValues),
    [invoiceTitlesValues]
  );

  const memorizedTotalAmountToPay = useMemo(
    // @ts-ignore
    () => parseFloat(memoizedUserInvoice?.total)?.toFixed(1),
    [memoizedUserInvoice]
  );

  return (
    <>
      <InvoiceHeader />
      <ProtectedWrapper backgroundColor="#263238">
        <TripContextProvider>
          <InvoiceUI
            isTripInvoiceDetailsLoading={isTripInvoiceDetailsLoading}
            memoizedUserInvoice={memoizedUserInvoice}
            getInvoiceLabelValue={getInvoiceLabelValue}
            memorizedTripData={memorizedTripData}
            memorizedTotalAmountToPay={memorizedTotalAmountToPay}
          />
        </TripContextProvider>
      </ProtectedWrapper>
    </>
  );
}
