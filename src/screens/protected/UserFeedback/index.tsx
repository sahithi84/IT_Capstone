import { View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { themes } from "../../../theme";
import ProtectedWrapper from "../../../components/hoc/ProtectedWrapper";
import { Button } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import {
  FiveStarEmoji,
  FourStarEmoji,
  OneStarEmoji,
  ThreeStarEmoji,
} from "../../../svgs";
import { TwoStarEmoji } from "../../../svgs/TwoStarEmoji";
import { FeedbackOptions } from "../../../components/protected/UserFeedback/FeedbackOptions";
import { UserFeedbackHeader } from "../../../components/protected/UserFeedback/Header";
import { UserProfileCardInUserFeedback } from "../../../components/protected/UserFeedback/UserProfileCardInUserFeedback";
import SliderWithEmoji from "../../../components/protected/UserFeedback/SliderWithEmoji";
import UserCommentForDriver from "../../../components/protected/UserFeedback/UserCommentForDriver";
import { useUserApis } from "../../../apis";
import { useDispatch } from "react-redux";
import { setTrip } from "../../../redux/tripSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { errorMessages } from "../../../utils/errorMessages";
import { pushToDiscord } from "../../../utils/pushToDiscord";

export const getEmojiBySliderValue = (value: any) => {
  switch (value) {
    case 5:
      return {
        icon: <FiveStarEmoji />,
        backgroundColor: "#00AE5A",
      };
    case 4:
      return {
        icon: <FourStarEmoji />,
        backgroundColor: "#96AE00",
      };
    case 3:
      return {
        icon: <ThreeStarEmoji />,
        backgroundColor: "#E8CE41",
      };
    case 2:
      return {
        icon: <TwoStarEmoji />,
        backgroundColor: "#FF7910",
      };
    case 1:
      return {
        icon: <OneStarEmoji />,
        backgroundColor: "#EE5325",
      };
    default:
      return;
  }
};

const userFeedbackOptions = [
  {
    title: "Hygienic",
    value: "Hygiene",
    isSelected: false,
  },
  {
    title: "Expert Driving",
    value: "Expert Driving",
    isSelected: false,
  },
  {
    title: "Responsible",
    value: "Responsible",
    isSelected: false,
  },
  {
    title: "Professional",
    value: "proficianal",
    isSelected: false,
  },
  {
    title: "Punctuality",
    value: "punctuality",
    isSelected: false,
  },
  {
    title: "Good behaviour",
    value: "Good Behaviour",
    isSelected: false,
  },
  {
    title: "Respectful",
    value: "Respectful",
    isSelected: false,
  },
];

const UserFeedback = () => {
  const { fetchUserTripDetails, data: userData } = useUserApis();
  // console.log(
  //   "🚀 ~ file: index.tsx:98 ~ UserFeedback ~ userData:",
  //   JSON.stringify(userData)
  // );

  useEffect(() => {
    const init = async () => {
      const userDetails = JSON.parse(
        // @ts-ignore
        await AsyncStorage.getItem("@user_details")
      );

      const completedTripId = await AsyncStorage.getItem("@completed_trip_id");
      console.log(
        "🚀 ~ file: index.tsx:123 ~ init ~ completedTripId:",
        completedTripId
      );

      const payload = {
        user_id: userDetails?.user_id,
        token: userDetails?.token,
        trip_id: completedTripId,
      };
      console.log("🚀 ~ file: index.tsx:123 ~ init ~ payload:", payload);
      fetchUserTripDetails({ payload });
    };
    init();
  }, []);

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [allOptions, setAllOptions] = useState(userFeedbackOptions);
  const { userReview, data: reviewResponse, loading } = useUserApis();
  const handleUserSelectedFeedbackOption = (
    selectedUserFeedbackOptionTitle: any
  ) => {
    setAllOptions((prevState) =>
      prevState.map((option) =>
        option.title === selectedUserFeedbackOptionTitle
          ? { ...option, isSelected: !option.isSelected }
          : option
      )
    );
  };
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    const init = async () => {
      console.log(
        "🚀 ~ file: index.tsx:152 ~ init ~ reviewResponse:",
        reviewResponse
      );
      // @ts-ignore
      if (reviewResponse && reviewResponse?.success === true) {
        // dispatch(clearTrip());

        await AsyncStorage.removeItem("@completed_trip_id");
        console.log("remove completedTripId");
        // @ts-ignore
        navigation.navigate("Protected", {
          screen: "Dashboard",
        });
        // @ts-ignore
      } else if (reviewResponse && reviewResponse?.success === false) {
        console.log(
          "🚀 ~ file: index.tsx:162 ~ useEffect ~ reviewResponse:",
          reviewResponse
        );
        pushToDiscord({
          fieldName: "user feedback failure response",
          discordData: Object.keys(reviewResponse),
        });
        // @ts-ignore
        Alert.alert(errorMessages[reviewResponse?.error_code]);
        // await AsyncStorage.removeItem("@completed_trip_id");

        console.log("remove completedTripId");
        // @ts-ignore
        navigation.navigate("Protected", {
          screen: "Dashboard",
        });
      }
    };
    init();
  }, [reviewResponse]);

  const handleSubmit = async () => {
    const completedTripId = await AsyncStorage.getItem("@completed_trip_id");

    console.log(
      "🚀 ~ file: index.tsx:123 ~ init ~ completedTripId:",
      completedTripId
    );
    const userDetails = JSON.parse(
      // @ts-ignore
      await AsyncStorage.getItem("@user_details")
    );
    console.log(
      "🚀 ~ file: index.tsx:190 ~ handleSubmit ~ userDetails:",
      userDetails
    );

    let feedbackObj = {};
    allOptions
      ?.filter((option) => {
        return option?.isSelected === true;
      })
      ?.forEach((option) => {
        feedbackObj = {
          ...feedbackObj,
          [`${option?.title}`]: option?.isSelected,
        };
      });
    const payload = {
      user_id: userDetails?.user_id,
      trip_id: completedTripId,
      review: review,
      rating: rating,
      feedback: {
        ...feedbackObj,
      },
    };
    console.log("🚀 ~ file: index.tsx:212 ~ handleSubmit ~ payload:", payload);
    pushToDiscord({
      fieldName: "user feedback payload",
      discordData: payload,
    });

    userReview({ payload });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: getEmojiBySliderValue(rating)?.backgroundColor,
      }}
    >
      <ProtectedWrapper
        // @ts-ignore
        backgroundColor={getEmojiBySliderValue(rating)?.backgroundColor}
      >
        <View
          style={{
            alignItems: "center",
            paddingTop: 24,
            flex: 1,
            backgroundColor: getEmojiBySliderValue(rating)?.backgroundColor,
            paddingHorizontal: 19,
          }}
        >
          <UserFeedbackHeader />
          <UserProfileCardInUserFeedback
            driverName={`${userData?.trip?.provider_first_name} ${userData?.trip?.provider_last_name}`}
            rating={`${userData?.provider?.rate}`}
          />

          <SliderWithEmoji rating={rating} setRating={setRating} />

          <FeedbackOptions // @ts-ignore
            allOptions={allOptions}
            handleUserSelectedFeedbackOption={handleUserSelectedFeedbackOption}
          />
          <UserCommentForDriver setReview={setReview} review={review} />
        </View>
      </ProtectedWrapper>
      <View style={{ paddingTop: 20, paddingHorizontal: 19 }}>
        <Button
          color={"#000000"}
          wrapperStyle={{ marginBottom: 40, width: "100%", borderRadius: 29 }}
          title="Submit"
          onPress={handleSubmit}
          textStyles={{
            ...themes.fontSizes.heading5,
            fontFamily: "Poppins-Medium",
          }}
          // processing={isApiCalling}
        />
      </View>
    </View>
  );
};

export default UserFeedback;
