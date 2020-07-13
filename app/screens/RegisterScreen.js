import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import defaultStyles from "../config/styles";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";

// Validating Schema - object that determines all the rules for validating our form
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const RegisterScreen = () => {
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();
  const [registerFailed, setRegisterFailed] = useState(false);

  const handleSubmit = async (userInfo) => {
    //userInfo is the object that formik gives us
    // const result = await authApi.register(userInfo);
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      setRegisterFailed(true);
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred");
        console.log(result);
      }
      return; // so the rest of the function is not executed (see below)
    }

    setRegisterFailed(false);
    const { data: authToken } = await loginApi.request(
      userInfo.email,

      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      {/* <ActivityIndicator visible={true} /> */}
      <Screen style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />

        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Email already exists"
            isVisible={registerFailed}
          />
          <AppFormField
            name="name"
            autoCapitalize="words"
            autoCorrect={false}
            icon="account"
            placeholder="Name"
          />

          <AppFormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            icon="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            textContentType="password"
            secureTextEntry
            // onChangeText={handleChange("password")}
            // onBlur={() => setFieldTouched("password")}
          />
          <SubmitButton title="Register" color="secondary" />
          {/* <AppButton title="Register" onPress={handleSubmit} /> */}
        </AppForm>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default RegisterScreen;
