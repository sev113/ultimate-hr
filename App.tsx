import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";

import Main from "screens/Main/Main";
import ColorPalette from "styles/color";
import Login from "screens/Login/Login";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    Milonga: require("./assets/fonts/Milonga-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={ColorPalette.primaryGreen} size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* <Main /> */}
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
