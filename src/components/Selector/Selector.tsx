import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
} from "react-native";
import { Menu, MenuDivider, MenuItem } from "react-native-material-menu";

// own components
import { Text } from "components/Text";
import { IconButton } from "components/Button";
import ColorPalette from "styles/color";

interface SelectorItem {
  label?: string | number;
  value?: string | number;
  color?: string;
}

interface SelectorProps {
  label?: string;
  value?: string;
  items?: SelectorItem[];
  disabled?: boolean;
  showClearButton?: boolean;
  placeholder?: string;
  selectedItem?: SelectorItem;
  style?: StyleProp<ViewStyle>;
  menuItemWrapperStyle?: StyleProp<ViewStyle>;
  menuItemTextStyle?: StyleProp<ViewStyle>;
  handleOnSelect?: (selectedOption?: SelectorItem | null) => void;
}

const HEIGHT = Dimensions.get("window").height;

export default function Selector({
  label,
  value,
  items = [],
  disabled,
  showClearButton = true,
  placeholder,
  selectedItem,
  style,
  menuItemTextStyle,
  menuItemWrapperStyle,
  handleOnSelect,
}: SelectorProps) {
  const [showMenu, setShowMenu] = useState(false);

  const selectItem = (item: any) => {
    setShowMenu(false);
    if (handleOnSelect) handleOnSelect(item);
  };

  return (
    <View
      style={{
        marginBottom: 5,
        width: "100%",
        ...(style as ViewStyle),
      }}
    >
      {label ? (
        <Text style={{ fontSize: 12, marginBottom: 4 }}>{label}</Text>
      ) : null}
      <Menu
        style={{ maxHeight: HEIGHT * 0.7 }}
        visible={showMenu}
        onRequestClose={() => setShowMenu(false)}
        anchor={
          <TouchableOpacity
            onPress={() => {
              if (!disabled) setShowMenu(true);
            }}
          >
            <View
              style={[
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: 35,
                  alignItems: "center",
                  padding: 10,

                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: ColorPalette.boxBorder,
                },
                disabled && { backgroundColor: "rgba(0,0,0,0.1)" },
              ]}
            >
              {/* for text */}
              <View style={{ flex: 1 }}>
                {selectedItem?.label ? (
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 14,
                      color: disabled ? "rgba(0,0,0,0.3)" : "#000",
                    }}
                    numberOfLines={1}
                  >
                    {selectedItem.label}
                  </Text>
                ) : (
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 14,
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    {placeholder}
                  </Text>
                )}
              </View>
              {/* for icon */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../assets/icons/select.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        }
      >
        <ScrollView>
          {items
            ? items.map((item: any, index: number) => {
                return (
                  <View key={index} style={menuItemWrapperStyle}>
                    <MenuItem
                      onPress={() => {
                        selectItem(item);
                      }}
                      textStyle={{
                        fontSize: 14,
                        color: item.color ? item.color : "#000",
                        ...(menuItemTextStyle as Object),
                      }}
                    >
                      {item.label}
                    </MenuItem>
                    <MenuDivider />
                  </View>
                );
              })
            : null}
        </ScrollView>
      </Menu>
    </View>
  );
}
