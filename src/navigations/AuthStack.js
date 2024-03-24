import React from "react";
import { WelcomeScreen } from "@screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NAVIGATION from "../constants/navigation";

export const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NAVIGATION.AUTH.WELCOME_SCREEN} component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
