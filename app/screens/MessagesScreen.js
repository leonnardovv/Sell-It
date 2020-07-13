import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Leonard Busoi",
    subTitle: "That's true. How did he do it?",
    image: require("../assets/leonard.jpg"),
  },
  {
    id: 2,
    title: "Vladimir Sh",
    subTitle: "Are you ready for the final?",
    image: require("../assets/leonard.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //Delete the item from the items array
    setMessages(messages.filter((msg) => msg.id !== message.id));

    //Call the server
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  // screen: {
  //   //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  //   paddingTop: Constants.statusBarHeight,
  // },
});
