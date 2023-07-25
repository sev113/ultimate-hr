import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import TextInput from "components/TextInput/TextInput";
import { FormFieldWrapper, FormLabel } from "components/Form";
import Selector from "components/Selector/Selector";
import Radio from "components/Radio/Radio";
import { BRANCH, DEPARTMENT, JOB_TYPE, POSITION } from "data";

const WIDTH = Dimensions.get("window").width;

const JobInfoForm = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ width: WIDTH * 0.9 }}>
        <View style={{ flexDirection: "column", width: "95%" }}>
          <TextInput label="Start Joining Date" />
          <Radio label="Type" data={JOB_TYPE} />
          <Selector label="Position" items={POSITION} />
          <Selector label="Department" items={DEPARTMENT} />
          <Selector label="Branch" items={BRANCH} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default JobInfoForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Poppins",
    marginVertical: 10,
    textAlign: "left",
  },
});
