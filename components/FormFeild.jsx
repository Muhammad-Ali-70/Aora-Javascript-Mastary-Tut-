import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import { icons } from "../constants";

const FormFeild = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <View style={[styles.mainContainer, otherStyles]}>
      <Text style={styles.textStyle}>{title}</Text>

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInputStyle}
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={styles.eyeStyle}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormFeild;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 3,
    gap: 8,
  },
  textStyle: {
    fontFamily: "Poppins-Medium",
    color: "#e7e7e7",
  },
  textInputContainer: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: colors.black[200],
    height: 45,

    borderRadius: 10,
    backgroundColor: colors.black[100],
    flexDirection: "row",
    alignItems: "center",
  },
  textInputStyle: {
    flex: 1,
    color: "white",
    fontFamily: "Poppins-Semibold",
    paddingLeft: 10,
  },
  eyeStyle: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
});
