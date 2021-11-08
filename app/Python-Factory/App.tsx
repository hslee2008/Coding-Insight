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
import { Dialog, Portal, Provider, Button } from "react-native-paper";

var Stack = createStackNavigator(),
  reloadWebView: any;

const Alert = (props: any) => (
  <Portal>
    <Dialog visible={props.visible} onDismiss={() => props.setVisible(false)}>
      <Dialog.Title>See More about our Site</Dialog.Title>
      <Dialog.Content>
        <Button
          icon="magnify"
          onPress={() => {
            props.setVisible(false);
            props.setLink("https://cse.google.com/cse?cx=ee1853348b1a4e08b");
          }}
        >
          Search
        </Button>
        <Button
          icon="github"
          onPress={() => {
            props.setVisible(false);
            props.setLink(
              "https://github.com/HyunseungLee-Travis/Coding-Insight"
            );
          }}
        >
          GitHub
        </Button>
        <Button
          icon="youtube"
          onPress={() => {
            props.setVisible(false);
            props.setLink(
              "https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
            );
          }}
        >
          YouTube
        </Button>
        <Button
          icon="controller-classic"
          onPress={() => {
            props.setVisible(false);
            props.setLink("https://www.coding-insight.com/game.html");
          }}
        >
          Game
        </Button>
        <Button
          icon="chat"
          onPress={() => {
            props.setVisible(false);
            props.setLink("https://www.coding-insight.com/chat.html");
          }}
        >
          Chat
        </Button>
      </Dialog.Content>
    </Dialog>
  </Portal>
);

const Home = React.memo(({ navigation }: any) => {
  const webViewRef: any = useRef(null);

  const [webLoading, setWebLoading] = useState(true);
  const [link, setLink] = useState(
    setting.korean ? home : home + "/index-en.html"
  );
  const [visible, setVisible] = React.useState(false);

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
    global.ishome(link) ? BackHandler.exitApp() : webViewRef.current.goBack();
    return true;
  });

  return (
    <Provider>
      <Alert
        visible={visible}
        setVisible={setVisible}
        setLink={(a: string) => setLink(a)}
      />

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
          setVisible,
          visible,
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
