import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import LogoHeading from "components/Logo/LogoHeading";
import TextInput from "components/TextInput/TextInput";
import { Button } from "components/Button";
import ColorPalette from "styles/color";

const WIDTH = Dimensions.get("window").width;

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require("assets/bg-img.png")} style={styles.bg_img} />
      <LogoHeading />
      <View style={styles.input_wrapper}>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" />
        <Button
          text="Log In"
          textStyle={{ color: "#fff" }}
          style={styles.login_btn}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input_wrapper: {
    width: WIDTH * 0.55,
    marginTop: 20,
  },
  login_btn: {
    backgroundColor: ColorPalette.primaryGreen,
    borderWidth: 1,
    borderColor: ColorPalette.primaryGreen,
    marginTop: 15,
  },
  bg_img: {
    width: WIDTH,
    height: WIDTH * 0.5,
    position: "absolute",
    bottom: -10,
    opacity: 0.5,
  },
});
