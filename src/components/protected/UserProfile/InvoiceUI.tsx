import { View, Text } from "react-native";
import React from "react";
import { MapInvoice, RupeeInvoice, TimerInvoice, Tree } from "../../../svgs";
import { themes } from "../../../theme";
import { InvoiceLabelValues } from "./InvoiceLabelValues";
import { SkeletonItem } from "../../general/SkeletonItem";
import { getPrefillablePaymentType } from "../../../utils/getPrefillablePaymentType";

export function InvoiceUI({
  memoizedUserInvoice,
  isTripInvoiceDetailsLoading,
  getInvoiceLabelValue,
  memorizedTripData,
  memorizedTotalAmountToPay,
}: any) {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          borderRadius: 30,
        }}
      >
        <View style={{ paddingHorizontal: 19 }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 15,
                marginTop: 24,
              }}
            >
              <View>
                <View style={{ alignSelf: "center" }}>
                  <MapInvoice />
                </View>

                <View>
                  <Text
                    style={{
                      color: "#000000",
                      ...themes.fontSizes.largeMedium,
                      fontFamily: "Poppins-Medium",
                    }}
                  >
                    {memoizedUserInvoice?.total_distance} KM
                  </Text>
                </View>
              </View>

              <View>
                <View style={{ alignSelf: "center" }}>
                  <RupeeInvoice />
                </View>
                <Text
                  style={{
                    color: "#000000",
                    ...themes.fontSizes.largeMedium,
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  {getPrefillablePaymentType({
                    paymentMode: memoizedUserInvoice?.payment_mode,
                  })}
                </Text>
              </View>
              <View>
                <View style={{ alignSelf: "center" }}>
                  <TimerInvoice />
                </View>
                <Text
                  style={{
                    color: "#000000",
                    ...themes.fontSizes.largeMedium,
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  {memoizedUserInvoice?.total_time} Minutes
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                borderColor: "#9ABE5B",
                borderRadius: 30,
                borderWidth: 1,
                padding: 19,
                borderStyle: "dashed",
                backgroundColor: "#E9FFD7",
                marginTop: 24,
              }}
            >
              <View>
                {isTripInvoiceDetailsLoading ? (
                  <View style={{ marginTop: 0 }}>
                    {Array.from({ length: 2 }).map((_, index) => (
                      <View
                        key={index}
                        style={{ marginBottom: 0, width: "90%" }}
                      >
                        <SkeletonItem />
                      </View>
                    ))}
                  </View>
                ) : (
                  <InvoiceLabelValues
                    invoiceTripData={memorizedTripData}
                    getInvoiceLabelValue={getInvoiceLabelValue}
                  />
                )}
              </View>
              <View
                style={{
                  borderColor: "#9ABE5B",
                  borderWidth: 1,
                  borderStyle: "dashed",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingVertical: 16,
                  paddingHorizontal: 15,
                }}
              >
                <View>
                  <Text
                    style={{
                      ...themes.fontSizes.largeMedium,
                      fontFamily: "Poppins-Medium",
                      color: "#000000",
                    }}
                  >
                    Total
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      fontFamily: "Poppins-Bold",
                      ...themes.fontSizes.heading4,
                      color: "#00AE5A",
                    }}
                  >
                    {memorizedTotalAmountToPay}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "#000000",
                  ...themes.fontSizes.small,
                  fontFamily: "Poppins-Medium",
                  textAlign: "center",
                  paddingTop: 19,
                }}
              >
                {`You have to pay ${memorizedTotalAmountToPay} cash`}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            paddingTop: 16,
          }}
        >
          <Tree />
        </View>

        <Text
          style={{
            textAlign: "center",
            backgroundColor: "#E9FFD7",
            ...themes.fontSizes.largeMedium,
            paddingVertical: 16,
            paddingHorizontal: 12,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              color: "#000000",
            }}
          >
            800gms{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 16,
              color: "#000000",
            }}
          >
            CO2 saved with this ride
          </Text>
        </Text>

        <View style={{}}>
          <Text
            style={{
              backgroundColor: "#00AE5A",
              ...themes.fontSizes.largeMedium,
              textAlign: "center",
              paddingVertical: 17,
              paddingHorizontal: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "#FFFFFF",
              }}
            >
              1200+Tonnes
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Light",
                color: "#FFFFFF",
              }}
            >
              {" "}
              CO2 saved till October{" "}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}

export const invoiceTitlesValues = {
  base_price: {
    title: "Base Price",
    value: "1380.00",
  },
  tax_fee: {
    title: "Tax",
    value: "60.00",
  },
  promo_payment: {
    title: "Promotion Applied",
    value: "40.00",
  },
  cash_payment: {
    title: "Paid by Cash",
    value: "1400.00",
  },
};
