import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

const AppFormPicker = ({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) => {
  const { errors, touched, setFieldValue, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />

      <ErrorMessage error={errors[name]} isVisible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default AppFormPicker;
