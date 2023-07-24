import React from "react";
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import ColorPalette from "styles/color";
import Text from "components/Text/Text";

interface TextInputProps extends RNTextInputProps {
  label?: string;
  inputStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  optional?: boolean;
}

export default function TextInput(props: TextInputProps) {
  const { label, inputStyle, style, optional = false, ...inputProps } = props;
  return (
    <View style={styles.container}>
      {label ? (
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 12 }}>{label}</Text>
        </View>
      ) : null}

      <View>
        <RNTextInput
          autoCapitalize="none"
          textAlign="left"
          style={[
            styles.input,
            inputStyle,
            inputProps?.editable == false
              ? { backgroundColor: "#f5f5f5", color: "#000" }
              : null,
          ]}
          {...inputProps}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  input: {
    fontFamily: "Poppins",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#666",
    height: 40,
    padding: 10,
  },
});
