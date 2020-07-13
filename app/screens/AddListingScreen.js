import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import * as Yup from "yup";

import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Home",
    value: 1,
    backgroundColor: "red",
    icon: "apps",
  },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Toys", value: 3, backgroundColor: "blue", icon: "lock" },
];

const AddListingScreen = () => {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    //setUploadVisible(false);

    if (!result) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField
          name="title"
          autoCapitalize="sentences"
          autoCorrect={false}
          placeholder="Title"
        />
        <AppFormField
          name="price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          placeholder="Price"
          width={100}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          name="description"
          autoCapitalize="sentences"
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="Post" color="primary" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15 },
});
export default AddListingScreen;
