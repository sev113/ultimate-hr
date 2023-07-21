import { Image, StyleSheet, View } from "react-native";
import React from "react";

import { Text } from "components/Text";

const LogoHeading = () => {
  return (
    <View style={styles.container}>
      <Image source={require("assets/Logo.png")} style={styles.imageStyle} />
      <Text style={styles.heading}>Ultimate HR Solution</Text>
      <Text style={styles.sub_heading}>
        The Ultimate HR Solution is the key to everything.
      </Text>
    </View>
  );
};

export default LogoHeading;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 45,
    height: 80,
    margin: 10,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  sub_heading: {
    fontSize: 14,
  },
});
