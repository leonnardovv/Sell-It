import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  deleteIcon: {
    position: "absolute",
    top: 55,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 55,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
