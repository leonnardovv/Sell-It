import React, { useState, createRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  TextInput,
  Switch,
  AsyncStorage,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { AppLoading, Notifications } from "expo";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import AppText from "./app/components/AppText";
import ListItem from "./app/components/ListItem";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AddListingScreen from "./app/screens/AddListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import defaultStyles from "./app/config/styles";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  // useEffect(() => {
  //   restoreUser();
  // }, []);
  // const { landscape } = useDeviceOrientation();

  // const Link = () => {
  //   const navigation = useNavigation(); // using this to have access to navigator because Link is not in NavigationStack
  //   return (
  //     <Button
  //       title="Click"
  //       onPress={() => navigation.navigate("TweetDetails")}
  //     />
  //   );
  // };

  // const Stack = createStackNavigator();

  // const ListingsStackNavigator = () => (
  //   // if you want to apply global options for all screens use screenOptions
  //   // in Stack.Navigator and you can override some options in every screen you need
  //   <Stack.Navigator screenOptions={{}}>
  //     <Stack.Screen name="Listings" component={ListingsScreen} />
  //     <Stack.Screen
  //       name="ListingDetails"
  //       component={ListingDetailsScreen}
  //       options={({ route }) => ({
  //         title: "Details",
  //         subTitle: route.params.subTitle,
  //         image: route.params.image,
  //       })}
  //     />
  //   </Stack.Navigator>
  // );

  // const AccountStackNavigator = () => (
  //   <Stack.Navigator>
  //     <Stack.Screen name="Account" component={AccountScreen} />
  //     <Stack.Screen name="Messages" component={MessagesScreen} />
  //   </Stack.Navigator>
  // );

  // const Tab = createBottomTabNavigator();

  // NetInfo.fetch().then((netInfo) => console.log(netInfo));

  // All of this we do in class
  // componentDidMount
  //const unsubscribe = NetInfo.addEventListener((netInfo) =>
  //console.log(netInfo)
  //); // this is called everytime a change is made in internet connection

  // componentWillUnmount
  //unsubscribe(); // if we don't call unsubscribe, the component will keep querying that info api and will end up with memory leaks

  // return (
  // <Screen>
  //   <AppTextInput placeholder="Username" icon="email" />
  //   <Switch
  //     value={isNew}
  //     onValueChange={(newValue) => setIsNew(newValue)}
  //   ></Switch>
  //   <AppPicker
  //     selectedItem={category}
  //     onSelectItem={(item) => setCategory(item)}
  //     items={categories}
  //     placeholder="Category"
  //     icon="apps"
  //   />
  //   <AppTextInput placeholder="Email" icon="email" />
  // </Screen>
  // <LoginScreen />
  // <AddListingScreen />
  // <Screen>
  //   <ImageInputList
  //     imageUris={imageUris}
  //     onAddImage={handleAdd}
  //     onRemoveImage={handleRemove}
  //   />
  // </Screen>
  // <AddListingScreen />

  // All of this we do in hooks component and we use useNetInfo hook
  // const netInfo = useNetInfo();
  // return netInfo.isInternetReachable ? <View>is</View> : <View>isnot</View>;

  //set startAsync to a function that should be called when the app starts
  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );

  // const demo = async () => {
  //   try {
  //     await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
  //     const value = await AsyncStorage.getItem("person");
  //     const person = JSON.parse(value);
  //     console.log(person);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // demo();
  // return null;

  // );

  //   const showNotification = () => {
  //     Notifications.presentLocalNotificationAsync({
  //       title: "Congratulations",
  //       body: "Your order was successfuly placed",
  //       // data: { // if this becomes repetitive, we will add iosDisplayInForeground true in app.json
  //       //   _displayInForeground: true, // this must be activated because we won't see notifications in iOS if it's not activated
  //       // },
  //     });
  //   };

  //   return (
  //     <Screen>
  //       <Button title="Tap me" onPress={showNotification} />
  //     </Screen>
  //   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
