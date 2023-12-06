/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { useUserApis } from "../../apis";
import { useDispatch } from "react-redux";
import { setConstants } from "../../redux/constantsSlice";
import { TripContextProvider } from "../../contexts/tripDetailsContext/TripContextProvider";

export default function ({
  scrollView = true,
  footer = false,
  backgroundColor = "",
  stickyHeader = <></>,
  stickyFooter = <></>,
  ...props
}) {
  const safeAreaViewStyle = {
    flex: 1,
    backgroundColor: "white",
    ...props.wrapperStyles,
  };

  const dispatch = useDispatch();

  const {
    data: constants,
    getConstants,
    // loading: isConstantsLoading,
  } = useUserApis();

  // React.useEffect(() => {
  //   getConstants();
  // }, []);

  React.useEffect(() => {
    if (constants) {
      dispatch(setConstants(constants));
    }
  }, [constants]);

  return (
    <TripContextProvider>
      <SafeAreaView style={{ ...safeAreaViewStyle }}>
        <KeyboardAvoidingView
          enabled
          style={{
            flex: 1,
            borderColor: "white",
          }}
          // @ts-ignore
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={0}
        >
          {stickyHeader}
          {scrollView ? (
            <ScrollView
              scrollIndicatorInsets={{
                right: 1,
              }}
              nestedScrollEnabled={true}
              contentInsetAdjustmentBehavior="automatic"
              style={{
                ...{
                  flex: 1,
                  backgroundColor: !backgroundColor ? "white" : backgroundColor,
                  width: "100%",
                  borderColor: !backgroundColor ? "white" : backgroundColor,
                },
                ...Platform.select({
                  ios: {
                    shadowOffset: { width: 2, height: 2 },
                    shadowColor: "white",
                    shadowOpacity: 0.4,
                    shadowRadius: 20,
                  },
                }),
              }}
              contentContainerStyle={{
                flexGrow: 1,
                // marginBottom: 40,
                borderColor: "white",
              }}
              keyboardShouldPersistTaps={"handled"}
            >
              <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  borderColor: "black",
                  paddingHorizontal: 12,
                }}
              >
                <>{props.children}</>
              </TouchableWithoutFeedback>
            </ScrollView>
          ) : !footer ? (
            <>
              <View
                style={{
                  paddingHorizontal: 12,
                }}
              >
                {props.children}
              </View>
            </>
          ) : (
            <>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 12,
                }}
              >
                {props.children}
              </View>
            </>
          )}
          {stickyFooter}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TripContextProvider>
  );
}
