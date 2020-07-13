import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";

import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";
import AppText from "../components/AppText";

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress != 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={{
              height: 220,
              width: 220,
            }}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  animation: {
    width: 150,
    height: 150,
    backgroundColor: "green",
    //zIndex: 10,
  },
});

export default UploadScreen;
