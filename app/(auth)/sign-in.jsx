import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import colors from "../../constants/colors";
import { images } from "../../constants";
import FormFeild from "../../components/FormFeild";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);
  const submit = () => {};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.viewContainer}>
              <Image
                source={images.logo}
                resizeMode="contain"
                style={styles.logoStyle}
              />

              <Text style={styles.headingText}>Log in to Aora</Text>

              <FormFeild
                title="Email"
                value={form.email}
                handleChangeText={(text) => setform({ ...form, email: text })}
                otherStyles={{ marginTop: 8 }}
                keyboardType="email-address"
              />

              <FormFeild
                title="Password"
                value={form.password}
                handleChangeText={(text) =>
                  setform({ ...form, password: text })
                }
                otherStyles={{ marginTop: 25 }}
              />

              <CustomButton
                title="Sign In"
                handlePress={submit}
                containerStyles={{ marginTop: 35 }}
                IsLoading={isSubmitting}
              />

              <View style={styles.subtextButton}>
                <Text style={styles.subtextHeading}>
                  Don't have an Account?
                </Text>
                <Link href={"/sign-up"} style={styles.linkStyle}>
                  Sign Up
                </Link>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <StatusBar backgroundColor={colors.primary} style="light" />
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  scrollViewContainer: {
    flex: 1,
    marginTop: 80,
    //justifyContent: "center",
  },
  viewContainer: {
    padding: 10,
  },
  logoStyle: {
    height: 35,
    width: 115,
  },
  headingText: {
    color: "white",
    fontFamily: "Poppins-Semibold",
    fontSize: 22,
    marginVertical: 15,
  },
  subtextButton: {
    justifyContent: "center",
    paddingTop: 15,
    flexDirection: "row",
    gap: 5,
  },
  subtextHeading: {
    color: colors.gray[100],
    fontFamily: "Poppins-Regular",
    fontSize: 15,
  },
  linkStyle: {
    color: colors.secondary.default,
    fontSize: 15,
    fontFamily: "Poppins-Semibold",
  },
});
