import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText styles={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    padding: 20,
  },
});
export default PickerItem;
