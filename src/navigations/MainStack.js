import React from "react";
import { WelcomeScreen } from "@screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
