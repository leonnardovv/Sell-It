import React from "react";
import { View, Text, Keyboard, StyleSheet, Alert } from "react-native";
import * as Yup from "yup";
import { Notifications } from "expo";

import messagesApi from "../../api/messages";
import AppFormField from "./AppFormField";
import AppForm from "./AppForm";
import SubmitButton from "./SubmitButton";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

const ContactSellerForm = ({ listing }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not sent the message to the seller");
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller",
    });
  };

  return (
    <View style={styles.sendMessageContainer}>
      <AppForm
        initialValues={{ message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="message"
          autocapitalize="sentences"
          autoCorrect={false}
          placeholder="Message..."
        />
        <SubmitButton title="CONTACT SELLER" color="primary" />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default ContactSellerForm;
