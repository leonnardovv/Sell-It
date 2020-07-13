import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native-expo-image-cache";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import ContactSellerForm from "../components/forms/ContactSellerForm";

const ListingDetailsScreen = ({ navigation, route }) => {
  const listing = route.params;
  // console.log("LISTING ITEM: " + JSON.stringify(listing));
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          position: "absolute",
          //right: 20,
          top: 40,
          zIndex: 1,
        }}
      >
        {/* <View
          style={{
            backgroundColor: colors.white,
            opacity: 0.6,
            height: 38,
            width: 38,
            position: "absolute",
            borderRadius: 19,
          }}
        />
        <MaterialCommunityIcons name="close" size={34} color={colors.primary} /> */}
        <View
          style={{
            height: 4,
            width: 30,
            borderRadius: 15,
            backgroundColor: "black",
            alignSelf: "center",
            top: 0,
          }}
        />
      </TouchableOpacity>

      <Image
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/leonard.jpg")}
            title="Leonard Busoi"
            subTitle="5 Listings"
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 280,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 8,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 45,
  },
  sendMessageContainer: {},
});
export default ListingDetailsScreen;
