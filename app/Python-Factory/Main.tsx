//REACET NATIVE PACKAGE IMPORT//
import "react-native-gesture-handler";
import React, { useRef, useState, memo } from "react";
import { StatusBar, BackHandler, Text } from "react-native";
import { WebView } from "react-native-webview";
import { createStackNavigator } from "@react-navigation/stack";

//LOCAL PACKAGE IMPORT//
import {
  home,
  ProgressPyF,
  MenuButton,
  Alert,
  SnackBarsForErrors,
} from "./src/component.jsx";
import Settings, { setting } from "./src/setting.jsx";
import styles from "./src/style.jsx";
import global from "./src/global.jsx";

//GLOBAL VARIABLES//
var Stack = createStackNavigator(),
  isOnSetting: boolean = false,
  globalFunctions: any;

const Home = memo(({ navigation }: any) => {
  const webViewRef: any = useRef(null);

  //BACKHANDLER
  BackHandler.addEventListener("hardwareBackPress", () => {
    isOnSetting
      ? navigation.navigate("Home")
      : global.ishome(globalFunctions.link, home)
      ? BackHandler.exitApp()
      : webViewRef.current.goBack();

    return true;
  });

  //STATES//
  const [webLoading, setWebLoading] = useState(true);
  const [link, setLink] = useState(
    setting.korean ? home : home + "/index-en.html"
  );
  const [visible, setVisible] = useState(false);

  const [HTTPError, setHTTPError] = useState(false);
  const onToggleHTTPError = () => setHTTPError(!visible);
  const onDismissHTTPError = () => setHTTPError(false);

  const [Error, setError] = useState(false);
  const onToggleError = () => setError(!visible);
  const onDismissError = () => setError(false);

  const [Process, setProcess] = useState(false);
  const onToggleProcess = () => setProcess(!visible);
  const onDismissProcess = () => setProcess(false);

  const [Reload, setReload] = useState(false);
  const onToggleReload = () => setReload(!visible);
  const onDismissReload = () => setReload(false);

  //WEBVIEW FUNCTIONS//
  const reload = () => webViewRef.current.reload();
  const goback = () => webViewRef.current.goBack();
  const goforward = () => webViewRef.current.goForward();
  const stop = () => {
    webViewRef.current.stopLoading();
    setWebLoading(false);
    onToggleReload();
  };
  const erase = () => {
    webViewRef.current.clearHistory();
    webViewRef.current.clearFormData();
    webViewRef.current.clearCache(true);
  };

  //GLOBAL FUNCTIONS//
  globalFunctions = {
    webViewRef,
    webLoading,
    setWebLoading,
    link,
    setLink,
    visible,
    setVisible,
    reload,
    goback,
    goforward,
    stop,
    navigation,
    erase,
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
        setLink={(a: string) => setLink(a)}
      />
      <WebView
        {...global.webView}
        ref={webViewRef}
        source={{ uri: link }}
        onNavigationStateChange={(a: any) => setLink(a.url)}
        onLoad={() => setWebLoading(false)}
        onLoadProgress={() => setWebLoading(true)}
        onError={() => onToggleError()}
        onHttpError={() => onToggleHTTPError()}
        onRenderProcessGone={() => onToggleProcess()}
        thirdPartyCookiesEnabled={setting.cookie}
        showsHorizontalScrollIndicator={setting.scroll}
        showsVerticalScrollIndicator={setting.scroll}
        incognito={setting.secret}
        cacheEnabled={setting.cache}
        textZoom={parseInt(setting.text)}
        setBuiltInZoomControls={setting.zoom}
        injectedJavaScriptBeforeContentLoaded={setting.phone ? "" : global.js}
      />
      <ProgressPyF webLoading={webLoading} />
      <MenuButton
        gf={globalFunctions}
        menu={setting.menu}
        iconprop={{
          icon: "cog",
          onPress: () => navigation.navigate("Settings"),
          style: styles.icon,
        }}
      />
      <SnackBarsForErrors
        HTTPError={HTTPError}
        onDismissHTTPError={onDismissHTTPError}
        goback={goback}
        Error={Error}
        onDismissError={onDismissError}
        Process={Process}
        onDismissProcess={onDismissProcess}
        Reload={Reload}
        onDismissReload={onDismissReload}
        reload={reload}
      />
    </>
  );
});

const MainSetting = memo(({ navigation }: any) => {
  const MainSettingComponent = {
    close: navigation.goBack,
    reloadWebView: globalFunctions.reload,
    isOnSetting: () => {
      isOnSetting = false;
    },
    reload: globalFunctions.reload,
    erase: globalFunctions.erase,
  };

  return <Settings {...MainSettingComponent} />;
});

const AppBase = memo(() => (
  <>
    <StatusBar hidden />
    <Stack.Navigator screenOptions={global.screenopt}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={MainSetting} />
    </Stack.Navigator>
  </>
));

export default memo(AppBase);
