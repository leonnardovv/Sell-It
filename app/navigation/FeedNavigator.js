import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  // if you want to apply global options for all screens use screenOptions
  // in Stack.Navigator and you can override some options in every screen you need
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={({ route }) => ({
        title: "Details",
        subTitle: route.params.subTitle,
        image: route.params.image,

        //headerStyle: { backgroundColor: "red" },
      })}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
