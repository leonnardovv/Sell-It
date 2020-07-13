import React, { Children } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";

const Filename = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Filename;
