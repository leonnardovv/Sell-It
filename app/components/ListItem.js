import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "./AppText";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
  style,
  //rightIcon,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.container, style]}>
          {IconComponent}
          {image && <Image source={image} style={styles.image}></Image>}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}

            {/* {rightIcon && (
              <MaterialCommunityIcons
                name="chevron-right"
                color={colors.dark}
                size={24}
              />
            )} */}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            color={colors.medium}
            size={24}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    width: windowWidth * 0.72,
  },
  subTitle: {
    fontSize: 15,
    color: colors.medium,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
});
