import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/AccountScreen";
import AddListingScreen from "../screens/AddListingScreen";
import ListingsScreen from "../screens/ListingsScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

import colors from "../config/colors";
import routes from "./routes";
import NewListingButton from "./NewListingButton";
import navigation from "./rootNavigation";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // Here we don't have access to navigation prop, and also we can't useNavigation hook,
  //but in App.js we can create a reference object and associate whit NavigationContainer component
  // From that reference we can access the root navigation object

  useNotifications();

  return (
    <Tab.Navigator
      tabBarOptions={{
        //activeBackgroundColor: "tomato",
        activeTintColor: colors.primary,
        // inactiveBackgroundColor: "#eee",
        // inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddListing"
        component={AddListingScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.ADD_LISTING)}
            />
          ),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
