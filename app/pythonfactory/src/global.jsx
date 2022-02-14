import React from 'react';
import { Text } from 'react-native';

const global = {
  ishome(link, home) {
    return link == home || link == home + '/';
  },
  screenopt: { headerShown: false, gestureEnabled: true },
  check: (a) => (a ? 'checked' : 'unchecked'),
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
    userAgent: 'CIAV',
    originWhitelist: ['https://*'],
    renderError: (errorName) => <Text>{errorName}</Text>,
  },
};

export default global;
