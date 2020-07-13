import React from "react";
import { View, Text, StyleSheet } from "react-native";

import AppText from "../AppText";

const ErrorMessage = ({ error, isVisible }) => {
  if (!isVisible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
export default ErrorMessage;
