/*
! React Native Imports
*/
import "react-native-gesture-handler";
import React, { useRef, useState, memo } from "react";
import { BackHandler } from "react-native";
import { WebView } from "react-native-webview";
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

/*
!GLOBAL VARIABLES
*/
var isOnSetting: boolean = false,
  globalFunctions: any;

const HomeWrapper = memo(({ navigation }: any) => {
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

  /*
  !STATES
  */
  const [webLoading, setWebLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [HTTPError, setHTTPError] = useState(false);
  const [Error, setError] = useState(false);
  const [Process, setProcess] = useState(false);
  const [Reload, setReload] = useState(false);
  const [link, setLink] = useState(
    setting.korean ? home : home + "/index-en.html"
  );

  /*
  !FUNCTIONS
  */
  const onToggleHTTPError = () => setHTTPError(!visible);
  const onDismissHTTPError = () => setHTTPError(false);
  const onToggleError = () => setError(!visible);
  const onDismissError = () => setError(false);
  const onToggleProcess = () => setProcess(!visible);
  const onDismissProcess = () => setProcess(false);
  const onToggleReload = () => setReload(!visible);
  const onDismissReload = () => setReload(false);

  const hide = () => setVisible(false);

  const webLoadingFalse = () => setWebLoading(false);
  const webLoadingTrue = () => setWebLoading(true);

  const reload = () => webViewRef.current.reload();
  const goback = () => webViewRef.current.goBack();
  const goforward = () => webViewRef.current.goForward();
  const stop = () => {
    webViewRef.current.stopLoading();
    webLoadingFalse();
    onToggleReload();
  };
  const erase = () => {
    webViewRef.current.clearHistory();
    webViewRef.current.clearFormData();
    webViewRef.current.clearCache(true);
  };

  /*
  !GLOBAL FUNCTIONS
  */
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
      <Alert visible={visible} hide={hide} setLink={setLink} />
      <SnackBarsForErrors
        {...{
          HTTPError,
          onDismissHTTPError,
          goback,
          Error,
          onDismissError,
          Process,
          onDismissProcess,
          Reload,
          onDismissReload,
          reload,
        }}
      />
      <WebView
        {...global.webView}
        ref={webViewRef}
        source={{ uri: link }}
        onNavigationStateChange={(a: any) => setLink(a.url)}
        onLoad={webLoadingFalse}
        onLoadProgress={webLoadingTrue}
        onError={onToggleError}
        onHttpError={onToggleHTTPError}
        onRenderProcessGone={onToggleProcess}
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
    </>
  );
});

const SettingWrapper = ({ navigation }: any) => (
  <Settings
    {...{
      close: navigation.goBack,
      reloadWebView: globalFunctions.reload,
      reload: globalFunctions.reload,
      erase: globalFunctions.erase,
      isOnSetting: () => (isOnSetting = false),
    }}
  />
);

export { HomeWrapper, SettingWrapper };
