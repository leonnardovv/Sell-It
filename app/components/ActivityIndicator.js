import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loading.json")}
        style={{
          height: 220,
          width: 220,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
