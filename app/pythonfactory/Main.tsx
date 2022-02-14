import 'react-native-gesture-handler';
import React, { useRef, useState, memo } from 'react';
import { WebView } from 'react-native-webview';
import {
  home,
  ProgressPyF,
  SnackBarsForErrors,
  MenuButton,
} from './src/component.jsx';
import global from './src/global.jsx';

var globalFunctions: any;

const HomeWrapper = memo(({ navigation }: any) => {
  const webViewRef: any = useRef(null);

  const [webLoading, setWebLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [HTTPError, setHTTPError] = useState(false);
  const [Error, setError] = useState(false);
  const [Process, setProcess] = useState(false);
  const [Reload, setReload] = useState(false);
  const [link, setLink] = useState(home);

  const onToggleHTTPError = () => setHTTPError(!visible);
  const onDismissHTTPError = () => setHTTPError(false);
  const onToggleError = () => setError(!visible);
  const onDismissError = () => setError(false);
  const onToggleProcess = () => setProcess(!visible);
  const onDismissProcess = () => setProcess(false);
  const onToggleReload = () => setReload(!visible);
  const onDismissReload = () => setReload(false);

  const webLoadingFalse = () => setWebLoading(false);
  const webLoadingTrue = () => setWebLoading(true);

  const reload = () => webViewRef.current.reload();
  const goback = () => webViewRef.current.goBack();
  const goforward = () => webViewRef.current.goForward();
  const stop = () => {
    webViewRef.current.stopLoading();
    webLoadingFalse();
    onToggleReload();
  };
  const erase = () => {
    webViewRef.current.clearHistory();
    webViewRef.current.clearFormData();
    webViewRef.current.clearCache(true);
  };

  globalFunctions = {
    webViewRef,
    webLoading,
    setWebLoading,
    link,
    setLink,
    visible,
    setVisible,
    reload,
    goback,
    goforward,
    stop,
    navigation,
    erase,
  };

  return (
    <>
      <SnackBarsForErrors
        {...{
          HTTPError,
          onDismissHTTPError,
          goback,
          Error,
          onDismissError,
          Process,
          onDismissProcess,
          Reload,
          onDismissReload,
          reload,
        }}
      />
      <WebView
        {...global.webView}
        ref={webViewRef}
        source={{ uri: link }}
        onNavigationStateChange={(a: any) => setLink(a.url)}
        onLoad={webLoadingFalse}
        onLoadProgress={webLoadingTrue}
        onError={onToggleError}
        onHttpError={onToggleHTTPError}
        onRenderProcessGone={onToggleProcess}
      />
      <ProgressPyF webLoading={webLoading} />
      <MenuButton gf={globalFunctions} />
    </>
  );
});

export { HomeWrapper, globalFunctions };
