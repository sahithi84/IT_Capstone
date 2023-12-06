import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";
import { InputField } from "../../InputField";

export function ProfileUI({
  payload,
  handleChangeInput,
  handleDeleteAccount,
  handleUpdateAccount,
  isAccountDeleting,
}: any) {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        borderRadius: 15,
        paddingTop: 24,
      }}
    >
      <InputField
        value={payload?.first_name}
        style={styles.input}
        placeholderTextColor="#D9D9D9"
        placeholder="First Name"
        onChangeText={(value: any) => handleChangeInput("first_name", value)}
        maxLength={10}
        inputBoxContainerStyle={[styles.inputBoxContainer]}
        // @ts-ignore
        // errorComponent={
        //   phoneError ? (
        //     <Text style={styles.errorText}>{phoneError}</Text>
        //   ) : null
        // }
        // @ts-ignore
        style={{
          paddingVertical: 0,
          // ...theme.fontSizes.large,
          fontFamily: "Poppins-Light",
          height: 50,
        }}
        errorMessageStyle={styles.errorMessageStyle}
      />
      <InputField
        value={payload.last_name}
        style={styles.input}
        placeholderTextColor="#D9D9D9"
        placeholder="Last Name "
        onChangeText={(value: any) => handleChangeInput("last_name", value)}
        maxLength={10}
        inputBoxContainerStyle={[styles.inputBoxContainer]}
        // @ts-ignore
        // errorComponent={
        //   phoneError ? (
        //     <Text style={styles.errorText}>{phoneError}</Text>
        //   ) : null
        // }
        // @ts-ignore
        style={{
          paddingVertical: 0,
          // ...theme.fontSizes.large,
          fontFamily: "Poppins-Light",
          height: 50,
        }}
        errorMessageStyle={styles.errorMessageStyle}
      />
      <InputField
        value={payload?.email}
        style={styles.input}
        placeholderTextColor="#D9D9D9"
        placeholder="Email"
        onChangeText={(value: any) => handleChangeInput("email", value)}
        inputBoxContainerStyle={[
          styles.inputBoxContainer,
          // phoneError ? styles.inputError : null,
          // phone && phoneRegex.test(phone) ? styles.validInput : null,
        ]}
        // @ts-ignore
        // errorComponent={
        //   phoneError ? (
        //     <Text style={styles.errorText}>{phoneError}</Text>
        //   ) : null
        // }
        // @ts-ignore
        style={{
          paddingVertical: 0,
          fontFamily: "Poppins-Light",
          height: 50,
        }}
        errorMessageStyle={styles.errorMessageStyle}
      />
      <InputField
        value={payload?.phone}
        leftIcon={<LeftIcon />}
        style={styles.input}
        placeholderTextColor="#D9D9D9"
        onChangeText={(value: any) => handleChangeInput("phone", value)}
        maxLength={10}
        keyboardType="numeric"
        inputBoxContainerStyle={[
          styles.inputBoxContainer,
          // phoneError ? styles.inputError : null,
          // phone && phoneRegex.test(phone) ? styles.validInput : null,
        ]}
        // @ts-ignore
        // errorComponent={
        //   phoneError ? (
        //     <Text style={styles.errorText}>{phoneError}</Text>
        //   ) : null
        // }
        // @ts-ignore

        style={{
          paddingVertical: 0,
          // ...theme.fontSizes.large,
          fontFamily: "Poppins-Light",
          height: 20,
        }}
        errorMessageStyle={styles.errorMessageStyle}
        editable={false}
      />

      <View style={{ alignItems: "center", paddingTop: 32 }}>
        <TouchableOpacity onPress={handleUpdateAccount}>
          <Text
            style={{
              color: "#00AE5A",
              borderColor: "#00AE5A",
              fontFamily: "Poppins-Medium",
              paddingHorizontal: 50,
              width: 166,
              borderWidth: 2,
              height: 50,
              paddingTop: 14,
              borderRadius: 30,
            }}
          >
            Update
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            color: "red",
            height: 50,
            paddingTop: 14,
            textAlign: "center",
            borderRadius: 30,
          }}
          onPress={handleDeleteAccount}
        >
          {isAccountDeleting ? "Deleting Account" : "Delete Account"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "black",
    width: "100%",
    fontSize: 12,
  },
  inputBoxContainer: {
    marginLeft: 20,
    elevation: 10,
    width: "90%",
    borderRadius: 8,
    fontSize: 16,
  },
  inputError: {
    borderColor: "red",
  },
  header: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 24,
    color: "black",
    textAlign: "center",
  },
  errorMessageStyle: {
    marginTop: 8,
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  validInput: {
    borderColor: "green",
  },
});

const LeftIcon = () => {
  const theme = useTheme();

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 17 }}>
      <Text
        style={{
          // ...theme.fontSizes.large,
          fontFamily: "Poppins-Light",
          color: "#D9D9D9",
          paddingTop: 15,
          height: 50,
        }}
      >
        +91
      </Text>
      <View style={{ backgroundColor: "#D9D9D9", height: 39, width: 1 }} />
    </View>
  );
};
