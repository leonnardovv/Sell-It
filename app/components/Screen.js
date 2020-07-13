import React from "react";
import Constants from "expo-constants";
import { View, StyleSheet, SafeAreaView } from "react-native";
import colors from "../config/colors";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    //backgroundColor: "purple",
  },
  view: {
    flex: 1,
  },
});
export default Screen;
