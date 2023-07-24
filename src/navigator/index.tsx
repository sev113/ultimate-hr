import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { IStackRouteParamList } from "models";
import { Main, Login, Register, Home } from "screens";

const Stack = createStackNavigator<IStackRouteParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerTitleStyle: {
            fontFamily: "Poppins",
          },
        }}
      >
        <Stack.Screen
          name="MainScreen"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={Register}
          options={{ title: "Sign Up", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
