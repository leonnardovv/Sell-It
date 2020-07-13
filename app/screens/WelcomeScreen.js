import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => (
  <ImageBackground
    blurRadius={6}
    style={styles.background}
    source={require("../assets/background.jpg")}
  >
    <View style={styles.logoContainer}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.tagLine}>Sell What You Don't Need</Text>
    </View>
    <View style={styles.buttonsContainer}>
      <AppButton
        color="primary"
        title="Login"
        onPress={() => navigation.navigate("Login")}
      ></AppButton>
      <AppButton
        color="secondary"
        title="Register"
        onPress={() => navigation.navigate("Register")}
      ></AppButton>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 120,
    width: 120,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    alignItems: "center",
    width: "100%",
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical: 10,
  },
});

export default WelcomeScreen;
