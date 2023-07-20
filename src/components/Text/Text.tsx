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
        color: "#000",
        fontSize: 14,
        ...(style as Object),
      }}
      {...textProps}
      allowFontScaling={false}
    >
      {children}
    </RNText>
  );
}
