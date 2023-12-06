/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useUserApis } from "../../../apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";

const DispatcherDetails = () => {
  const {
    getDispatcherDetails,
    data: dispatcherDetails,
    // apiError,
  } = useUserApis();

  const getDispatcherDetailsFn = useCallback(async () => {
    try {
      const dispatcherId = await AsyncStorage.getItem("@dispatcher_id");

      const payload = {
        dispatcherId: dispatcherId,
      };
      await getDispatcherDetails({ payload });
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => {
    getDispatcherDetailsFn();
  }, [getDispatcherDetailsFn]);

  return (
    <View style={[styles.container, { backgroundColor: "#6D8650" }]}>
      <View style={styles.profile}>
        <View
          style={{
            paddingRight: 24,
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Icon name="user" size={25} color="#fff" />
          <Text style={styles.fullName}>Dispatcher Details</Text>
        </View>

        <View>
          <Text style={styles.fullName}>
            {/* @ts-ignore */}
            {dispatcherDetails?.dispatcher?.first_name} {/* @ts-ignore */}
            {dispatcherDetails?.dispatcher?.last_name}
          </Text>
          <Text style={styles.email}>
            {" "}
            {/* @ts-ignore */}
            {dispatcherDetails?.dispatcher?.email}
          </Text>
          <Text style={styles.phone}>
            {" "}
            {/* @ts-ignore */}
            {dispatcherDetails?.dispatcher?.country_phone_code}-{" "}
            {/* @ts-ignore */}
            {dispatcherDetails?.dispatcher?.phone}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profile: {
    flex: 2,
  },
  contact: {
    flex: 1,
    alignItems: "flex-end",
  },
  fullName: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
  },
  email: {
    fontSize: 13,
    color: "#fff",
  },
  phone: {
    fontSize: 13,
    color: "#fff",
  },
});

export default DispatcherDetails;
