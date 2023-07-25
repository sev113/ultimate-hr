import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import ColorPalette from "styles/color";

interface RadioProps {
  label?: string;
  style?: StyleProp<ViewStyle>;
  radioStyle?: StyleProp<ViewStyle>;
  value?: any;
  data: string[];
  // handleOnSelect: void;
}

export default function Radio(props: RadioProps) {
  const { label, style, radioStyle, value, data = [] } = props;
  const [checked, setChecked] = useState(0);
  return (
    <View style={styles.container}>
      {label && (
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 14, fontFamily: "Poppins" }}>{label}</Text>
        </View>
      )}
      <View style={styles.radio_wrapper}>
        {data.map((data: string, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.radio}
              onPress={() => {
                setChecked(index);
                // handleOnSelect(data);
              }}
            >
              <View style={styles.radio_outer}>
                {index == checked ? (
                  <View style={styles.radio_inner}></View>
                ) : null}
              </View>
              <Text style={styles.radio_text}>{data}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
  },

  radio_wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
    width: "70%",
  },
  radio: {
    flexDirection: "row",
    marginRight: 20,
    marginBottom: 10,
  },
  radio_outer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: ColorPalette.primaryGreen,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  radio_inner: {
    width: 12,
    height: 12,
    borderRadius: 190,
    backgroundColor: ColorPalette.primaryOrange,
  },
  radio_text: {
    textTransform: "capitalize",
    fontSize: 14,
    fontFamily: "Poppins",
  },
});
