import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import routes from "../navigation/routes";
import ListItemSeparator from "../components/ListItemSeparator";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.LISTINGS,
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();

  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <ListItem
        title={user.name}
        subTitle={user.email}
        image={require("../assets/leonard.jpg")}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          scrollEnabled={false}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
        style={styles.logOut}
        rightIcon="chevron-right"
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    //backgroundColor: "#fff",
  },
  logOut: {
    //marginTop: 35,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
});
export default AccountScreen;
