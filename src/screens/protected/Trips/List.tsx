/* eslint-disable react-native/no-inline-styles */
import React, {
  memo,
  // useCallback, useEffect,
  useMemo,
} from "react";
import { View, Text, FlatList } from "react-native";
import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import TripsCard from "../../../components/protected/TripsList/TripsCard";
// import {useUserApis} from '../../../apis';
import Icon from "react-native-vector-icons/FontAwesome5"; // You can choose a different icon library if you prefer
import { TouchableOpacity } from "react-native-gesture-handler";
import { getTripStatus } from "../../../utils/getTripStatus";
import { SkeletonItem } from "../../../components/general/SkeletonItem";
import moment from "moment";
import NoRecordsFound from "../../../components/general/NotFound";
import { useGetTrips } from "../../../hooks/trips/useGetTrips";
import _ from "lodash";
// import {
//   SearchbyPhone,
//   useGetPhoneFilterValues,
// } from '../../../components/general/SearchbyPhone';

interface TripItem {
  id: number;
  title: string;
  status: string;
}

export const TripsFlatList = memo(
  ({
    navigation,
    drawerId,
    tripKey,
    skeletonLoaderItemGap = 50,
    skeletonLoaderContainerTopGap = 30,
    type = "simple",
  }: {
    navigation?: any;
    drawerId: string;
    tripKey: string;
    skeletonLoaderItemGap?: number;
    skeletonLoaderContainerTopGap?: number;
    type: string;
  }) => {
    const { loading, tripsList } = useGetTrips();

    const memorizedTripsList = useMemo(() => {
      if (tripsList) {
        // @ts-ignore
        return _.reverse(_.sortBy(tripsList[`${tripKey}`], "unique_id"));
      }
    }, [tripsList]);

    // const {searchResults} = useGetPhoneFilterValues(memorizedTripsList);

    return (
      <>
        {loading ? (
          <View style={{ marginTop: skeletonLoaderContainerTopGap }}>
            {Array.from({ length: 10 }).map((item, index) => (
              <View key={index} style={{ marginBottom: skeletonLoaderItemGap }}>
                <SkeletonItem />
              </View>
            ))}
          </View>
        ) : null}
        {/* @ts-ignore */}
        {memorizedTripsList && memorizedTripsList?.length === 0 ? (
          <NoRecordsFound message="No Trips Found" />
        ) : null}
        {memorizedTripsList ? (
          <>
            {/* {memorizedTripsList?.length > 0 ? (
            <SearchbyPhone data={memorizedTripsList} />
          ) : null} */}
            <FlatList
              data={memorizedTripsList}
              keyExtractor={(__, index) => index?.toString()}
              renderItem={({ item }: any) => {
                // @ts-ignore
                return memorizedTripsList?.length > 0 ? (
                  <ListItem
                    item={item}
                    navigation={navigation}
                    drawerId={drawerId}
                    type={type}
                    // @ts-ignore
                    tripCategoryTitle={tripCategoryTitleMapping[`${tripKey}`]}
                    tripKey={tripKey}
                    skeletonLoaderContainerTopGap={
                      skeletonLoaderContainerTopGap
                    }
                    skeletonLoaderItemGap={skeletonLoaderItemGap}
                  />
                ) : null;
              }}
            />
          </>
        ) : null}
      </>
    );
  }
);

function TripsList({ navigation, route }: any) {
  // const navigation = useNavigation();
  const tripKey = route?.params?.key;
  const screenHeading = route?.params?.screenHeading;
  // useGetTrips();

  return (
    <ProtectedWrapper>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 18,
          paddingHorizontal: 24,
          paddingBottom: 12,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            // @ts-ignore
            navigation.replace("Protected", { screen: "Dashboard" });
          }}
          style={{
            backgroundColor: "white",
            borderRadius: 25,
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
            left: -10,
          }}
          hitSlop={{ left: 50, right: 50, top: 50, bottom: 50 }}
        >
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            paddingLeft: 16,
            color: "black",
            left: -15,
          }}
        >
          {screenHeading}
        </Text>
      </View>

      {/* @ts-ignore */}
      <TripsFlatList
        skeletonLoaderItemGap={0}
        skeletonLoaderContainerTopGap={0}
        tripKey={`${tripKey}`}
        navigation={navigation}
        type="single_view"
      />
    </ProtectedWrapper>
  );
}

const ListItem = memo(
  ({
    item,
    navigation,
    drawerId,
    type = "simple",
    tripCategoryTitle = "Requested Trip",
    tripKey,
  }: // skeletonLoaderItemGap,
  // skeletonLoaderContainerTopGap,
  {
    item: TripItem;
    navigation: any;
    drawerId: string;
    type: string;
    skeletonLoaderItemGap: number;
    skeletonLoaderContainerTopGap: number;
    tripCategoryTitle: any;
    tripKey: string;
  }) => {
    const tripData = useMemo(() => item, [item]);
    // const {data: tripData, getTripDetails, loading} = useUserApis();

    // const getTripData = useCallback(async () => {
    //   try {
    //     const payload = {
    //       // @ts-ignore
    //       trip_id: item?._id,
    //     };
    //     await getTripDetails({payload});
    //   } catch (error) {
    //     return error;
    //   }
    // }, []);

    // useEffect(() => {
    //   getTripData();
    // }, [getTripData]);

    return (
      <>
        <View style={{ paddingHorizontal: 16, paddingBottom: 7 }}>
          {tripData ? (
            <TripsCard
              // @ts-ignore
              id={tripData?.unique_id}
              state={getTripStatus({
                // @ts-ignore
                isProviderAccepted:
                  // @ts-ignore
                  tripData?.is_provider_accepted,
                // @ts-ignore
                isProviderStatus: tripData?.is_provider_status,
              })}
              pickupAt={moment(
                // @ts-ignore
                tripData?.is_schedule_trip
                  ? // @ts-ignore
                    tripData?.server_start_time_for_schedule
                  : // @ts-ignore
                    tripData?.created_at
              ).format("DD MMM 'YY hh:mm a")}
              onCancel={() => {}}
              // @ts-ignore
              tripData={{
                // @ts-ignore
                ...(tripData || {}),
                // @ts-ignore
                typename: item?.typename,
              }}
              navigation={navigation}
              drawerId={drawerId}
              type={type}
              tripKey={tripKey}
              // @ts-ignore
              tripCategoryTitle={tripCategoryTitle}
            />
          ) : null}
        </View>
      </>
    );
  }
);

const tripCategoryTitleMapping = {
  request_list: "Requested Trip",
  accepted_request_list: "Accepted Trip",
  arrived_request_list: "Arrived Trip",
  started_request_list: "Started Trip",
};

export default memo(TripsList);
