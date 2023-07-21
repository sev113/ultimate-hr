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
    width: 40,
    height: 70,
    margin: 8,
  },
  heading: {
    fontSize: 18,
    fontFamily: "Poppins",
  },
  sub_heading: {
    fontSize: 14,
    fontFamily: "Milonga",
  },
});
