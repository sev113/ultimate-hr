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
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  optional?: boolean;
}

export default function TextInput(props: TextInputProps) {
  const {
    label,
    inputStyle,
    style,
    optional = false,
    containerStyle,
    ...inputProps
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 12, fontFamily: "Poppins" }}>{label}</Text>
        </View>
      ) : null}

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
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    width: "100%",
  },
  input: {
    fontFamily: "Poppins",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#666",
    height: 35,
    paddingHorizontal: 10,
  },
});
