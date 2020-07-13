import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";

import Screen from "../components/Screen";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

const ListingsScreen = ({ navigation }) => {
  // const { data: listings, error, loading, request: loadListings } = useApi(
  //   listingsApi.getListings
  // );

  const getListingsApi = useApi(listingsApi.getListings);
  //console.log("glsapi: " + JSON.stringify(getListingsApi));

  useEffect(() => {
    // loadListings(1, 2, 3);
    getListingsApi.request();
  }, []);

  const loadListings = () => {
    getListingsApi.request();
  };

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {/* {error && ( */}
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton
              title="Retry"
              onPress={loadListings}
              color="primary"
            ></AppButton>
          </>
        )}
        {/* use Lottie for ActivityIndicator animation */}

        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
