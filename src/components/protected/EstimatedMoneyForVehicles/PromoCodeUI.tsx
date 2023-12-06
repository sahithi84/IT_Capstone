import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../Button";
import { useUserApis } from "../../../apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import { CircleGreen, CircleOption, CrossSymbol } from "../../../svgs";
import { useTheme } from "../../../theme";
import { useDispatch, useSelector } from "react-redux";
import { clearPromoCode, setPromoCode } from "../../../redux/promoCodeSlice";
import { errorMessages } from "../../../utils/errorMessages";

export default function PromoCodeUI() {
  const [promoCode, setSelectedPromoCode] = useState("");
  const [openPromoCodesModal, setOpenPromoCodesModal] = useState(false);
  const [promoCodeUsed, setPromoCodeUsed] = useState(false);
  const [isPromoCodeApplied, setIsPromoCodeApplied] = useState(false);

  const dispatch = useDispatch();

  const handleSelectPromoCode = (promoCode: string) => {
    // @ts-ignore
    setPromoCodeUsed(promoCode?.code_uses === 0);
    setSelectedPromoCode(promoCode);
  };
  const { getPromoCodes, data: promoCodesList } = useUserApis();

  const { applyPromoCode, data: applyPromoCodeResponse } = useUserApis();

  // const { tripData } = useSelector((state) => {
  //   // @ts-ignore
  //   return state?.trip?.trip;
  // });

  useEffect(() => {
    const init = async () => {
      const userDetails = JSON.parse(
        // @ts-ignore
        await AsyncStorage.getItem("@user_details")
      );

      const payload = {
        user_id: userDetails?.user_id,
        token: userDetails?.token,
      };
      getPromoCodes({ payload });
    };
    init();
  }, []);

  const handleOpenModal = () => {
    setOpenPromoCodesModal(true);
  };

  useEffect(() => {
    if (isPromoCodeApplied) {
      dispatch(clearPromoCode());
      setIsPromoCodeApplied(true);
    } else {
      // handleOpenModal();
    }
  }, []);

  const handleApplyPromoCode = () => {
    const init = async () => {
      const userDetails = JSON.parse(
        // @ts-ignore
        await AsyncStorage.getItem("@user_details")
      );

      const payload = {
        // @ts-ignore
        promocode: promoCode?.promocode,
        user_id: userDetails?.user_id,
        country_id: "63c8fe9ecbf8e5299eb06a3c",
        city_id: "6401b19d7e59316793278d8c",
        token: userDetails?.token,
        // city_id:
        //   tripData?.city_id || tripData?.city_id || tripData?.trip?.city_id,
        // trip_id: tripData?.trip_id || tripData?._id || tripData?.trip?._id,
        payment_mode: 0,
      };

      applyPromoCode({ payload });
    };
    init();
  };

  useEffect(() => {
    // @ts-ignore
    if (applyPromoCodeResponse && applyPromoCodeResponse?.success === true) {
      // @ts-ignore
      const codeValue = promoCode.code_value;

      setIsPromoCodeApplied(true);
      dispatch(
        setPromoCode({
          amountToBeReduce: codeValue,
          // @ts-ignore
          codeType: promoCode?.code_type,
          promoCodeApplied: true,
          // @ts-ignore
          promoCode: promoCode?.promocode,
          // @ts-ignore
          promoCodeId: promoCode?._id,
        })
      );
      setOpenPromoCodesModal(false);
    } else if (
      applyPromoCodeResponse &&
      // @ts-ignore
      applyPromoCodeResponse?.success === false
    ) {
      Alert.alert(
        "Promo Code Status",
        // @ts-ignore
        errorMessages[applyPromoCodeResponse?.error_code]
      );
    }
  }, [applyPromoCodeResponse]);

  return (
    <View
      // @ts-ignore
      style={{
        flexDirection: "row",
        alignItems: "space-between",
        paddingTop: 12,
        paddingHorizontal: 19,
      }}
    >
      <Button
        color={isPromoCodeApplied ? "red" : "#00AE5A"}
        wrapperStyle={{
          borderRadius: 200,
          borderWidth: 1,
          borderColor: "black",
          height: 31,
          paddingHorizontal: 24,
          paddingVertical: 0,
        }}
        title={isPromoCodeApplied ? "Remove Promo Code" : "Apply Promo Code"}
        textStyles={{
          color: "white",
          fontSize: 12,
          fontFamily: "Poppins-Light",
        }}
        // @ts-ignore
        onPress={handleOpenModal}
      />

      <PromoCodesModal
        visible={openPromoCodesModal}
        onClose={() => setOpenPromoCodesModal(false)}
        promoCodesList={promoCodesList}
        selectedPromoCode={promoCode}
        handleSelectPromoCode={handleSelectPromoCode}
        handleApplyPromoCode={handleApplyPromoCode}
      />
    </View>
  );
}

const PromoCodesModal = ({
  visible,
  onClose,
  promoCodesList,
  selectedPromoCode,
  handleSelectPromoCode,
  handleApplyPromoCode,
}: any) => {
  const theme = useTheme();
  return (
    <Modal
      isVisible={visible}
      onDismiss={onClose}
      style={{
        backgroundColor: "white",
        padding: 16,
        margin: 16,
        borderRadius: 25,
        flex: 2 / 3,
        position: "relative",
        marginTop: 100,
      }}
    >
      <TouchableOpacity
        onPress={onClose}
        style={{ position: "absolute", top: -10, right: -10 }}
      >
        <CrossSymbol />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontFamily: "JockeyOne-Regular",
            fontSize: 24,
            lineHeight: 34,
            color: "#000000",
            textAlign: "center",
            padding: 10,
          }}
        >
          Select Any of the Promo Code
        </Text>
        {promoCodesList?.map((promoCode: any, index: any) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSelectPromoCode(promoCode)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginTop: 10,
              borderBottomWidth: index === promoCodesList?.length - 1 ? 0 : 1,
              paddingBottom: 12,
            }}
          >
            <View>
              {selectedPromoCode?.promocode === promoCode?.promocode ? (
                <View style={{ margin: 5 }}>
                  <CircleGreen />
                </View>
              ) : (
                <View style={{ margin: 5 }}>
                  <CircleOption />
                </View>
              )}
            </View>

            <View>
              <Text
                style={{
                  fontFamily: "Poppins-Light",
                  fontSize: 14,
                  lineHeight: 24,
                  textAlign: "center",
                  color: "#000000",
                }}
              >
                {promoCode?.promocode}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Button
        color={"#00AE5A"}
        wrapperStyle={{
          borderRadius: 29,
          paddingHorizontal: 36,
          marginTop: 24,
        }}
        title={"Apply Promo Code"}
        // @ts-ignore
        onPress={handleApplyPromoCode}
        textStyles={{
          ...theme.fontSizes.heading5,
          fontFamily: "Poppins-Medium",
        }}
        // processing={isCancellingTrip}
      />
    </Modal>
  );
};
