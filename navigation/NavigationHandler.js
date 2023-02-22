import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import SignupPage from "../screens/SignupPage";
import LoginPage from "../screens/LoginPage";
import Screen4 from "../screens/Screen4";
import Screen5 from "../screens/Screen5";
import AddMenuScreen from "../screens/chefScreens/AddMenuScreen";
import MenuForm from "../screens/chefScreens/MenuForm";


const NavigationHandler = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="MenuForm">
        {}

        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignupPage"
          component={SignupPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Screen4"
          component={Screen4}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Screen5"
          component={Screen5}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AddMenuScreen"
          component={AddMenuScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MenuForm"
          component={MenuForm}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHandler;

const styles = StyleSheet.create({});
