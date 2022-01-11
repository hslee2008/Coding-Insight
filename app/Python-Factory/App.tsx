import React, { memo } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-native-paper";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import global from "./src/global";
import { HomeWrapper, SettingWrapper } from "./Main";

var Stack = createStackNavigator();

export default memo(() => (
  <Provider>
    <StatusBar hidden />
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator screenOptions={global.screenopt}>
          <Stack.Screen
            name="Home"
            component={HomeWrapper}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingWrapper}
            options={{ gestureEnabled: false }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  </Provider>
));
