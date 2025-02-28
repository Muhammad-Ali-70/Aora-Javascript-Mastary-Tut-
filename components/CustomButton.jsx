import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { isLoaded } from "expo-font";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  TextStyles,
  IsLoading,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        containerStyles,
        IsLoading && { opacity: 0.5 },
      ]}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={IsLoading}
    >
      <Text style={[styles.buttonText, TextStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.secondary.default,
    borderRadius: 10,
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Poppins-Semibold",
    color: colors.primary,
  },
});
