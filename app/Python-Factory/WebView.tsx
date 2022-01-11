import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { WebView } from "react-native-webview";
import { home } from "./src/component.jsx";
import { setting } from "./src/setting.jsx";
import { SnackBarsForErrors } from "./src/component.jsx";
import global from "./src/global";

const PythonFactoryWebView = forwardRef((props: any, ref: any) => {
  const webViewRef: any = useRef();

  const [webLoading, setWebLoading] = useState(true);
  const [HTTPError, setHTTPError] = useState(false);
  const [Error, setError] = useState(false);
  const [Process, setProcess] = useState(false);
  const [Reload, setReload] = useState(false);
  const [link, setLink] = useState(
    setting.korean ? home : home + "/index-en.html"
  );

  const webLoadingFalse = () => setWebLoading(false);
  const webLoadingTrue = () => setWebLoading(true);
  const onToggleError = () => setError((p) => !p);
  const onToggleHTTPError = () => setHTTPError((p) => !p);
  const onToggleProcess = () => setProcess((p) => !p);
  const onDismissError = () => setError(false);
  const onDismissHTTPError = () => setHTTPError(false);
  const onDismissProcess = () => setProcess(false);
  const onDismissReload = () => setReload(false);

  useImperativeHandle(ref, () => ({
    goBack: () => webViewRef.current.goBack(),
    goForward: () => webViewRef.current.goForward(),
    reload: () => webViewRef.current.reload(),
    erase() {
      webViewRef.current.clearHistory();
      webViewRef.current.clearFormData();
      webViewRef.current.clearCache(true);
    },

    getLink: () => link,
    setLink: setLink,

    getWebLoading: () => webLoading,
  }));

  return (
    <>
      <WebView
        {...props}
        {...global.webView}
        ref={webViewRef}
        source={{ uri: link }}
        onNavigationStateChange={(a: any) => setLink(a)}
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

      <SnackBarsForErrors
        {...{
          webViewRef,
          HTTPError,
          onDismissHTTPError,
          Error,
          onDismissError,
          Process,
          onDismissProcess,
          Reload,
          onDismissReload,
        }}
      />
    </>
  );
});

export default PythonFactoryWebView;
