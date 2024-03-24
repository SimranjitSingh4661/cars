import React, { forwardRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const Stack = createNativeStackNavigator();

const Routes = forwardRef((props, ref) => {
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"App"} component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Routes;
