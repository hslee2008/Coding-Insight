import "react-native-gesture-handler";
import React, { useRef, useState } from "react";
import { StatusBar, BackHandler } from "react-native";
import { WebView } from "react-native-webview";
import Settings, { setting } from "./src/setting.jsx";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { home, ProgressPyF, MenuButton } from "./src/component.jsx";
import styles from "./src/style.jsx";
import global from "./src/global.jsx";

var Stack = createStackNavigator(),
  reloadWebView: any;

const Home = React.memo(({ navigation }: any) => {
  const webViewRef: any = useRef(null);

  const [webLoading, setWebLoading] = useState(true);
  const [link, setLink] = useState(
    setting.korean ? home : home + "/index-en.html"
  );

  const reload = () => {
    webViewRef.current.clearHistory();
    webViewRef.current.clearFormData();
    webViewRef.current.clearCache(true);
    webViewRef.current.reload();
  };
  reloadWebView = reload;
  const goback = () => webViewRef.current.goBack();
  const goforward = () => webViewRef.current.goForward();

  BackHandler.addEventListener("hardwareBackPress", () => {
    if (global.ishome(link)) BackHandler.exitApp();
    else webViewRef.current.goBack();

    return true;
  });

  return (
    <>
      {!setting.bar ? <StatusBar hidden /> : null}
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
        domStorageEnabled
        startInLoadingState
        allowsFullscreenVideo
        injectedJavaScriptBeforeContentLoaded={
          setting.phone ? "" : global.javascript
        }
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
        }}
        iconprop={{
          icon: "cog",
          onPress: () => navigation.navigate("Settings"),
          style: styles.icon,
        }}
      />
    </>
  );
});

const MainSetting = React.memo(({ navigation }: any) => (
  <Settings close={navigation.goBack} reloadWebView={reloadWebView} />
));

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={global.screenopt}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={MainSetting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default React.memo(App);
