import React, { memo } from "react";
import { Provider } from "react-native-paper";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import AppBase from "./Main";

export default memo(() => (
  <Provider>
    <NavigationContainer>
      <NativeBaseProvider>
        <AppBase />
      </NativeBaseProvider>
    </NavigationContainer>
  </Provider>
));
