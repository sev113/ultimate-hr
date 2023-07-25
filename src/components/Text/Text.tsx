import React from "react";
import {
  Text as RNText,
  TextStyle,
  TextProps as RNTextProps,
  StyleProp,
} from "react-native";

interface TextProps extends RNTextProps {
  style?: StyleProp<TextStyle>;
}

export default function Text(props: TextProps) {
  const { style, children, ...textProps } = props;
  return (
    <RNText
      style={{
        fontFamily: "Poppins",
        color: "#000",
        fontSize: 12,
        ...(style as Object),
      }}
      {...textProps}
      allowFontScaling={false}
    >
      {children}
    </RNText>
  );
}
