/*
! React Native Imports
*/
import "react-native-gesture-handler";
import React, { useRef, useState } from "react";
import { BackHandler } from "react-native";
import PythonFactoryWebView from "./WebView";
import { home, ProgressPyF, MenuButton, Alert } from "./src/component.jsx";
import Settings, { setting } from "./src/setting.jsx";
import styles from "./src/style.jsx";
import global from "./src/global.jsx";

/*
!GLOBAL VARIABLES
*/
var isOnSetting: boolean = false,
  globalFunctions: any;

const HomeWrapper = ({ navigation }: any) => {
  const webViewRef: any = useRef(null);

  /*
  !BACKHANDLER
  */
  BackHandler.addEventListener("hardwareBackPress", () => {
    isOnSetting
      ? navigation.navigate("Home")
      : global.ishome(globalFunctions.link, home)
      ? BackHandler.exitApp()
      : webViewRef.current.goBack();

    return true;
  });

  const [visible, setVisible] = useState(false);

  globalFunctions = {
    webViewRef,
    goToSetting: () => {
      navigation.navigate("Settings");
      isOnSetting = true;
    },
  };

  return (
    <>
      <Alert
        visible={visible}
        hide={() => setVisible(false)}
        setLink={(a: any) => webViewRef.current.setLink(a.url)}
      />
      <PythonFactoryWebView ref={webViewRef} />
      <ProgressPyF webLoading={() => webViewRef.current.getWebLoading()} />
      <MenuButton
        gf={globalFunctions}
        menu={setting.menu}
        iconprop={{
          icon: "cog",
          onPress: () => navigation.navigate("Settings"),
          style: styles.icon,
        }}
      />
    </>
  );
};

const SettingWrapper = ({ navigation }: any) => (
  <Settings
    {...{
      webViewRef: globalFunctions.webViewRef,
      close: navigation.goBack,
      isOnSetting: () => (isOnSetting = false),
    }}
  />
);

export { HomeWrapper, SettingWrapper };
