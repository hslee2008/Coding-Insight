import React, { useRef, useState } from "react";
import {
  Banner,
  IconButton,
  ActivityIndicator,
  Dialog,
} from "react-native-paper";
import {
  View,
  Linking,
  DrawerLayoutAndroid,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { WebView } from "react-native-webview";
import Settings, { setting } from "./src/setting.js";
import { fetchUpdateAsync, reloadAsync } from "expo-updates";

function useForceUpdate() {
  const [, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}

function BANN(props: any) {
  return (
    <Banner
      visible={props.fab}
      style={{ position: "absolute", width: "100%" }}
      actions={[
        {
          label: "GitHub",
          onPress: () => {
            props.setFab(false);
            Linking.openURL(
              "https://github.com/HyunseungLee-Travis/Coding-Insight"
            );
          },
        },
        {
          label: "YouTube",
          onPress: () => {
            props.setFab(false);
            Linking.openURL(
              "https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
            );
          },
        },
        {
          label: "Close",
          onPress: () => props.setFab(false),
        },
      ]}
      icon={({ size }) => (
        <Image
          source={{
            uri: "https://www.coding-insight.com/py.png",
          }}
          style={{
            width: size,
            height: size,
          }}
        />
      )}
    >
      Learn more about us!
    </Banner>
  );
}

function Bar(props: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        flex: 0.08,
        backgroundColor: "black",
      }}
    >
      <IconButton icon="undo" onPress={props.goback} color="white" />
      <IconButton icon="redo" onPress={props.goforward} color="white" />
      <IconButton
        icon={
          !props.webLoading
            ? "reload"
            : () => <ActivityIndicator color="white" size="small" />
        }
        onPress={props.reload}
        color="white"
      />
      <IconButton
        icon="home"
        disabled={props.link == "https://www.coding-insight.com/"}
        onPress={() => {
          props.setLink("https://www.coding-insight.com/");
          props.forceUpdate();
        }}
        onLongPress={() => {
          Linking.openURL("https://www.coding-insight.com/");
        }}
        color="white"
      />
      <IconButton
        icon="menu"
        onPress={() => props.setFab((p: boolean) => !p)}
        color="white"
      />
    </View>
  );
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
  const [fab, setFab] = useState(false);
  const [visible, setVisible] = useState(false);

  React.useEffect(() => {
    try {
      const { isAvailable } = fetchUpdateAsync();

      if (isAvailable) setVisible(true);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const reload = () => {
    webViewRef.current.clearHistory();
    webViewRef.current.clearFormData();
    webViewRef.current.clearCache(true);
    webViewRef.current.reload();
  };
  const goback = () => webViewRef.current.goBack();
  const goforward = () => webViewRef.current.goForward();

  return (
    <>
      <StatusBar hidden />
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={() => (
          <Settings
            reload={reload}
            drawer={drawer}
            setLink={() => setVisible(false)}
          />
        )}
      >
        <Banner
          visible={visible}
          actions={[
            {
              label: "Update",
              onPress: reloadAsync,
            },
            {
              label: "Ignore",
              onPress: () => setVisible(false),
            },
          ]}
          icon={({ size }) => (
            <Image
              source={{
                uri: "https://www.coding-insight.com/py.png",
              }}
              style={{
                width: size,
                height: size,
              }}
            />
          )}
        >
          There was a problem processing a transaction on your credit card.
        </Banner>
        <WebView
          ref={webViewRef}
          source={{ uri: link }}
          onNavigationStateChange={(a) => setLink(a.url)}
          userAgent={"CIAV"}
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
            setting.phone
              ? ""
              : `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `
          }
        />
        <BANN fab={fab} setFab={setFab} />
        <Bar
          goback={goback}
          goforward={goforward}
          forceUpdate={forceUpdate}
          webLoading={webLoading}
          setFab={setFab}
          setLink={setLink}
          reload={reload}
          link={link}
        />
      </DrawerLayoutAndroid>
    </>
  );
}

export default React.memo(App);
