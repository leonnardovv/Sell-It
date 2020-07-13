import React from "react";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";
import { useFormikContext } from "formik";

const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imagesUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imagesUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imagesUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imagesUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} isVisible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
