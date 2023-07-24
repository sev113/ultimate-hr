import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import LogoHeading from "components/Logo/LogoHeading";
import TextInput from "components/TextInput/TextInput";
import { Button } from "components/Button";
import ColorPalette from "styles/color";

const WIDTH = Dimensions.get("window").width;

const Login = () => {
  return (
    <View style={styles.container}>
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
  },
  input_wrapper: {
    width: WIDTH * 0.6,
    marginTop: 20,
  },
  login_btn: {
    backgroundColor: ColorPalette.primaryGreen,
    borderWidth: 1,
    borderColor: ColorPalette.primaryGreen,
    marginTop: 15,
  },
});
