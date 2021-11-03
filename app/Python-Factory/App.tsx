import "react-native-gesture-handler";
import React, { useRef, useState } from "react";
import { IconButton, ProgressBar } from "react-native-paper";
import { View, Linking, StatusBar, Animated, BackHandler } from "react-native";
import { WebView } from "react-native-webview";
import Settings, { setting } from "./src/setting.js";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const home = "https://www.coding-insight.com";
var reloadWebView: any;

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
        icon="reload"
        onPress={props.reload}
        color="white"
        disabled={props.webLoading}
      />
      <IconButton
        icon="home"
        disabled={
          props.link == home ||
          props.link == home + "/" ||
          props.link == home + "/index.html"
        }
        onPress={() => props.setLink(home)}
        onLongPress={() => Linking.openURL(home)}
        color="white"
      />
      <IconButton
        icon="cog"
        onPress={() => props.navigation.navigate("Settings")}
        color="white"
      />
    </View>
  );
}

function Home({ navigation }: any) {
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
    if (
      link == home ||
      link == home + "/" ||
      link == home + "/index.html" ||
      link == home + "index-en.html"
    ) BackHandler.exitApp();
    else webViewRef.current.goBack();

    return true;
  });

  return (
    <>
      <StatusBar hidden />
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
            : `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);`
        }
      />
      {webLoading ? <ProgressBar indeterminate color="dodgerblue" style={{position: "absolute", width: "100%", height: 5, bottom: 0}} /> : <></>}
      {setting.menu ? (
        <Bar
          goback={goback}
          goforward={goforward}
          webLoading={webLoading}
          setLink={setLink}
          reload={reload}
          link={link}
          navigation={navigation}
        />
      ) : (
        <IconButton
          icon="cog"
          onPress={() => navigation.navigate("Settings")}
          style={{
            position: "absolute",
            backgroundColor: "white",
            right: 0,
            bottom: 0,
          }}
        />
      )}
    </>
  );
}

const MainSetting = ({ navigation }: any) => (
  <Settings close={navigation.goBack} reloadWebView={reloadWebView} />
);

const forSlide = ({ current, next, inverted, layouts: { screen } }: any) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [screen.width, 0, screen.width * -0.3],
              extrapolate: "clamp",
            }),
            inverted
          ),
        },
      ],
    },
  };
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            cardStyleInterpolator: forSlide,
            gestureEnabled: true,
            gestureDirection: "horizontal-inverted",
          }}
        />
        <Stack.Screen
          name="Settings"
          component={MainSetting}
          options={{
            cardStyleInterpolator: forSlide,
            gestureEnabled: true,
            gestureDirection: "horizontal-inverted",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default React.memo(App);
