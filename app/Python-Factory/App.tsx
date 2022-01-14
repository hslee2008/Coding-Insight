import React, { memo, useEffect } from "react";
import { StatusBar, BackHandler } from "react-native";
import { Provider } from "react-native-paper";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import global from "./src/global";
import { HomeWrapper, SettingWrapper, globalFunctions } from "./Main";
import { home } from "./src/component.jsx";

var Stack = createStackNavigator();

export default memo(() => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      globalFunctions.isOnSetting
        ? globalFunctions.navigateHome()
        : global.ishome(globalFunctions.link, home)
        ? BackHandler.exitApp()
        : globalFunctions.goback();

      return true;
    });
  }, [HomeWrapper]);

  return (
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
  );
});
