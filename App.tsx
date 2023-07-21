import { StyleSheet, Text, View, StatusBar } from "react-native";
import Main from "screens/Main/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
});
