import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import TextInput from "components/TextInput/TextInput";
import { FormFieldWrapper, FormLabel } from "components/Form";
import Selector from "components/Selector/Selector";
import Radio from "components/Radio/Radio";
import { GENDER, MARITAL_STATUS, NRC_DIVISION, CITY, TOWNSHIP } from "data";
import { Text } from "components/Text";

const WIDTH = Dimensions.get("window").width;

const PersonalInfoForm = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ width: WIDTH * 0.9 }}>
        <View style={{ flexDirection: "column", width: "95%" }}>
          <Text style={styles.heading}>Hello !</Text>
          <Text
            style={{
              fontFamily: "Poppins",
              marginBottom: 10,
              textAlign: "left",
            }}
          >
            Create a new account
          </Text>
          <TextInput label="Name" />
          <TextInput label="Father Name" />
          <FormLabel>NRC No.</FormLabel>
          <FormFieldWrapper style={{ justifyContent: "space-between" }}>
            <Selector style={{ width: "18%" }} items={NRC_DIVISION} />
            <TextInput containerStyle={{ width: "30%" }} />
            <TextInput
              value="N"
              inputStyle={{ textAlign: "center" }}
              containerStyle={{ width: "10%" }}
            />
            <TextInput containerStyle={{ width: "38%" }} />
          </FormFieldWrapper>
          <TextInput label="Date of Birth" />
          <Radio label="Gender" data={GENDER} />
          <Radio label="Marital Status" data={MARITAL_STATUS} />
          <FormLabel>Contact Phone No.</FormLabel>
          <FormFieldWrapper>
            <TextInput
              containerStyle={{ width: "25%" }}
              inputStyle={{
                marginRight: 5,
              }}
            />

            <TextInput containerStyle={{ width: "75%" }} />
          </FormFieldWrapper>
          <TextInput label="Address" />
          <FormFieldWrapper style={{ justifyContent: "space-between" }}>
            <Selector label="City" items={CITY} style={{ width: "48%" }} />
            <Selector
              label="Township"
              items={TOWNSHIP}
              style={{ width: "48%" }}
              handleOnSelect={(item) => {}}
            />
          </FormFieldWrapper>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PersonalInfoForm;

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
