import "react-native-gesture-handler";
import React, { useRef, useState, memo } from "react";
import { StatusBar, BackHandler } from "react-native";
import { WebView } from "react-native-webview";
import Settings, { setting } from "./src/setting.jsx";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { home, ProgressPyF, MenuButton, Alert } from "./src/component.jsx";
import styles from "./src/style.jsx";
import global from "./src/global.jsx";
import { Provider } from "react-native-paper";
import { NativeBaseProvider, useToast } from "native-base";

var Stack = createStackNavigator(),
  reloadWebView: any,
  navi: any,
  web_view: any,
  linka: any;

const Home = memo(({ navigation }: any) => {
  const webViewRef: any = useRef(null);
  const toast = useToast();

  const [webLoading, setWebLoading] = useState(true);
  const [link, setLink] = useState(
    setting.korean ? home : home + "/index-en.html"
  );
  const [visible, setVisible] = useState(false);
  const [menu, setMenu] = useState(false);

  const reload = () => {
    webViewRef.current.clearHistory();
    webViewRef.current.clearFormData();
    webViewRef.current.clearCache(true);
    webViewRef.current.reload();
  };
  reloadWebView = reload;
  const goback = () => webViewRef.current.goBack();
  const goforward = () => webViewRef.current.goForward();
  const stop = () => {
    webViewRef.current.stopLoading();
    setWebLoading(false);
    toast.show({
      title: "Make sure!",
      description: "to reload to see the full page",
      status: "info",
    });
  };

  navi = navigation;
  web_view = webViewRef;
  linka = link;

  return (
    <Provider>
      <Alert
        visible={visible}
        setVisible={setVisible}
        setLink={(a: string) => setLink(a)}
      />
      <WebView
        ref={webViewRef}
        source={{ uri: link }}
        onNavigationStateChange={(a: any) => setLink(a.url)}
        userAgent={global.browsername}
        onLoad={() => setWebLoading(false)}
        onLoadProgress={() => setWebLoading(true)}
        thirdPartyCookiesEnabled={setting.cookie}
        showsHorizontalScrollIndicator={setting.scroll}
        showsVerticalScrollIndicator={setting.scroll}
        incognito={setting.secret}
        cacheEnabled={setting.cache}
        pullToRefreshEnabled
        javaScriptCanOpenWindowsAutomatically
        geolocationEnabled
        setSupportMultipleWindows
        saveFormDataDisabled
        allowFileAccess
        domStorageEnabled
        startInLoadingState
        allowsFullscreenVideo
        injectedJavaScriptBeforeContentLoaded={
          setting.phone ? "" : global.javascript
        }
        textZoom={parseInt(setting.text)}
        setBuiltInZoomControls={setting.zoom}
        onError={() => {
          toast.show({
            title: "Error",
            status: "error",
            description: "Please try again",
          });
        }}
      />
      <ProgressPyF webLoading={webLoading} />
      <MenuButton
        menu={setting.menu}
        barprop={{
          goback,
          goforward,
          webLoading,
          setLink,
          reload,
          link,
          navigation,
          setVisible,
          visible,
          stop,
          setWebLoading,
          setMenu,
        }}
        iconprop={{
          icon: "cog",
          onPress: () => navigation.navigate("Settings"),
          style: styles.icon,
        }}
      />
    </Provider>
  );
});

const MainSetting = memo(({ navigation }: any) => (
  <Settings close={navigation.goBack} reloadWebView={reloadWebView} />
));

function App() {
  BackHandler.addEventListener("hardwareBackPress", () => {
    navi.navigate("Home");

    global.ishome(linka, home)
      ? BackHandler.exitApp()
      : web_view.current.goBack();

    return true;
  });

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator screenOptions={global.screenopt}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={MainSetting} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default memo(App);
