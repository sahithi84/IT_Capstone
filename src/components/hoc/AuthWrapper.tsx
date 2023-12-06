/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  ScrollView,
  Keyboard,
  View,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { Arrow } from "../../svgs";

/**
 * @author
 * @function AuthScreenWrapper
 **/
// @ts-ignore
const AuthScreenWrapper = ({
  children,
  showBackArrowIcon = true,
  showLoginGradient = false,
  ...props
}: any) => {
  const navigation = useNavigation();
  const safeAreaViewStyle = {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
    mariginHorizontal: 24,
    ...props.wrapperStyles,
  };
  const keyboardAvoidingViewStyles = {
    flex: 1,
    ...props.keyboardAvoidingViewStyles,
  };
  const touchableWithoutFeedbackStyle = {
    flex: 1,
  };
  const contentContainerStyle = {
    flexGrow: 1,
  };
  const backArrowIconWrapperStyle = {
    // paddingBottom: 41.18,
    ...props.backArrowIconWrapperStyle,
  };

  return showLoginGradient ? (
    <SafeAreaView style={{ ...safeAreaViewStyle }}>
      <LinearGradient
        colors={["#FFF5C3", "#9452A5"]}
        style={styles.linearGradient}
      >
        <KeyboardAvoidingView
          enabled
          style={{ ...keyboardAvoidingViewStyles }}
          // @ts-ignore
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={0}
        >
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={{ ...touchableWithoutFeedbackStyle }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentInsetAdjustmentBehavior="automatic"
              style={{
                ...{
                  flex: 1,
                  ...props.scrollViewStyles,
                },
              }}
              contentContainerStyle={{ ...contentContainerStyle }}
              keyboardShouldPersistTaps={"handled"}
            >
              <View
                style={{
                  marginBottom: 32,
                  paddingBottom: 42,
                  ...props.childrenWrapperStyles,
                }}
              >
                <View style={{ ...backArrowIconWrapperStyle }}>
                  {showBackArrowIcon ? (
                    <Pressable
                      hitSlop={{ top: 30, left: 30, right: 30, bottom: 30 }}
                      onPress={() => {
                        props.onBackPress
                          ? props.onBackPress()
                          : // @ts-ignore
                            navigation.canGoBack() && navigation.pop();
                      }}
                      style={{
                        left: -10,
                        backgroundColor: "transparent",
                        width: 50,
                      }}
                    >
                      <Arrow />
                    </Pressable>
                  ) : null}
                </View>
                {children}
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={{ ...safeAreaViewStyle }}>
      <KeyboardAvoidingView
        enabled
        style={{ ...keyboardAvoidingViewStyles }}
        // @ts-ignore
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={0}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ ...touchableWithoutFeedbackStyle }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentInsetAdjustmentBehavior="automatic"
            style={{
              ...{
                flex: 1,
                ...props.scrollViewStyles,
              },
            }}
            contentContainerStyle={{ ...contentContainerStyle }}
            keyboardShouldPersistTaps={"handled"}
          >
            <View
              style={{
                marginBottom: 32,
                paddingBottom: 42,
                ...props.childrenWrapperStyles,
              }}
            >
              <View style={{ ...backArrowIconWrapperStyle }}>
                {showBackArrowIcon ? (
                  <Pressable
                    hitSlop={{ top: 30, left: 30, right: 30, bottom: 30 }}
                    onPress={() => {
                      props.onBackPress
                        ? props.onBackPress()
                        : // @ts-ignore
                          navigation.canGoBack() && navigation.pop();
                    }}
                    style={{
                      left: -10,
                      backgroundColor: "transparent",
                      width: 50,
                    }}
                  >
                    <Arrow />
                  </Pressable>
                ) : null}
              </View>
              {children}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AuthScreenWrapper;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 5,
  },
});
