import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

import * as Yup from "yup";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

// Validating Schema - object that determines all the rules for validating our form
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
  const { logIn } = useAuth(); //obj destructing -> see useAuth.js
  // or use const auth = useAuth()
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    logIn(result.data);
    //and here use auth.logIn(result.data)
  };

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password"
          isVisible={loginFailed}
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
        <SubmitButton title="Login" color="primary" />
        {/* <AppButton title="Login" onPress={handleSubmit} /> */}
      </AppForm>
    </Screen>
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
export default LoginScreen;
