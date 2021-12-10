const global = {
  ishome ( link, home ) {
    return (
      link == home ||
      link == home + "/" ||
      link == home + "/index.html" ||
      link == home + "/index-en.html"
    );
  },
  js: `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);`,
  screenopt: { headerShown: false, gestureEnabled: true },
  check: ( a ) => ( a ? "checked" : "unchecked" ),
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
    userAgent: "CIAV",
    originWhitelist: [ "https://*" ]
  }
};

export default global;
