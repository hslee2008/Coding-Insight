import React from "react";
import { Text } from "react-native";

const global = {
  ishome(link, home) {
    return (
      link == home ||
      link == home + "/"
    );
  },
  js: `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);`,
  screenopt: { headerShown: false, gestureEnabled: true },
  check: (a) => (a ? "checked" : "unchecked"),
  webView: {
    pullToRefreshEnabled: true,
    javaScriptCanOpenWindowsAutomatically: true,
    geolocationEnabled: true,
    setSupportMultipleWindows: true,
    saveFormDataDisabled: true,
    allowFileAccess: true,
    domStorageEnabled: true,
    startInLoadingState: true,
    allowsFullscreenVideo: true,
    mediaPlaybackRequiresUserAction: true,
    scalesPageToFit: true,
    allowFileAccessFromFileURLs: true,
    allowUniversalAccessFromFileURLs: true,
    userAgent: "CIAV",
    originWhitelist: ["https://*"],
    renderError: (errorName) => <Text>{errorName}</Text>,
  },
};

export default global;
