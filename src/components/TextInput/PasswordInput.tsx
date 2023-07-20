import React, { useState } from "react";
import {
  View,
  Image,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import TextInput from "./TextInput";
import { IconButton } from "components/Button";
import { FormLabel } from "components/Form";

interface PasswordInputProps extends TextInputProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function PasswordInput(props: PasswordInputProps) {
  const { label, containerStyle, ...inputProps } = props;
  const [secureInput, setSecureInput] = useState(true);
  return (
    <View style={{ padding: 5, ...(containerStyle as Object) }}>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <TextInput
        style={{ padding: 0 }}
        placeholder="password"
        secureTextEntry={secureInput}
        {...inputProps}
      />
      <IconButton
        style={{ position: "absolute", right: 10 }}
        onPress={() => setSecureInput((prev) => !prev)}
      >
        {secureInput ? (
          <Image
            source={require("../../assets/icons/hidden.png")}
            style={{ width: 23, height: 23 }}
          />
        ) : (
          <Image
            source={require("../../assets/icons/view.png")}
            style={{ width: 23, height: 23 }}
          />
        )}
      </IconButton>
    </View>
  );
}
