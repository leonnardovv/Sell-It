import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

const SubmitButton = ({ color, title }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} color={color} />;
};

const styles = StyleSheet.create({
  container: {},
});
export default SubmitButton;
