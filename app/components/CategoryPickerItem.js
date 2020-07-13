import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import Screen from "./Screen";

const CategoryPickerItem = ({ item, onPress, ...otherProps }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      {...otherProps}
    >
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
