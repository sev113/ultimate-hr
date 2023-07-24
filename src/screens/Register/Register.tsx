import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { IStackRouteParamList } from "models";
import { StackScreenProps } from "@react-navigation/stack";

import ColorPalette from "styles/color";
import { FormFieldWrapper } from "components/Form";
import PersonalInfoForm from "./PersonalInfoForm";
import JobInfoForm from "./JobInfoForm";

const WIDTH = Dimensions.get("window").width;
type RegisterScreenProps = StackScreenProps<IStackRouteParamList>;
type FormNameType = "PERSONAL_INFO" | "JOB_INFO";

const Register = ({ navigation }: RegisterScreenProps) => {
  // ---------------------------------------------------------------
  const [formName, setFormName] = useState<FormNameType>("PERSONAL_INFO");

  const register = () => {};

  // ---------------------------------------------------------------

  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Pressable
          style={
            formName == "PERSONAL_INFO"
              ? styles.pressed_tab_text
              : styles.tab_text
          }
          onPress={() => {
            setFormName("PERSONAL_INFO");
          }}
        >
          <Text>Personal Information</Text>
        </Pressable>
        <Pressable
          style={
            formName == "JOB_INFO" ? styles.pressed_tab_text : styles.tab_text
          }
          onPress={() => {
            setFormName("JOB_INFO");
          }}
        >
          <Text>Job Information</Text>
        </Pressable>
      </View>
      {formName == "PERSONAL_INFO" ? (
        <PersonalInfoForm />
      ) : formName == "JOB_INFO" ? (
        <JobInfoForm />
      ) : null}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  tab: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tab_text: {
    paddingBottom: 10,
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
  },
  pressed_tab_text: {
    borderBottomColor: ColorPalette.primaryOrange,
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  form_container: {
    // width: WIDTH * 0.95,
    // backgroundColor: "red",
  },
});
