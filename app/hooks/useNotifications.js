import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    // We register a listener that will be called everytime the user taps on a notifications,
    //but we don't wanna hard code it so we put notification as a param in useNotification
    // Notifications.addListener((notification) => {
    //   navigation.navigate("Account");
    // });
    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      //console.log("Push notification token: " + token);
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting a push token: " + error);
    }
  };
};
