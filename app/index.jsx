import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import colors from "../constants/colors";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { router, Redirect } from "expo-router";

const index = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.ScrollViewContainer}>
        <View style={styles.mainView}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.logoStyle}
          />

          <Image
            source={images.cards}
            resizeMode="contain"
            style={styles.cardStyle}
          />

          <Text style={styles.headingText}>
            Discover Endless Possibilities with{" "}
            <Text style={{ color: colors.secondary[200] }}>Aora</Text>
          </Text>

          <Image
            source={images.path}
            resizeMode="contain"
            style={styles.pathStyle}
          />

          <Text style={styles.subHeadingText}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles={{ width: "90%", marginTop: 25 }}
          />
        </View>
      </ScrollView>
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  ScrollViewContainer: {
    height: "100%",
  },
  mainView: {
    justifyContent: "center",
    padding: 5,
    alignItems: "center",
    flex: 1,
  },
  logoStyle: {
    width: 135,
    height: 60,
  },
  cardStyle: {
    height: 350,
    maxWidth: 380,
  },
  headingText: {
    fontFamily: "Poppins-ExtraBold",
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },
  subHeadingText: {
    color: "white",
    textAlign: "center",
    fontSize: 13,
    marginTop: 10,
    fontFamily: "Poppins-Regular",
  },
  pathStyle: {
    height: 15,
    width: 135,
    bottom: 7,
    left: 110,
  },
});
