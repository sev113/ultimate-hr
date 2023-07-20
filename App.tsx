import { Button, IconButton } from "components/Button";
import FormFieldWrapper from "components/Form/FormFieldWrapper";
import PasswordInput from "components/TextInput/PasswordInput";
import TextInput from "components/TextInput/TextInput";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
