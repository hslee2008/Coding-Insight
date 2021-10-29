import React, { useRef, useState, useEffect } from "react";
import { FAB, IconButton, ActivityIndicator } from "react-native-paper";
import {
  View,
  Linking,
  DrawerLayoutAndroid,
  StatusBar,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";
import Settings, { setting } from "./src/setting.js";

function useForceUpdate() {
  const [, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}

function App() {
  const forceUpdate = useForceUpdate();
  const webViewRef: any = useRef(null);
  const drawer: any = useRef(null);

  const [webLoading, setWebLoading] = useState(true);
  const [link, setLink] = useState(
    setting.english
      ? "https://www.coding-insight.com/index-en.html"
      : "https://www.coding-insight.com/"
  );
  const [modal, setModal] = useState(false);
  const [bar, setBar] = useState(false);

  const reload = () => {
    webViewRef.current.clearHistory();
    webViewRef.current.clearFormData();
    webViewRef.current.clearCache(true);
    webViewRef.current.reload();
  };
  const goback = () => webViewRef.current.goBack();
  const goforward = () => webViewRef.current.goForward();

  useEffect(() => {
    setTimeout(() => setBar(false), 5000);
  }, [bar])

  return (
    <>
      <StatusBar hidden />
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={() => (
          <Settings setLink={setLink} reload={reload} drawer={drawer} showBar={() => setBar(true)} />
        )}
      >
        <WebView
          ref={webViewRef}
          source={{ uri: link }}
          onNavigationStateChange={(a) => setLink(a.url)}
          userAgent={"CIAV"}
          allowsFullscreenVideo={true}
          thirdPartyCookiesEnabled={setting.cookie}
          showsHorizontalScrollIndicator={setting.scroll}
          showsVerticalScrollIndicator={setting.scroll}
          incognito={setting.secret}
          cacheEnabled={setting.cache}
          onLoad={() => setWebLoading(false)}
          onLoadProgress={() => setWebLoading(true)}
          pullToRefreshEnabled={true}
          javaScriptCanOpenWindowsAutomatically={true}
          geolocationEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          onScroll={() => setBar(true)}
          injectedJavaScriptBeforeContentLoaded={
            setting.phone
              ? ""
              : `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `
          }
        />

        {bar ? (
          <View
            style={[
              {
                flex: 0.08,
                position: "absolute",
                width: Dimensions.get("screen").width - 80,
                height: 50,
                bottom: 0,
                backgroundColor: "black",
                borderRadius: 10,
                margin: 10,
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <IconButton icon="undo" onPress={goback} color="white" />
              <IconButton icon="redo" onPress={goforward} color="white" />
              <IconButton
                icon={
                  !webLoading
                    ? "reload"
                    : () => <ActivityIndicator color="white" size="small" />
                }
                onPress={reload}
                color="white"
              />
              <IconButton
                icon="chat"
                disabled={link == "https://www.coding-insight.com/chat.html"}
                onPress={() => {
                  setLink("https://www.coding-insight.com/chat.html");
                  forceUpdate();
                }}
                onLongPress={() =>
                  Linking.openURL("https://www.coding-insight.com/chat.html")
                }
                color="white"
              />
              <IconButton
                icon="home"
                disabled={link == "https://www.coding-insight.com/"}
                onPress={() => {
                  setLink("https://www.coding-insight.com/");
                  forceUpdate();
                }}
                onLongPress={() =>
                  Linking.openURL("https://www.coding-insight.com/")
                }
                color="white"
              />
            </View>
          </View>
        ) : (
          <></>
        )}

        <FAB.Group
          visible={bar}
          open={modal}
          icon="menu"
          color="white"
          style={{ bottom: -10, right: -5, margin: 0 }}
          fabStyle={{ backgroundColor: "black" }}
          actions={[
            {
              icon: "controller-classic",
              onPress: () =>
                setLink("https://www.coding-insight.com/game.html"),
            },
            {
              icon: "github",
              label: "GitHub",
              onPress: () =>
                Linking.openURL(
                  "https://github.com/HyunseungLee-Travis/Coding-Insight"
                ),
            },
            {
              icon: "microsoft-internet-explorer",
              label: "Browser",
              onPress: () => Linking.openURL("https://www.coding-insight.com/"),
            },
            {
              icon: "youtube",
              label: "YouTube",
              onPress: () =>
                Linking.openURL(
                  "https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
                ),
            },
            {
              icon: "cog",
              onPress: () => drawer.current.openDrawer(),
              small: false,
            },
          ]}
          onStateChange={() => setModal((a) => !a)}
        />
      </DrawerLayoutAndroid>
    </>
  );
}

export default React.memo(App);
