import React from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <View style={{ justifyContent: "center" }}>
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        </View>
      )}

      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    //width: "100%",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
