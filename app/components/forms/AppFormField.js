import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, width, ...otherProps }) => {
  //we use setFieldValue and value for resseting the form
  const {
    setFieldTouched,
    errors,
    touched,
    setFieldValue,
    values,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        // autoCapitalize="none"
        // autoCorrect={false}
        // keyboardType="email-address"
        // icon="email"
        // placeholder="Email"
        // textContentType="emailAddress"
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} isVisible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default AppFormField;
