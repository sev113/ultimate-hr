import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import LogoHeading from "components/Logo/LogoHeading";
import { Button } from "components/Button";
import ColorPalette from "styles/color";

const WIDTH = Dimensions.get("window").width;

const Main = () => {
  return (
    <View style={styles.container}>
      <Image source={require("assets/bg-img.png")} style={styles.bg_img} />
      <View style={styles.container_body}>
        <LogoHeading />
        <View style={styles.btn_wrapper}>
          <Button
            text="Log In"
            textStyle={{ color: "#fff" }}
            style={styles.login_btn}
          />
          <Button text="Register" style={styles.register_btn} />
        </View>
      </View>
      <View style={styles.container_footer}>
        <Text>version 1.0</Text>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container_body: { justifyContent: "center", alignItems: "center" },
  container_footer: {
    position: "absolute",
    bottom: 10,
  },
  bg_img: {
    width: WIDTH,
    height: WIDTH * 0.5,
    position: "absolute",
    bottom: -10,
    opacity: 0.5,
  },
  btn_wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  login_btn: {
    backgroundColor: ColorPalette.primaryGreen,
    marginHorizontal: 5,
  },
  register_btn: {
    borderWidth: 1,
    borderColor: ColorPalette.primaryGreen,
  },
});
