import React, { useEffect } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

const ImageInput = ({ imageUri, onChangeImage }) => {
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };

  const requestPermission = async () => {
    // const result = await ImagePicker.requestCameraRollPermissionsAsync()
    // or we can use object destructing
    //const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)

    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };

  useEffect(() => {
    //this function executes everytime the component gets render
    requestPermission();
  }, []); //calling it only 1 time with []

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5, //0 the lowest quality, 1 the highest quality
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            size={40}
            name="camera"
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ImageInput;
